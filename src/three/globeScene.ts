import * as THREE from 'three'
import { createStage } from '@/three/stage'

const clamp = (v: number, a: number, b: number) => Math.min(b, Math.max(a, v))
const rad = THREE.MathUtils.degToRad

/** [lat, lon] in degrees */
const HOME: [number, number] = [20.6, 78.9] // India
const CITIES: [number, number][] = [
  [51.5, -0.1], // London
  [40.7, -74.0], // New York
  [25.2, 55.3], // Dubai
  [1.35, 103.8], // Singapore
  [-33.9, 151.2], // Sydney
  [37.8, -122.4], // San Francisco
]

const toVec = (lat: number, lon: number, r = 1) =>
  new THREE.Vector3(Math.cos(rad(lat)) * Math.sin(rad(lon)), Math.sin(rad(lat)), Math.cos(rad(lat)) * Math.cos(rad(lon))).multiplyScalar(r)

/* tiny value-noise, used to give the dotted planet continent-like clusters */
const hash = (x: number, y: number, z: number) => {
  const n = Math.sin(x * 127.1 + y * 311.7 + z * 74.7) * 43758.5453
  return n - Math.floor(n)
}
function noise3(x: number, y: number, z: number) {
  const xi = Math.floor(x), yi = Math.floor(y), zi = Math.floor(z)
  const xf = x - xi, yf = y - yi, zf = z - zi
  const u = xf * xf * (3 - 2 * xf), v = yf * yf * (3 - 2 * yf), w = zf * zf * (3 - 2 * zf)
  const l = (a: number, b: number, t: number) => a + (b - a) * t
  return l(
    l(l(hash(xi, yi, zi), hash(xi + 1, yi, zi), u), l(hash(xi, yi + 1, zi), hash(xi + 1, yi + 1, zi), u), v),
    l(l(hash(xi, yi, zi + 1), hash(xi + 1, yi, zi + 1), u), l(hash(xi, yi + 1, zi + 1), hash(xi + 1, yi + 1, zi + 1), u), v),
    w
  )
}
const fbm = (x: number, y: number, z: number) => noise3(x, y, z) * 0.55 + noise3(x * 2.1, y * 2.1, z * 2.1) * 0.3 + noise3(x * 4.3, y * 4.3, z * 4.3) * 0.15

function dotTexture() {
  const c = document.createElement('canvas')
  c.width = c.height = 64
  const g = c.getContext('2d')!
  const grad = g.createRadialGradient(32, 32, 0, 32, 32, 32)
  grad.addColorStop(0, 'rgba(255,255,255,1)')
  grad.addColorStop(0.55, 'rgba(255,255,255,0.9)')
  grad.addColorStop(1, 'rgba(255,255,255,0)')
  g.fillStyle = grad
  g.fillRect(0, 0, 64, 64)
  return new THREE.CanvasTexture(c)
}

/** Mounts the dotted globe with gold arcs from India to the world. Returns a cleanup function. */
export function mount(canvas: HTMLCanvasElement, host: HTMLElement): () => void {
  const stage = createStage(canvas, host, { fov: 34, z: 4.5 })
  const { scene } = stage

  const globe = new THREE.Group()
  scene.add(globe)

  // opaque core hides the dots on the far side
  const core = new THREE.Mesh(new THREE.SphereGeometry(0.985, 48, 48), new THREE.MeshBasicMaterial({ color: 0x00112b }))
  globe.add(core)

  // soft atmosphere rim
  const rim = new THREE.Mesh(
    new THREE.SphereGeometry(1.12, 48, 48),
    new THREE.ShaderMaterial({
      transparent: true,
      side: THREE.BackSide,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexShader: 'varying vec3 vN; void main(){ vN = normalize(normalMatrix * normal); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
      fragmentShader: 'varying vec3 vN; void main(){ float i = pow(0.72 - dot(vN, vec3(0.0,0.0,1.0)), 3.0); gl_FragColor = vec4(0.30, 0.51, 0.88, 1.0) * i * 0.6; }',
    })
  )
  scene.add(rim)

  // dotted surface: land clusters (bright) over an ocean grid (dim)
  const N = 7600
  const golden = Math.PI * (3 - Math.sqrt(5))
  const land: number[] = []
  const sea: number[] = []
  for (let i = 0; i < N; i++) {
    const y = 1 - (i / (N - 1)) * 2
    const r = Math.sqrt(1 - y * y)
    const th = golden * i
    const x = Math.cos(th) * r
    const z = Math.sin(th) * r
    const isLand = fbm(x * 1.7 + 3.1, y * 1.7 + 1.7, z * 1.7 + 5.3) > 0.5
    ;(isLand ? land : sea).push(x, y, z)
  }
  const sprite = dotTexture()
  const makePoints = (arr: number[], size: number, color: number, opacity: number) => {
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.Float32BufferAttribute(arr, 3))
    return new THREE.Points(
      geo,
      new THREE.PointsMaterial({ size, map: sprite, color, transparent: true, opacity, depthWrite: false, sizeAttenuation: true, alphaTest: 0.02 })
    )
  }
  globe.add(makePoints(sea, 0.014, 0x4d82e0, 0.42))
  globe.add(makePoints(land, 0.03, 0xdbe8ff, 1))

  // arcs from home to each city
  const home = toVec(HOME[0], HOME[1])
  const SEG = 72
  type Arc = { line: THREE.Line; head: THREE.Mesh; pts: THREE.Vector3[]; phase: number }
  const arcs: Arc[] = CITIES.map(([lat, lon], k) => {
    const dest = toVec(lat, lon)
    const angle = home.angleTo(dest)
    const pts: THREE.Vector3[] = []
    for (let s = 0; s <= SEG; s++) {
      const f = s / SEG
      const p = home.clone().lerp(dest, f).normalize()
      pts.push(p.multiplyScalar(1.004 + (0.1 + 0.22 * (angle / Math.PI)) * Math.sin(Math.PI * f)))
    }
    const geo = new THREE.BufferGeometry().setFromPoints(pts)
    const line = new THREE.Line(geo, new THREE.LineBasicMaterial({ color: 0xffbd59, transparent: true, opacity: 0.9 }))
    line.geometry.setDrawRange(0, 0)
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.014, 12, 12), new THREE.MeshBasicMaterial({ color: 0xfff1cf }))
    globe.add(line, head)

    // city marker
    const dot = new THREE.Mesh(new THREE.CircleGeometry(0.016, 20), new THREE.MeshBasicMaterial({ color: 0xffffff }))
    dot.position.copy(toVec(lat, lon, 1.003))
    dot.lookAt(dot.position.clone().multiplyScalar(2))
    globe.add(dot)
    return { line, head, pts, phase: k / CITIES.length }
  })

  // home marker with a slow pulse
  const homeDot = new THREE.Mesh(new THREE.CircleGeometry(0.026, 24), new THREE.MeshBasicMaterial({ color: 0xffbd59 }))
  homeDot.position.copy(toVec(HOME[0], HOME[1], 1.004))
  homeDot.lookAt(homeDot.position.clone().multiplyScalar(2))
  const pulse = new THREE.Mesh(
    new THREE.RingGeometry(0.03, 0.036, 40),
    new THREE.MeshBasicMaterial({ color: 0xffbd59, transparent: true, opacity: 0.8, side: THREE.DoubleSide })
  )
  pulse.position.copy(homeDot.position)
  pulse.lookAt(homeDot.position.clone().multiplyScalar(2))
  globe.add(homeDot, pulse)

  // orient so India faces the camera, with a gentle axial tilt
  const baseYaw = -rad(HOME[1]) + 0.25
  globe.rotation.set(0.32, baseYaw, 0)

  // input: drag to spin, then drift on
  const st = { dragging: false, lastX: 0, vel: 0 }
  const down = (e: PointerEvent) => {
    if (stage.reduced || (e.pointerType === 'mouse' && e.button !== 0)) return
    st.dragging = true
    st.lastX = e.clientX
    st.vel = 0
    host.setPointerCapture(e.pointerId)
    host.style.cursor = 'grabbing'
  }
  const move = (e: PointerEvent) => {
    if (!st.dragging) return
    const dx = e.clientX - st.lastX
    st.lastX = e.clientX
    globe.rotation.y += dx * 0.006
    st.vel = 0.7 * st.vel + 0.3 * dx * 0.006 * 60
    stage.invalidate()
  }
  const up = () => {
    st.dragging = false
    host.style.cursor = ''
  }
  host.addEventListener('pointerdown', down)
  host.addEventListener('pointermove', move)
  host.addEventListener('pointerup', up)
  host.addEventListener('pointercancel', up)

  stage.onFrame((dt, t) => {
    const intro = stage.reduced ? 1 : clamp(t / 1.6, 0, 1)
    const eased = 1 - Math.pow(1 - intro, 3)
    globe.scale.setScalar(0.9 + 0.1 * eased)

    if (!st.dragging) {
      globe.rotation.y += (st.vel + (stage.reduced ? 0 : 0.07)) * dt
      st.vel *= Math.exp(-2.5 * dt)
    }

    arcs.forEach((a) => {
      // grow, hold, fade: one calm cycle every ~7s, staggered per arc
      const cycle = stage.reduced ? 0.45 : ((t / 7 + a.phase) % 1)
      const grow = clamp(cycle / 0.45, 0, 1)
      const count = Math.max(2, Math.floor(grow * (SEG + 1)))
      a.line.geometry.setDrawRange(0, grow > 0 ? count : 0)
      const fade = cycle > 0.8 ? 1 - (cycle - 0.8) / 0.2 : 1
      ;(a.line.material as THREE.LineBasicMaterial).opacity = 0.9 * fade
      const head = a.pts[Math.min(SEG, count - 1)]
      a.head.position.copy(head)
      a.head.visible = grow < 1 && !stage.reduced
    })

    const p = stage.reduced ? 0.5 : (t * 0.5) % 1
    pulse.scale.setScalar(1 + p * 2.6)
    ;(pulse.material as THREE.MeshBasicMaterial).opacity = 0.8 * (1 - p)
  })

  stage.invalidate()

  return () => {
    host.removeEventListener('pointerdown', down)
    host.removeEventListener('pointermove', move)
    host.removeEventListener('pointerup', up)
    host.removeEventListener('pointercancel', up)
    sprite.dispose()
    stage.dispose()
  }
}

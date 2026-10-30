import * as THREE from 'three'
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js'
import { createStage } from '@/three/stage'

const FONT = '"Plus Jakarta Sans", Inter, system-ui, sans-serif'
const easeOutExpo = (t: number) => (t >= 1 ? 1 : 1 - Math.pow(2, -10 * t))
const clamp = (v: number, a: number, b: number) => Math.min(b, Math.max(a, v))

/* ------------------------------------------------------------ UI textures */

function drawSite(canvas: HTMLCanvasElement) {
  const c = canvas.getContext('2d')!
  const W = canvas.width
  const H = canvas.height
  c.clearRect(0, 0, W, H)
  c.fillStyle = '#FFFFFF'
  c.fillRect(0, 0, W, H)

  // browser chrome
  c.fillStyle = '#F1F5F9'
  c.fillRect(0, 0, W, 56)
  ;['#DBE2EC', '#DBE2EC', '#FFBD59'].forEach((col, i) => {
    c.fillStyle = col
    c.beginPath()
    c.arc(34 + i * 24, 28, 7, 0, Math.PI * 2)
    c.fill()
  })
  c.fillStyle = '#FFFFFF'
  c.beginPath()
  c.roundRect(130, 14, 380, 28, 14)
  c.fill()
  c.fillStyle = '#8794A8'
  c.font = `500 15px ui-monospace, monospace`
  c.fillText('yourbrand.com', 152, 33)

  // nav
  c.fillStyle = '#004AAD'
  c.beginPath()
  c.roundRect(48, 92, 96, 20, 10)
  c.fill()
  ;[0, 1, 2].forEach((i) => {
    c.fillStyle = '#DBE2EC'
    c.beginPath()
    c.roundRect(W - 330 + i * 92, 98, 70, 9, 5)
    c.fill()
  })

  // hero block
  const g = c.createLinearGradient(40, 150, W - 40, 400)
  g.addColorStop(0, '#EEF4FF')
  g.addColorStop(1, '#FFF8EB')
  c.fillStyle = g
  c.beginPath()
  c.roundRect(40, 150, W - 80, 270, 26)
  c.fill()

  c.fillStyle = '#0E1626'
  c.font = `700 46px ${FONT}`
  c.fillText('Grow your business', 76, 232)
  c.fillStyle = '#5F6E85'
  c.font = `400 19px ${FONT}`
  c.fillText('Websites and apps that look great and win customers.', 76, 276)
  c.fillStyle = '#FFBD59'
  c.beginPath()
  c.roundRect(76, 318, 190, 52, 26)
  c.fill()
  c.fillStyle = '#0E1626'
  c.font = `600 17px ${FONT}`
  c.fillText('Get a free quote', 104, 351)

  // soft art on the right
  c.strokeStyle = '#004AAD'
  c.lineWidth = 16
  c.beginPath()
  c.arc(W - 190, 285, 78, -0.4, Math.PI * 1.55)
  c.stroke()
  c.fillStyle = '#FFBD59'
  c.beginPath()
  c.arc(W - 118, 224, 14, 0, Math.PI * 2)
  c.fill()

  // cards
  const cw = (W - 80 - 48) / 3
  ;['#D9E6FF', '#FFEFCF', '#EDF1F7'].forEach((col, i) => {
    const x = 40 + i * (cw + 24)
    c.strokeStyle = '#DBE2EC'
    c.lineWidth = 2
    c.beginPath()
    c.roundRect(x, 452, cw, 150, 20)
    c.stroke()
    c.fillStyle = col
    c.beginPath()
    c.roundRect(x + 22, 474, 44, 44, 12)
    c.fill()
    c.fillStyle = '#DBE2EC'
    c.beginPath()
    c.roundRect(x + 22, 540, cw - 90, 12, 6)
    c.fill()
    c.beginPath()
    c.roundRect(x + 22, 566, cw - 150, 12, 6)
    c.fill()
  })
}

function drawPhone(canvas: HTMLCanvasElement) {
  const c = canvas.getContext('2d')!
  const W = canvas.width
  const H = canvas.height
  c.clearRect(0, 0, W, H)
  c.save()
  c.beginPath()
  c.roundRect(0, 0, W, H, 56)
  c.clip()
  c.fillStyle = '#FFFFFF'
  c.fillRect(0, 0, W, H)

  c.fillStyle = '#0E1626'
  c.font = `700 30px ${FONT}`
  c.fillText('Overview', 40, 110)
  c.fillStyle = '#FFBD59'
  c.beginPath()
  c.arc(W - 62, 96, 18, 0, Math.PI * 2)
  c.fill()

  c.fillStyle = '#004AAD'
  c.beginPath()
  c.roundRect(32, 150, W - 64, 250, 34)
  c.fill()
  c.strokeStyle = 'rgba(255,255,255,0.22)'
  c.lineWidth = 22
  c.beginPath()
  c.arc(W / 2, 275, 78, 0, Math.PI * 2)
  c.stroke()
  c.strokeStyle = '#FFBD59'
  c.lineCap = 'round'
  c.beginPath()
  c.arc(W / 2, 275, 78, -Math.PI / 2, Math.PI * 0.95)
  c.stroke()

  ;[0, 1, 2, 3].forEach((i) => {
    const y = 440 + i * 100
    c.fillStyle = i % 2 ? '#FFEFCF' : '#D9E6FF'
    c.beginPath()
    c.roundRect(36, y, 60, 60, 18)
    c.fill()
    c.fillStyle = '#DBE2EC'
    c.beginPath()
    c.roundRect(116, y + 8, 220, 16, 8)
    c.fill()
    c.fillStyle = '#EDF1F7'
    c.beginPath()
    c.roundRect(116, y + 36, 150, 14, 7)
    c.fill()
  })

  c.fillStyle = '#EDF1F7'
  c.beginPath()
  c.roundRect(W / 2 - 70, H - 36, 140, 8, 4)
  c.fill()
  c.restore()
}

function uiTexture(w: number, h: number, draw: (c: HTMLCanvasElement) => void) {
  const canvas = document.createElement('canvas')
  canvas.width = w
  canvas.height = h
  draw(canvas)
  const tex = new THREE.CanvasTexture(canvas)
  tex.colorSpace = THREE.SRGBColorSpace
  tex.anisotropy = 8
  return { canvas, tex, redraw: () => { draw(canvas); tex.needsUpdate = true } }
}

/* ------------------------------------------------------- logo chevrons (3D) */

/** The logo's chevron polygons (original artboard coordinates), extruded. */
function chevron(points: [number, number][], depth: number, scale = 0.0072) {
  const shape = new THREE.Shape()
  points.forEach(([x, y], i) => {
    const px = x * scale
    const py = -y * scale
    if (i === 0) shape.moveTo(px, py)
    else shape.lineTo(px, py)
  })
  shape.closePath()
  const geo = new THREE.ExtrudeGeometry(shape, {
    depth,
    bevelEnabled: true,
    bevelThickness: 0.025,
    bevelSize: 0.022,
    bevelSegments: 4,
  })
  geo.center()
  return geo
}

const GOLD_CHEVRON: [number, number][] = [[171, 163.5], [22.1, 250], [171, 336.5], [171, 287.5], [106.5, 250], [171, 212.5]]
const BLUE_CHEVRON: [number, number][] = [[328, 163.5], [477.7, 250], [328, 336.5], [328, 287.9], [393.5, 250], [328, 212.1]]

/* ------------------------------------------------------------------- scene */

/** Mounts the floating website + app + chevron scene. Returns a cleanup function. */
export function mount(canvas: HTMLCanvasElement, host: HTMLElement): () => void {
  const stage = createStage(canvas, host, { fov: 32, z: 8.5, studio: true })
  const { scene, camera } = stage

  // lights: studio environment does most of the work; add brand-coloured accents
  const key = new THREE.DirectionalLight(0xffffff, 1.1)
  key.position.set(3, 4, 5)
  scene.add(key)
  const blue = new THREE.PointLight(0x4d82e0, 30, 14, 1.6)
  blue.position.set(-4.5, -1.5, 2.5)
  scene.add(blue)
  const gold = new THREE.PointLight(0xffbd59, 24, 12, 1.6)
  gold.position.set(4.5, 2.5, 3)
  scene.add(gold)

  const root = new THREE.Group()
  scene.add(root)

  // website slab
  const site = new THREE.Group()
  const siteTex = uiTexture(1024, 640, drawSite)
  const body = new THREE.Mesh(
    new RoundedBoxGeometry(3.5, 2.28, 0.14, 5, 0.1),
    new THREE.MeshStandardMaterial({ color: 0x0b1936, metalness: 0.35, roughness: 0.3 })
  )
  const screen = new THREE.Mesh(
    new THREE.PlaneGeometry(3.3, 2.06),
    new THREE.MeshBasicMaterial({ map: siteTex.tex, toneMapped: false })
  )
  screen.position.z = 0.075
  site.add(body, screen)
  site.position.set(-0.35, 0.1, 0)
  site.rotation.y = 0.12
  root.add(site)

  // phone
  const phone = new THREE.Group()
  const phoneTex = uiTexture(512, 1024, drawPhone)
  const phoneBody = new THREE.Mesh(
    new RoundedBoxGeometry(1.02, 2.06, 0.12, 5, 0.14),
    new THREE.MeshStandardMaterial({ color: 0x050b18, metalness: 0.6, roughness: 0.22 })
  )
  const phoneScreen = new THREE.Mesh(
    new THREE.PlaneGeometry(0.92, 1.96),
    new THREE.MeshBasicMaterial({ map: phoneTex.tex, transparent: true, toneMapped: false })
  )
  phoneScreen.position.z = 0.065
  phone.add(phoneBody, phoneScreen)
  phone.position.set(1.65, -0.5, 0.85)
  phone.rotation.set(0.02, -0.28, 0.02)
  root.add(phone)

  // the logo's chevrons, as metallic 3D objects
  const goldMat = new THREE.MeshStandardMaterial({ color: 0xffbd59, metalness: 0.55, roughness: 0.3, emissive: 0x6b4300, emissiveIntensity: 0.4 })
  const blueMat = new THREE.MeshStandardMaterial({ color: 0x1a5fc4, metalness: 0.55, roughness: 0.28 })
  const left = new THREE.Mesh(chevron(GOLD_CHEVRON, 0.22), goldMat)
  left.position.set(-2.35, 1.45, -0.5)
  left.rotation.y = 0.45
  const right = new THREE.Mesh(chevron(BLUE_CHEVRON, 0.22), blueMat)
  right.position.set(2.3, 1.5, -0.6)
  right.rotation.y = -0.45
  root.add(left, right)

  // a thin orbit with a gold bead
  const orbit = new THREE.Group()
  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(2.45, 0.011, 10, 200),
    new THREE.MeshBasicMaterial({ color: 0xffbd59, transparent: true, opacity: 0.55 })
  )
  const bead = new THREE.Mesh(new THREE.SphereGeometry(0.085, 24, 24), goldMat)
  bead.position.set(2.45, 0, 0)
  orbit.add(ring, bead)
  orbit.rotation.x = 1.12
  orbit.rotation.y = 0.35
  root.add(orbit)

  // fonts load after first paint: redraw the textures once they do
  document.fonts?.ready.then(() => {
    siteTex.redraw()
    phoneTex.redraw()
    stage.invalidate()
  })

  // input: hover tilt, drag to turn, springs back
  const st = { yaw: 0, vel: 0, dragging: false, lastX: 0, tx: 0, ty: 0, px: 0, py: 0 }
  const down = (e: PointerEvent) => {
    if (stage.reduced || (e.pointerType === 'mouse' && e.button !== 0)) return
    st.dragging = true
    st.lastX = e.clientX
    st.vel = 0
    host.setPointerCapture(e.pointerId)
    host.style.cursor = 'grabbing'
  }
  const move = (e: PointerEvent) => {
    if (stage.reduced) return
    if (st.dragging) {
      const dx = e.clientX - st.lastX
      st.lastX = e.clientX
      st.yaw = clamp(st.yaw + dx * 0.006, -1.3, 1.3)
      st.vel = 0.7 * st.vel + 0.3 * dx * 0.006 * 60
    } else if (e.pointerType === 'mouse') {
      const r = host.getBoundingClientRect()
      st.tx = (e.clientX - r.left) / r.width - 0.5
      st.ty = (e.clientY - r.top) / r.height - 0.5
    }
    stage.invalidate()
  }
  const up = () => {
    st.dragging = false
    host.style.cursor = ''
  }
  const leave = () => {
    st.tx = 0
    st.ty = 0
  }
  host.addEventListener('pointerdown', down)
  host.addEventListener('pointermove', move)
  host.addEventListener('pointerup', up)
  host.addEventListener('pointercancel', up)
  host.addEventListener('pointerleave', leave)

  stage.onFrame((dt, t) => {
    const intro = stage.reduced ? 1 : easeOutExpo(Math.min(1, t / 1.6))

    if (!st.dragging) {
      st.yaw += st.vel * dt
      st.vel *= Math.exp(-3 * dt)
      st.yaw += (0 - st.yaw) * (1 - Math.exp(-dt * 1.8)) // spring back to centre
    }
    st.px += (st.tx - st.px) * (1 - Math.exp(-dt * 4))
    st.py += (st.ty - st.py) * (1 - Math.exp(-dt * 4))

    const drift = stage.reduced ? 0 : 1
    root.rotation.y = (1 - intro) * -0.9 + st.yaw + st.px * 0.35 + Math.sin(t * 0.35) * 0.05 * drift
    root.rotation.x = st.py * 0.2 + Math.sin(t * 0.28) * 0.02 * drift
    root.position.y = Math.sin(t * 0.7) * 0.05 * drift
    const sc = 0.86 + 0.14 * intro
    // shrink the composition on narrow stages
    const base = clamp((host.clientWidth / Math.max(1, host.clientHeight)) / 1.3, 0.6, 1)
    root.scale.setScalar(base * sc)

    site.position.y = 0.1 + Math.sin(t * 0.9) * 0.05 * drift
    phone.position.y = -0.55 + Math.sin(t * 0.9 + 1.6) * 0.07 * drift
    left.rotation.y = 0.45 + Math.sin(t * 0.5) * 0.22 * drift
    left.rotation.x = Math.sin(t * 0.4 + 1) * 0.08 * drift
    right.rotation.y = -0.45 - Math.sin(t * 0.5 + 0.8) * 0.22 * drift
    right.rotation.x = Math.sin(t * 0.4) * 0.08 * drift
    orbit.rotation.z = t * 0.16 * drift
    camera.lookAt(0, 0, 0)
  })

  stage.invalidate()

  return () => {
    host.removeEventListener('pointerdown', down)
    host.removeEventListener('pointermove', move)
    host.removeEventListener('pointerup', up)
    host.removeEventListener('pointercancel', up)
    host.removeEventListener('pointerleave', leave)
    stage.dispose()
  }
}

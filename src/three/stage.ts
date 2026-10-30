import * as THREE from 'three'
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js'

export interface Stage {
  scene: THREE.Scene
  camera: THREE.PerspectiveCamera
  renderer: THREE.WebGLRenderer
  /** visitor prefers reduced motion: render on demand instead of looping */
  reduced: boolean
  /** runs every frame with the delta and total elapsed seconds */
  onFrame: (cb: (dt: number, t: number) => void) => void
  onResize: (cb: (w: number, h: number) => void) => void
  /** request a frame (needed when idle or in reduced-motion mode) */
  invalidate: () => void
  dispose: () => void
}

/**
 * Shared Three.js setup: transparent renderer, optional studio environment,
 * clamped pixel ratio, ResizeObserver, and a render loop that only runs while
 * the canvas is on screen. Throws if WebGL is unavailable (callers show a fallback).
 */
export function createStage(
  canvas: HTMLCanvasElement,
  host: HTMLElement,
  opts: { fov?: number; z?: number; studio?: boolean } = {}
): Stage {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const coarse = window.matchMedia('(pointer: coarse)').matches

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' })
  renderer.setClearColor(0x000000, 0)
  renderer.outputColorSpace = THREE.SRGBColorSpace
  renderer.toneMapping = THREE.NeutralToneMapping

  const scene = new THREE.Scene()
  if (opts.studio) {
    const pmrem = new THREE.PMREMGenerator(renderer)
    const room = new RoomEnvironment()
    scene.environment = pmrem.fromScene(room, 0.04).texture
    room.dispose()
    pmrem.dispose()
  }

  const camera = new THREE.PerspectiveCamera(opts.fov ?? 32, 1, 0.1, 100)
  camera.position.set(0, 0, opts.z ?? 7)

  const frameCbs: Array<(dt: number, t: number) => void> = []
  const resizeCbs: Array<(w: number, h: number) => void> = []
  let raf = 0
  let visible = false
  let dirty = true
  let disposed = false
  let last = 0
  let elapsed = 0

  const frame = (now: number) => {
    raf = 0
    if (disposed) return
    const dt = Math.min(0.05, Math.max(0, (now - last) / 1000))
    last = now
    elapsed += dt
    frameCbs.forEach((cb) => cb(dt, elapsed))
    renderer.render(scene, camera)
    const again = visible && (!reduced || dirty)
    dirty = false
    if (again && !reduced) raf = requestAnimationFrame(frame)
  }
  const invalidate = () => {
    dirty = true
    if (!raf && visible && !disposed) {
      last = performance.now()
      raf = requestAnimationFrame(frame)
    }
  }

  const resize = () => {
    const w = host.clientWidth
    const h = host.clientHeight
    if (!w || !h) return
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, coarse ? 1.5 : 2))
    renderer.setSize(w, h, false)
    camera.aspect = w / h
    camera.updateProjectionMatrix()
    resizeCbs.forEach((cb) => cb(w, h))
    invalidate()
  }

  const ro = new ResizeObserver(resize)
  ro.observe(host)
  const io = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting
    if (visible) invalidate()
  })
  io.observe(host)
  canvas.addEventListener('webglcontextlost', (e) => e.preventDefault())

  return {
    scene,
    camera,
    renderer,
    reduced,
    onFrame: (cb) => frameCbs.push(cb),
    onResize: (cb) => resizeCbs.push(cb),
    invalidate,
    dispose: () => {
      disposed = true
      cancelAnimationFrame(raf)
      ro.disconnect()
      io.disconnect()
      scene.traverse((obj) => {
        const mesh = obj as THREE.Mesh
        mesh.geometry?.dispose?.()
        const mat = mesh.material as THREE.Material | THREE.Material[] | undefined
        const list = Array.isArray(mat) ? mat : mat ? [mat] : []
        list.forEach((m) => {
          Object.values(m).forEach((v) => {
            if (v instanceof THREE.Texture) v.dispose()
          })
          m.dispose()
        })
      })
      scene.environment?.dispose()
      renderer.dispose()
    },
  }
}

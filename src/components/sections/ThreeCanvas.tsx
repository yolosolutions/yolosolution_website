import { useEffect, useRef, useState, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

export interface SceneModule {
  mount: (canvas: HTMLCanvasElement, host: HTMLElement) => () => void
}

type ConnectionNavigator = Navigator & { connection?: { saveData?: boolean } }

/**
 * Hosts a Three.js scene. The 3D code (and Three.js itself) is only downloaded
 * once the stage scrolls near the viewport; until then, or if WebGL is missing
 * or the visitor has Save-Data on, the `fallback` is shown instead.
 */
export function ThreeCanvas({
  load,
  fallback,
  label,
  className,
}: {
  /** stable dynamic import, e.g. `() => import('@/three/devicesScene')` */
  load: () => Promise<SceneModule>
  fallback: ReactNode
  /** accessible description of the illustration */
  label: string
  className?: string
}) {
  const hostRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [ready, setReady] = useState(false)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    const host = hostRef.current
    const canvas = canvasRef.current
    if (!host || !canvas) return
    if ((navigator as ConnectionNavigator).connection?.saveData) {
      setFailed(true)
      return
    }

    let cancelled = false
    let dispose: (() => void) | undefined
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        io.disconnect()
        load()
          .then((mod) => {
            if (cancelled) return
            try {
              dispose = mod.mount(canvas, host)
              setReady(true)
            } catch {
              setFailed(true)
            }
          })
          .catch(() => !cancelled && setFailed(true))
      },
      { rootMargin: '300px' }
    )
    io.observe(host)

    return () => {
      cancelled = true
      io.disconnect()
      dispose?.()
    }
  }, [load])

  return (
    <div
      ref={hostRef}
      role="img"
      aria-label={label}
      className={cn('relative cursor-grab select-none [touch-action:pan-y]', className)}
    >
      <div
        className={cn(
          'absolute inset-0 flex items-center justify-center transition-opacity duration-700',
          ready && !failed ? 'opacity-0' : 'opacity-100'
        )}
      >
        {fallback}
      </div>
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className={cn(
          'absolute inset-0 h-full w-full transition-opacity duration-700',
          ready && !failed ? 'opacity-100' : 'opacity-0'
        )}
      />
    </div>
  )
}

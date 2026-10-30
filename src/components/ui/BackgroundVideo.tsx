import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * Decorative looping video. Fades in once the first frame is ready so there is
 * no flash, holds on the first frame for reduced-motion users, pauses while
 * off-screen, and with `lazy` only loads once it nears the viewport.
 */
export function BackgroundVideo({
  src,
  className,
  lazy = false,
}: {
  src: string
  className?: string
  lazy?: boolean
}) {
  const ref = useRef<HTMLVideoElement>(null)
  const [active, setActive] = useState(!lazy)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (lazy) setActive(true)
          if (!prefersReducedMotion()) el.play().catch(() => undefined)
        } else {
          el.pause()
        }
      },
      { rootMargin: '200px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [lazy])

  return (
    <video
      ref={ref}
      src={active ? src : undefined}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-hidden="true"
      tabIndex={-1}
      onLoadedData={() => {
        setReady(true)
        if (prefersReducedMotion()) ref.current?.pause()
      }}
      className={cn(
        'h-full w-full object-cover transition-opacity duration-500',
        ready ? 'opacity-100' : 'opacity-0',
        className
      )}
    />
  )
}

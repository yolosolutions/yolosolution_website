import { useEffect, useRef } from 'react'
import { animate, useInView, useReducedMotion } from 'framer-motion'

/** Counts from 0 to `to` once it scrolls into view. Shows the final value straight away for reduced motion. */
export function CountUp({
  to,
  suffix = '',
  duration = 1.6,
  className,
}: {
  to: number
  suffix?: string
  duration?: number
  className?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const reduce = useReducedMotion()

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (reduce) {
      el.textContent = `${to}${suffix}`
      return
    }
    if (!inView) return
    const controls = animate(0, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        el.textContent = `${Math.round(v)}${suffix}`
      },
    })
    return () => controls.stop()
  }, [inView, reduce, to, suffix, duration])

  return (
    <span ref={ref} className={className}>
      {`0${suffix}`}
    </span>
  )
}

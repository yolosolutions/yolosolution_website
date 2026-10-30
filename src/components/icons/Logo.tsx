import { useId } from 'react'
import { motion, type Variants } from 'framer-motion'
import { cn } from '@/lib/utils'
import { logoParts as P } from '@/components/icons/logoParts'

/**
 * The real YOLO logo as inline vector, so it stays razor sharp at any size or
 * pixel density. `light` brightens the blue and turns the text white for use on
 * navy; `color` is the original brand colouring for white/plate surfaces.
 */
const tones = {
  color: { blue: '#004AAD', gold: '#FFBD59', ink: '#0B1220' },
  light: { blue: '#5B9BFF', gold: '#FFBD59', ink: '#FFFFFF' },
} as const

const EASE = [0.16, 1, 0.3, 1] as const

const slide = (x: number): Variants => ({
  hidden: { opacity: 0, x },
  show: { opacity: 1, x: 0, transition: { duration: 0.9, ease: EASE } },
})
const pop = (delay: number): Variants => ({
  hidden: { opacity: 0, scale: 0.6 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: EASE, delay } },
})
const rise = (delay: number): Variants => ({
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE, delay } },
})

const origin = { transformBox: 'fill-box', transformOrigin: 'center' } as const

export function Logo({
  tone = 'color',
  animated = false,
  className,
}: {
  tone?: keyof typeof tones
  /** plays a one-off assemble animation on mount (otherwise renders final state) */
  animated?: boolean
  className?: string
}) {
  const id = useId().replace(/:/g, '')
  const c = tones[tone]
  const a = P.aperture

  return (
    <svg
      viewBox={P.viewBox}
      role="img"
      aria-label="YOLO Solutions"
      className={cn('aspect-[456/174] h-11 w-auto sm:h-12', className)}
    >
      <defs>
        <mask
          id={`ap-${id}`}
          maskUnits="userSpaceOnUse"
          x={a.x - 2}
          y={a.y - 2}
          width={a.size + 4}
          height={a.size + 4}
          dangerouslySetInnerHTML={{ __html: P.apertureMask }}
        />
      </defs>
      <motion.g initial={animated ? 'hidden' : false} animate="show">
        <motion.g variants={slide(-60)}>
          <path fill={c.gold} d={P.goldChevron} />
        </motion.g>
        <motion.g variants={slide(60)}>
          <path fill={c.blue} d={P.blueChevron} />
        </motion.g>
        <motion.g variants={pop(0.35)} style={origin}>
          <path fill={c.blue} d={P.y} />
        </motion.g>
        <motion.g
          variants={pop(0.45)}
          style={origin}
          stroke={c.blue}
          dangerouslySetInnerHTML={{ __html: P.globe }}
        />
        <motion.g variants={pop(0.55)} style={origin}>
          <path fill={c.gold} d={P.l} />
        </motion.g>
        <motion.g variants={pop(0.65)} style={origin}>
          <rect fill={c.gold} x={a.x} y={a.y} width={a.size} height={a.size} mask={`url(#ap-${id})`} />
        </motion.g>
        <motion.g variants={rise(0.95)}>
          <path fill={c.ink} d={P.text} />
        </motion.g>
      </motion.g>
    </svg>
  )
}

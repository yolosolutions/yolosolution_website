import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Container } from '@/components/ui/Container'
import { splash } from '@/lib/splashState'
import { cn } from '@/lib/utils'

const EASE = [0.16, 1, 0.3, 1] as const

/** Headline words rise out of a mask, 55ms apart. */
function Words({ text, accent = false, offset = 0 }: { text: string; accent?: boolean; offset?: number }) {
  return (
    <>
      {text.split(' ').map((word, i) => (
        <span key={`${word}-${i}`}>
          <span className="-mb-[0.16em] inline-block overflow-hidden pb-[0.16em] align-bottom">
            <motion.span
              className={cn(
                'inline-block',
                accent && 'pr-[0.06em] font-serif text-[1.1em] font-normal italic tracking-[-0.02em] text-gold-400'
              )}
              initial={{ y: '115%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: splash.delay + 0.25 + (offset + i) * 0.055 }}
            >
              {word}
            </motion.span>
          </span>{' '}
        </span>
      ))}
    </>
  )
}

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: EASE, delay: splash.delay + delay },
})

/**
 * Page banner: navy backdrop with brand glows and grain, a breadcrumb, a masked
 * word-by-word headline with a gold serif accent, and an artwork slot built from
 * things the agency actually makes. The bottom edge curves into the content.
 */
export function PageHeader({
  eyebrow,
  index,
  title,
  accent,
  description,
  extra,
  visual,
  sheet = 'bg-white',
}: {
  eyebrow: string
  /** two-digit section number, e.g. "01" */
  index: string
  title: string
  /** trailing words set in gold italic serif */
  accent?: string
  description: string
  /** shown under the description (chips, links) */
  extra?: ReactNode
  /** artwork on the right (desktop only) */
  visual?: ReactNode
  /** background class of the section that follows, so the curved edge blends */
  sheet?: string
}) {
  return (
    <section className="grain relative isolate overflow-hidden bg-brand-950 pt-28 lg:min-h-[640px]">
      {/* backdrop: brand glows + blueprint grid */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-dark bg-grid opacity-60 [mask-image:radial-gradient(ellipse_80%_90%_at_70%_40%,black,transparent)]" />
      <div className="glow-blue pointer-events-none absolute -right-24 -top-24 -z-10 h-[620px] w-[620px] rounded-full opacity-60" />
      <div className="glow-gold pointer-events-none absolute -bottom-40 -left-32 -z-10 h-[460px] w-[460px] rounded-full opacity-40" />

      <Container className="relative grid grid-cols-1 items-center gap-12 pb-24 pt-8 sm:pb-28 lg:grid-cols-[1.05fr_1fr] lg:pb-32">
        <div>
          <motion.nav
            {...fade(0.1)}
            aria-label="Breadcrumb"
            className="mb-6 flex items-center gap-2.5 text-[12px] font-medium uppercase tracking-[0.2em] text-white/55"
          >
            <span className="font-mono text-gold-400">{index}</span>
            <span className="h-px w-6 bg-white/30" />
            <Link to="/" className="-my-3 py-3 transition-colors hover:text-white">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-white/85">{eyebrow}</span>
          </motion.nav>

          <h1 className="text-balance font-display text-[clamp(2.3rem,6.4vw,4.3rem)] lg:text-[clamp(2.3rem,4.9vw,4.3rem)] font-medium leading-[1.02] tracking-[-0.045em] text-white">
            <Words text={title} />
            {accent && <Words text={accent} accent offset={title.split(' ').length} />}
          </h1>

          <motion.p
            {...fade(0.75)}
            className="mt-6 max-w-xl text-[15.5px] leading-relaxed text-white/70 sm:text-[17px]"
          >
            {description}
          </motion.p>

          {extra && (
            <motion.div {...fade(0.95)} className="mt-7">
              {extra}
            </motion.div>
          )}
        </div>

        {visual && <div className="hidden md:block">{visual}</div>}
      </Container>

      {/* curved sheet edge into the next section */}
      <div className={cn('absolute inset-x-0 bottom-0 z-10 h-8 rounded-t-[2rem] sm:h-10 sm:rounded-t-[2.5rem]', sheet)} />
    </section>
  )
}

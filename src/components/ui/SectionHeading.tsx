import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Reveal } from '@/components/ui/Reveal'

const EASE = [0.16, 1, 0.3, 1] as const

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  tone = 'light',
  className,
}: {
  eyebrow?: string
  title: string
  description?: string
  align?: 'center' | 'left'
  /** `dark` is for headings that sit on a dark section */
  tone?: 'light' | 'dark'
  className?: string
}) {
  const dark = tone === 'dark'
  const words = title.split(' ')
  return (
    <div className={cn('max-w-2xl', align === 'center' ? 'mx-auto text-center' : 'text-left', className)}>
      {eyebrow && (
        <Reveal>
          <span
            className={cn(
              'mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em]',
              dark ? 'text-gold-400' : 'text-brand-600'
            )}
          >
            <span className={cn('h-px w-6', dark ? 'bg-gold-400' : 'bg-brand-600')} />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <h2
        aria-label={title}
        className={cn(
          'text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.6rem] lg:leading-[1.15]',
          dark ? 'text-white' : 'text-ink-900'
        )}
      >
        {words.map((word, i) => (
          <span key={`${word}-${i}`} aria-hidden="true">
            <span className="-mb-[0.14em] inline-block overflow-hidden pb-[0.14em] align-bottom">
              <motion.span
                className="inline-block"
                initial={{ y: '112%' }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, ease: EASE, delay: i * 0.05 }}
              >
                {word}
              </motion.span>
            </span>{' '}
          </span>
        ))}
      </h2>
      {description && (
        <Reveal delay={0.2}>
          <p
            className={cn(
              'mt-4 text-base leading-relaxed sm:text-lg',
              dark ? 'text-brand-100/80' : 'text-ink-500'
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  )
}

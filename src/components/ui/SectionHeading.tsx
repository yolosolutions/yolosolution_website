import { cn } from '@/lib/utils'
import { Reveal } from '@/components/ui/Reveal'

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
  return (
    <Reveal className={cn('max-w-2xl', align === 'center' ? 'mx-auto text-center' : 'text-left', className)}>
      {eyebrow && (
        <span
          className={cn(
            'mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em]',
            dark ? 'text-gold-400' : 'text-brand-600'
          )}
        >
          <span className={cn('h-px w-6', dark ? 'bg-gold-400' : 'bg-brand-600')} />
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          'text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.6rem] lg:leading-[1.15]',
          dark ? 'text-white' : 'text-ink-900'
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-4 text-base leading-relaxed sm:text-lg',
            dark ? 'text-brand-100/80' : 'text-ink-500'
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  )
}

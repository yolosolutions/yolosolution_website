import { Sparkles } from 'lucide-react'
import { marqueeItems } from '@/data/techstack'

export function Marquee() {
  // duplicated once so the -50% translate loops seamlessly
  const items = [...marqueeItems, ...marqueeItems]
  return (
    <section aria-label="What we build" className="overflow-hidden border-b border-white/10 bg-brand-950 py-5">
      <div className="flex w-max animate-marquee items-center gap-10 hover:[animation-play-state:paused]">
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-10 whitespace-nowrap font-display text-sm font-semibold uppercase tracking-[0.12em] text-brand-100/80"
          >
            {item}
            <Sparkles className="h-4 w-4 text-gold-400" />
          </span>
        ))}
      </div>
    </section>
  )
}

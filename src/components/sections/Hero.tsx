import { motion, type Variants } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { BackgroundVideo } from '@/components/ui/BackgroundVideo'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { media } from '@/data/media'
import { site } from '@/data/site'

const EASE = [0.16, 1, 0.3, 1] as const

/** Headline lines rise out of a mask, 120ms apart. */
const rise: Variants = {
  hidden: { y: '115%' },
  show: (i: number) => ({ y: 0, transition: { duration: 0.95, ease: EASE, delay: 0.3 + i * 0.12 } }),
}

const fade: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: (delay: number) => ({ opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE, delay } }),
}

const shipped = [
  { id: 'websites', label: 'Websites & landing pages' },
  { id: 'web-apps', label: 'Web applications' },
  { id: 'mobile-apps', label: 'Mobile apps' },
  { id: 'ai-automation', label: 'AI & automation' },
]

const facts = [
  { value: site.projectsCompleted, label: 'Projects' },
  { value: String(site.founded), label: 'Est.' },
  { value: 'Global', label: 'Clients' },
]

function Line({ index, children }: { index: number; children: React.ReactNode }) {
  return (
    <span className="-my-[0.06em] block overflow-hidden py-[0.06em] lg:whitespace-nowrap">
      <motion.span className="block" variants={rise} custom={index}>
        {children}
      </motion.span>
    </span>
  )
}

export function Hero() {
  return (
    <section className="grain relative isolate flex h-svh min-h-[660px] flex-col overflow-hidden bg-brand-950">
      {/* Footage: top band on mobile so the sphere stays whole; full-bleed and shifted right on desktop so it clears the headline */}
      <div className="absolute inset-x-0 top-0 -z-20 h-[62%] lg:inset-0 lg:h-full">
        <BackgroundVideo
          src={media.heroVideo}
          className="object-[62%_50%] lg:translate-x-[12%] lg:scale-[1.05] lg:object-center"
        />
      </div>
      {/* Text protection: left scrim on desktop, bottom scrim everywhere */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(0,17,43,0.88)_0%,rgba(0,17,43,0.5)_34%,rgba(0,17,43,0)_62%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-2/3 bg-gradient-to-t from-brand-950 via-brand-950/70 to-transparent" />

      <Container className="relative flex flex-1 flex-col justify-end pb-24 pt-28 sm:pb-14">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
          <motion.div initial="hidden" animate="show" className="max-w-[44rem]">
            <motion.p
              variants={fade}
              custom={0.15}
              className="mb-6 inline-flex items-center gap-2.5 text-[12px] font-medium uppercase tracking-[0.2em] text-white/60"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-gold-400" />
              </span>
              Available for new projects
            </motion.p>

            <h1 className="font-display text-[clamp(2.6rem,5.4vw,5rem)] font-medium leading-[0.98] tracking-[-0.045em] text-white">
              <Line index={0}>We build websites</Line>
              <Line index={1}>&amp; apps that</Line>
              <Line index={2}>
                <em className="pr-[0.08em] font-serif text-[1.1em] font-normal italic leading-[0.9] tracking-[-0.02em] text-gold-400">
                  grow your business.
                </em>
              </Line>
            </h1>

            <motion.p
              variants={fade}
              custom={0.85}
              className="mt-7 max-w-[29rem] text-[15.5px] leading-relaxed text-white/70 [text-shadow:0_2px_18px_rgba(0,0,0,0.42)] sm:text-[17px]"
            >
              YOLO Solutions designs and ships fast, beautiful websites, web &amp; mobile apps and automation,
              from first sketch to launch and beyond.
            </motion.p>

            <motion.div
              variants={fade}
              custom={1}
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Button
                to="/contact"
                variant="accent"
                size="lg"
                className="w-full sm:w-auto"
                icon={<ArrowRight className="h-4 w-4" />}
              >
                Start your project
              </Button>
              <Button to="/portfolio" variant="glass" size="lg" className="w-full sm:w-auto">
                See our work
              </Button>
            </motion.div>
          </motion.div>

          <motion.aside
            initial="hidden"
            animate="show"
            variants={fade}
            custom={1.15}
            className="liquid-glass hidden w-[300px] shrink-0 rounded-3xl p-5 lg:block"
          >
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/50">What we ship</p>
            <ul className="mt-3">
              {shipped.map((item, i) => (
                <li key={item.id}>
                  <Link
                    to={`/services#${item.id}`}
                    className="group flex items-center gap-3 border-b border-white/10 py-3 text-sm text-white/85 transition-colors last:border-b-0 hover:text-white"
                  >
                    <span className="font-mono text-[11px] text-gold-400/90">0{i + 1}</span>
                    <span className="flex-1">{item.label}</span>
                    <ArrowUpRight className="h-4 w-4 text-white/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold-400" />
                  </Link>
                </li>
              ))}
            </ul>
            <dl className="mt-1 grid grid-cols-3 gap-3 border-t border-white/10 pt-4">
              {facts.map((fact) => (
                <div key={fact.label}>
                  <dd className="font-display text-xl font-medium tracking-tight text-white">{fact.value}</dd>
                  <dt className="mt-0.5 text-[11px] uppercase tracking-[0.14em] text-white/45">{fact.label}</dt>
                </div>
              ))}
            </dl>
          </motion.aside>
        </div>
      </Container>
    </section>
  )
}

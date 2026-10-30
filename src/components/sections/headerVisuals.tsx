import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { Check, Rocket, Smartphone } from 'lucide-react'
import { splash } from '@/lib/splashState'
import { cn } from '@/lib/utils'

/**
 * Page-banner artwork, built from things YOLO actually makes: code, finished
 * websites, brand/design systems and client conversations. Plain markup, so it
 * stays crisp at any size and needs no stock footage.
 */

const EASE = [0.16, 1, 0.3, 1] as const
const at = (d: number) => splash.delay + d

/** Fades/rises a block in; `float` adds a slow idle bob. */
function Pop({
  children,
  delay = 0,
  className,
  float,
}: {
  children: ReactNode
  delay?: number
  className?: string
  float?: 'a' | 'b'
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, ease: EASE, delay: at(delay) }}
      className={className}
    >
      <div className={float === 'a' ? 'animate-float' : float === 'b' ? 'animate-float-slow' : undefined}>
        {children}
      </div>
    </motion.div>
  )
}

function Window({
  title,
  children,
  className,
  light = false,
}: {
  title?: string
  children: ReactNode
  className?: string
  light?: boolean
}) {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-2xl border shadow-float',
        light ? 'border-white/20 bg-white' : 'border-white/12 bg-[#0A1630]/90 backdrop-blur',
        className
      )}
    >
      <div className={cn('flex items-center gap-3 border-b px-4 py-2.5', light ? 'border-ink-100 bg-ink-50' : 'border-white/10')}>
        <div className="flex gap-1.5">
          <span className={cn('h-2.5 w-2.5 rounded-full', light ? 'bg-ink-200' : 'bg-white/20')} />
          <span className={cn('h-2.5 w-2.5 rounded-full', light ? 'bg-ink-200' : 'bg-white/20')} />
          <span className="h-2.5 w-2.5 rounded-full bg-gold-400" />
        </div>
        {title && (
          <span
            className={cn(
              'truncate font-mono text-[11px]',
              light ? 'rounded-md bg-white px-2.5 py-1 text-ink-400 shadow-soft' : 'text-white/45'
            )}
          >
            {title}
          </span>
        )}
      </div>
      {children}
    </div>
  )
}

/* ------------------------------------------------------------------ Services */

const code: ReactNode[][] = [
  [<span key="a" className="text-gold-300">export function</span>, ' ', <span key="b" className="text-sky-300">Hero</span>, '() {'],
  ['  ', <span key="a" className="text-gold-300">return</span>, ' ('],
  ['    ', <span key="a" className="text-white/50">&lt;</span>, <span key="b" className="text-sky-300">section</span>, ' ', <span key="c" className="text-emerald-300">className</span>, '=', <span key="d" className="text-gold-200">"hero"</span>, <span key="e" className="text-white/50">&gt;</span>],
  ['      ', <span key="a" className="text-white/50">&lt;</span>, <span key="b" className="text-sky-300">h1</span>, <span key="c" className="text-white/50">&gt;</span>, 'Grow your business', <span key="d" className="text-white/50">&lt;/</span>, <span key="e" className="text-sky-300">h1</span>, <span key="f" className="text-white/50">&gt;</span>],
  ['      ', <span key="a" className="text-white/50">&lt;</span>, <span key="b" className="text-sky-300">Button</span>, ' ', <span key="c" className="text-emerald-300">href</span>, '=', <span key="d" className="text-gold-200">"/quote"</span>, <span key="e" className="text-white/50">&gt;</span>],
  ['        Get a free quote'],
  ['      ', <span key="a" className="text-white/50">&lt;/</span>, <span key="b" className="text-sky-300">Button</span>, <span key="c" className="text-white/50">&gt;</span>],
  ['    ', <span key="a" className="text-white/50">&lt;/</span>, <span key="b" className="text-sky-300">section</span>, <span key="c" className="text-white/50">&gt;</span>],
  ['  )'],
  ['}'],
]

/** Code on the left turns into a finished website on the right. */
export function CodeToSite() {
  return (
    <div className="relative mx-auto h-[400px] w-full max-w-[560px]">
      <Pop delay={0.3} float="b" className="absolute left-0 top-0 w-[78%]">
        <Window title="Hero.tsx">
          <div className="px-4 py-4 font-mono text-[12px] leading-[1.75] text-white/85">
            {code.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, ease: EASE, delay: at(0.8 + i * 0.12) }}
                className="flex whitespace-pre"
              >
                <span className="mr-4 w-3 select-none text-right text-white/25">{i + 1}</span>
                <span>{line}</span>
              </motion.div>
            ))}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1, repeat: Infinity, delay: at(2.2) }}
              className="ml-7 mt-1 inline-block h-3.5 w-[7px] bg-gold-400 align-middle"
            />
          </div>
        </Window>
      </Pop>

      <Pop delay={0.7} float="a" className="absolute bottom-0 right-0 w-[64%]">
        <Window title="yourbusiness.com" light>
          <div className="space-y-3 bg-white px-4 pb-5 pt-3">
            <div className="flex items-center justify-between">
              <span className="h-3 w-12 rounded bg-brand-600" />
              <span className="flex gap-2">
                <span className="h-1.5 w-6 rounded-full bg-ink-200" />
                <span className="h-1.5 w-6 rounded-full bg-ink-200" />
                <span className="h-1.5 w-6 rounded-full bg-ink-200" />
              </span>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: at(1.6) }}
              className="font-display text-[19px] font-bold leading-tight tracking-tight text-ink-900"
            >
              Grow your business
            </motion.p>
            <div className="space-y-1.5">
              <span className="block h-1.5 w-full rounded-full bg-ink-100" />
              <span className="block h-1.5 w-4/5 rounded-full bg-ink-100" />
            </div>
            <motion.span
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: EASE, delay: at(2.1) }}
              className="inline-block rounded-full bg-gold-400 px-3.5 py-1.5 text-[11px] font-semibold text-ink-900 shadow-gold"
            >
              Get a free quote
            </motion.span>
          </div>
        </Window>
      </Pop>

      <Pop delay={2.3} className="absolute -top-3 right-0">
        <span className="flex items-center gap-2 rounded-full border border-white/20 bg-brand-900/80 px-3.5 py-2 text-xs font-medium text-white shadow-float backdrop-blur">
          <Rocket className="h-3.5 w-3.5 text-gold-400" /> Deployed to production
        </span>
      </Pop>
    </div>
  )
}

/* ------------------------------------------------------------------ Our Work */

/** A calm, generic website-plus-app composition (concept art, no client work). */
export function ConceptDevices() {
  return (
    <div className="relative mx-auto h-[400px] w-full max-w-[560px]">
      <Pop delay={0.3} float="b" className="absolute left-0 top-3 w-[74%]">
        <Window title="yourbrand.com" light>
          <div className="bg-white p-4">
            <div className="rounded-xl bg-gradient-to-br from-brand-50 via-white to-gold-50 p-4">
              <span className="block h-3 w-2/3 rounded-full bg-ink-800" />
              <span className="mt-2 block h-3 w-1/2 rounded-full bg-ink-800" />
              <span className="mt-3 block h-1.5 w-5/6 rounded-full bg-ink-200" />
              <span className="mt-1.5 block h-1.5 w-3/5 rounded-full bg-ink-200" />
              <span className="mt-4 inline-block h-7 w-24 rounded-full bg-brand-600" />
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2.5">
              {['bg-brand-100', 'bg-gold-100', 'bg-ink-100'].map((c, i) => (
                <div key={i} className="rounded-xl border border-ink-100 p-2.5">
                  <span className={cn('block h-6 w-6 rounded-lg', c)} />
                  <span className="mt-2 block h-1.5 w-4/5 rounded-full bg-ink-200" />
                  <span className="mt-1.5 block h-1.5 w-3/5 rounded-full bg-ink-100" />
                </div>
              ))}
            </div>
          </div>
        </Window>
      </Pop>

      <Pop delay={0.6} float="a" className="absolute bottom-0 right-1 w-[30%]">
        <div className="rounded-[26px] border-[5px] border-[#0A1630] bg-white p-2.5 shadow-float">
          <div className="mx-auto mb-2.5 h-1.5 w-9 rounded-full bg-[#0A1630]/80" />
          <div className="space-y-2.5">
            <span className="block h-2 w-12 rounded-full bg-ink-800" />
            <div className="flex items-center justify-center rounded-xl bg-brand-600 py-3">
              <svg viewBox="0 0 40 40" className="h-11 w-11" aria-hidden="true">
                <circle cx="20" cy="20" r="15" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="5" />
                <circle
                  cx="20"
                  cy="20"
                  r="15"
                  fill="none"
                  stroke="#FFBD59"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeDasharray="70 100"
                  transform="rotate(-90 20 20)"
                />
              </svg>
            </div>
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="h-5 w-5 rounded-lg bg-brand-100" />
                <span className="space-y-1">
                  <span className="block h-1.5 w-12 rounded-full bg-ink-200" />
                  <span className="block h-1.5 w-8 rounded-full bg-ink-100" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </Pop>

      <Pop delay={1.1} className="absolute -top-2 right-2">
        <span className="flex items-center gap-2 rounded-full border border-white/20 bg-brand-900/80 px-3.5 py-2 text-xs font-medium text-white shadow-float backdrop-blur">
          <Smartphone className="h-3.5 w-3.5 text-gold-400" /> Website &amp; app, one system
        </span>
      </Pop>
    </div>
  )
}

/* --------------------------------------------------------------------- About */

/** The craft behind the work: brand colours, type, components and a launch pipeline. */
export function DesignBoard() {
  const tile = 'rounded-2xl border border-white/12 bg-white/[0.06] p-4 backdrop-blur'
  return (
    <div className="relative mx-auto grid w-full max-w-[540px] grid-cols-2 gap-3.5">
      <Pop delay={0.3} float="b" className={cn(tile, 'col-span-1')}>
        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/45">Brand</p>
        <div className="mt-3 flex items-center gap-2.5">
          {[
            ['#004AAD', 'Blue'],
            ['#FFBD59', 'Gold'],
            ['#00112B', 'Navy'],
          ].map(([hex, name]) => (
            <div key={hex} className="text-center">
              <span className="block h-11 w-11 rounded-full border border-white/20 shadow-soft" style={{ background: hex }} />
              <span className="mt-1.5 block font-mono text-[9px] text-white/45">{name}</span>
            </div>
          ))}
        </div>
      </Pop>

      <Pop delay={0.45} float="a" className={tile}>
        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/45">Type</p>
        <p className="mt-2 flex items-baseline gap-2 leading-none">
          <span className="font-display text-5xl font-bold tracking-tight text-white">Aa</span>
          <span className="font-serif text-5xl italic text-gold-400">Aa</span>
        </p>
      </Pop>

      <Pop delay={0.6} float="a" className={tile}>
        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/45">Components</p>
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-gold-400 px-3.5 py-1.5 text-[11px] font-semibold text-ink-900 shadow-gold">Start</span>
          <span className="liquid-glass rounded-full px-3.5 py-1.5 text-[11px] font-medium text-white">Learn more</span>
          <span className="rounded-full bg-brand-600 px-3 py-1.5 text-[11px] font-semibold text-white">Live</span>
        </div>
      </Pop>

      <Pop delay={0.75} float="b" className={tile}>
        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/45">Pipeline</p>
        <ul className="mt-3 space-y-2">
          {['Design', 'Build', 'Launch'].map((step, i) => (
            <li key={step} className="flex items-center gap-2.5 text-[12px] text-white/85">
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 18, delay: at(1.3 + i * 0.35) }}
                className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-400 text-ink-900"
              >
                <Check className="h-2.5 w-2.5" strokeWidth={3} />
              </motion.span>
              {step}
            </li>
          ))}
        </ul>
      </Pop>
    </div>
  )
}

/* ------------------------------------------------------------------- Contact */

const chat: { from: 'client' | 'us'; text: string }[] = [
  { from: 'client', text: 'Hi! We need a website for our business.' },
  { from: 'us', text: 'Great. Tell us about your goals and we’ll send a free quote.' },
  { from: 'client', text: 'A store plus a mobile app, if possible.' },
  { from: 'us', text: 'Absolutely. When’s a good time to talk?' },
]

/** A client conversation: the first step of every project. */
export function ChatMock() {
  return (
    <div className="relative mx-auto w-full max-w-[420px]">
      <Pop delay={0.3} float="b">
        <Window>
          <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
            <img src="/favicon.svg" alt="" className="h-8 w-8 rounded-full" />
            <div className="leading-tight">
              <p className="text-sm font-semibold text-white">YOLO Solutions</p>
              <p className="flex items-center gap-1.5 text-[11px] text-white/50">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Online
              </p>
            </div>
          </div>
          <div className="space-y-2.5 px-4 py-4">
            {chat.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, ease: EASE, delay: at(0.9 + i * 0.75) }}
                className={cn('flex', m.from === 'client' ? 'justify-end' : 'justify-start')}
              >
                <span
                  className={cn(
                    'max-w-[82%] rounded-2xl px-3.5 py-2 text-[13px] leading-snug',
                    m.from === 'client'
                      ? 'rounded-br-md bg-brand-600 text-white'
                      : 'rounded-bl-md bg-white/10 text-white/90'
                  )}
                >
                  {m.text}
                </span>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: at(0.9 + chat.length * 0.75) }}
              className="flex gap-1 pl-1 pt-1"
            >
              {[0, 1, 2].map((d) => (
                <motion.span
                  key={d}
                  animate={{ opacity: [0.25, 1, 0.25] }}
                  transition={{ duration: 1.1, repeat: Infinity, delay: d * 0.18 }}
                  className="h-1.5 w-1.5 rounded-full bg-gold-400"
                />
              ))}
            </motion.div>
          </div>
        </Window>
      </Pop>
    </div>
  )
}

/* ------------------------------------------------------------------ Not found */

/** A terminal that politely reports the missing page. */
export function TerminalMock() {
  const lines: { t: ReactNode; d: number }[] = [
    { t: <><span className="text-gold-400">$</span> GET /this-page</>, d: 0.8 },
    { t: <span className="text-red-300">HTTP/1.1 404 Not Found</span>, d: 1.5 },
    { t: <span className="text-white/60">// no worries, let&rsquo;s get you back</span>, d: 2.1 },
    { t: <><span className="text-gold-400">$</span> cd ~ <span className="text-white/40">&amp;&amp;</span> open home</>, d: 2.7 },
  ]
  return (
    <div className="relative mx-auto w-full max-w-[440px]">
      <span className="pointer-events-none absolute -right-4 -top-16 select-none font-display text-[9rem] font-extrabold leading-none tracking-tighter text-white/[0.06]">
        404
      </span>
      <Pop delay={0.3} float="b">
        <Window title="terminal">
          <div className="space-y-1.5 px-4 py-4 font-mono text-[12.5px] text-white/85">
            {lines.map((l, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, ease: EASE, delay: at(l.d) }}
              >
                {l.t}
              </motion.div>
            ))}
          </div>
        </Window>
      </Pop>
    </div>
  )
}

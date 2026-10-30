import { useEffect, useRef, useState, type ReactNode } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useLocation, type Location } from 'react-router-dom'
import { Logo } from '@/components/icons/Logo'
import { splash } from '@/lib/splashState'

const EASE = [0.76, 0, 0.24, 1] as const
const RISE = [0.16, 1, 0.3, 1] as const

/** Title shown while each page loads: plain words plus one gold serif accent. */
const titles: Record<string, { pre: string; accent: string }> = {
  '/': { pre: 'Welcome to', accent: 'YOLO' },
  '/services': { pre: 'Our', accent: 'Services' },
  '/portfolio': { pre: 'Our', accent: 'Work' },
  '/about': { pre: 'About', accent: 'YOLO' },
  '/contact': { pre: "Let's", accent: 'Talk' },
}
const fallback = { pre: 'Page', accent: 'not found' }

/**
 * Plays a short branded transition on every page change: a navy panel wipes up,
 * shows the page title with a progress line, then lifts away. The new route is
 * only rendered once the panel fully covers the screen, so nothing flashes.
 * `render` receives the location that should currently be on screen.
 */
export function RouteTransition({ render }: { render: (location: Location) => ReactNode }) {
  const location = useLocation()
  const reduce = useReducedMotion()
  const [shown, setShown] = useState(location)
  const [title, setTitle] = useState<{ pre: string; accent: string } | null>(null)
  const swapTimer = useRef<number>()
  const endTimer = useRef<number>()

  useEffect(() => {
    if (reduce) {
      setShown(location)
      return
    }

    // Already showing this page (hash/query change, or the user came straight back):
    // drop any pending swap to the page they left, and just sync the location.
    if (shown.pathname === location.pathname) {
      window.clearTimeout(swapTimer.current)
      if (shown !== location) setShown(location)
      setTitle((t) => (t ? (titles[location.pathname] ?? fallback) : t))
      return
    }

    window.clearTimeout(swapTimer.current)
    window.clearTimeout(endTimer.current)
    setTitle(titles[location.pathname] ?? fallback)
    splash.delay = 0.75 // new page's entrance animations wait for the panel to lift

    swapTimer.current = window.setTimeout(() => setShown(location), 520) // panel now covers the screen
    endTimer.current = window.setTimeout(() => {
      setTitle(null)
      splash.delay = 0
    }, 1080)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location])

  useEffect(
    () => () => {
      window.clearTimeout(swapTimer.current)
      window.clearTimeout(endTimer.current)
    },
    []
  )

  return (
    <>
      {render(shown)}
      <AnimatePresence>
        {title && (
          <motion.div
            key="route-transition"
            aria-hidden="true"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.55, ease: EASE }}
            className="grain fixed inset-0 z-[90] flex flex-col items-center justify-center bg-brand-950"
          >
            {/* curved leading edges: the top bulges as the panel rises in, the bottom as it lifts away */}
            <span className="pointer-events-none absolute inset-x-0 -top-[7vh] h-[7vh] bg-brand-950 [border-radius:50%_50%_0_0/100%_100%_0_0]" />
            <span className="pointer-events-none absolute inset-x-0 -bottom-[7vh] h-[7vh] bg-brand-950 [border-radius:0_0_50%_50%/0_0_100%_100%]" />
            <div className="pointer-events-none absolute inset-0 bg-grid-dark bg-grid opacity-40 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]" />

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45, ease: RISE, delay: 0.2 }}
              className="relative"
            >
              <Logo tone="light" className="h-9 sm:h-11" />
            </motion.div>

            <span className="relative mt-6 block overflow-hidden pb-[0.15em]">
              <motion.span
                initial={{ y: '115%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: RISE, delay: 0.28 }}
                className="block font-display text-[clamp(2.2rem,7vw,4.5rem)] font-medium leading-none tracking-[-0.04em] text-white"
              >
                {title.pre}{' '}
                <em className="pr-[0.06em] font-serif text-[1.1em] font-normal italic tracking-[-0.02em] text-gold-400">
                  {title.accent}
                </em>
              </motion.span>
            </span>

            <div className="relative mt-8 h-[2px] w-[min(48vw,200px)] overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1], delay: 0.35 }}
                className="h-full origin-left bg-gradient-to-r from-gold-400 to-brand-400"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

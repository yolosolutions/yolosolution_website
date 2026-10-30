import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Logo } from '@/components/icons/Logo'
import { markSplashSeen, splash, willShowSplash } from '@/lib/splashState'

/** First-visit intro: the logo assembles, then the screen lifts away. Shown once per browser session. */
export function Splash() {
  const [show, setShow] = useState(willShowSplash)

  useEffect(() => {
    if (!show) return
    document.body.style.overflow = 'hidden'
    const t = window.setTimeout(() => {
      markSplashSeen()
      splash.delay = 0
      setShow(false)
    }, 1900)
    return () => {
      window.clearTimeout(t)
      document.body.style.overflow = ''
    }
  }, [show])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="splash"
          aria-hidden="true"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-brand-950"
        >
          <div className="pointer-events-none absolute inset-0 bg-grid-dark bg-grid opacity-40 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]" />
          <Logo tone="light" animated className="relative h-auto w-[min(72vw,360px)]" />
          <div className="relative mt-10 h-[2px] w-[min(48vw,200px)] overflow-hidden rounded-full bg-white/10">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5, ease: [0.65, 0, 0.35, 1], delay: 0.2 }}
              className="h-full origin-left bg-gradient-to-r from-gold-400 to-brand-400"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

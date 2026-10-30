import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

/** Round back-to-top button with a progress ring that tracks how far down the page you are. */
export function BackToTop() {
  const [show, setShow] = useState(false)
  const { scrollY, scrollYProgress } = useScroll()
  const pathLength = useSpring(scrollYProgress, { stiffness: 140, damping: 26, mass: 0.3 })

  useEffect(() => scrollY.on('change', (y) => setShow(y > 700)), [scrollY])

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.6, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 12 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          className="fixed bottom-[88px] right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-brand-950/90 text-white shadow-float backdrop-blur transition-colors hover:bg-brand-900 sm:bottom-[96px] sm:right-6"
        >
          <svg viewBox="0 0 48 48" className="absolute inset-0 -rotate-90" aria-hidden="true">
            <circle cx="24" cy="24" r="21" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="2.5" />
            <motion.circle
              cx="24"
              cy="24"
              r="21"
              fill="none"
              stroke="#FFBD59"
              strokeWidth="2.5"
              strokeLinecap="round"
              style={{ pathLength }}
            />
          </svg>
          <ArrowUp className="relative h-4 w-4" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

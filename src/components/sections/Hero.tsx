import { motion } from 'framer-motion'
import { ArrowRight, Eye } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pb-20 pt-16 sm:pb-28 sm:pt-24">
      <div className="pointer-events-none absolute inset-0 bg-grid-faint bg-grid opacity-40 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />

      <Container className="relative grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-royal-100 bg-royal-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-royal-600">
            Digital Agency · India
          </span>
          <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-charcoal-800 sm:text-5xl lg:text-6xl">
            Websites &amp; AI Automation for{' '}
            <span className="text-royal-500">Growing Businesses</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-charcoal-400">
            We build modern websites, e-commerce solutions and smart automation
            that help businesses strengthen their online presence, generate
            enquiries and simplify repetitive work.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button to="/contact" variant="primary" icon={<ArrowRight className="h-4 w-4" />}>
              Start Your Project
            </Button>
            <Button to="/portfolio" variant="secondary" icon={<Eye className="h-4 w-4" />}>
              View Our Work
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-3 border-t border-charcoal-100 pt-8 sm:gap-8">
            <div>
              <p className="font-display text-[clamp(0.875rem,4vw,1.5rem)] font-bold text-charcoal-800">6+</p>
              <p className="text-xs text-charcoal-400 sm:text-sm">Projects Completed</p>
            </div>
            <div>
              <p className="font-display text-[clamp(0.875rem,4vw,1.5rem)] font-bold text-charcoal-800">India</p>
              <p className="text-xs text-charcoal-400 sm:text-sm">Based</p>
            </div>
            <div className="min-w-0">
              <p className="font-display text-[clamp(0.875rem,4vw,1.5rem)] font-bold text-charcoal-800">Worldwide</p>
              <p className="text-xs text-charcoal-400 sm:text-sm">Working</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          {/* Abstract browser-window signature illustration, in place of a stock photo */}
          <div className="relative animate-float">
            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-2xl bg-gold-100" />
            <div className="absolute -bottom-8 -left-6 h-32 w-32 rounded-full bg-royal-50" />

            <div className="relative overflow-hidden rounded-2xl border border-charcoal-100 bg-white shadow-softLg">
              <div className="flex items-center gap-1.5 border-b border-charcoal-100 bg-charcoal-50 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-charcoal-200" />
                <span className="h-2.5 w-2.5 rounded-full bg-charcoal-200" />
                <span className="h-2.5 w-2.5 rounded-full bg-gold-400" />
              </div>
              <div className="space-y-4 p-6">
                <div className="h-4 w-2/3 rounded-full bg-charcoal-100" />
                <div className="h-3 w-full rounded-full bg-charcoal-50" />
                <div className="h-3 w-5/6 rounded-full bg-charcoal-50" />
                <div className="mt-6 grid grid-cols-3 gap-3">
                  <div className="h-16 rounded-xl bg-royal-50" />
                  <div className="h-16 rounded-xl bg-gold-50" />
                  <div className="h-16 rounded-xl bg-charcoal-50" />
                </div>
                <div className="mt-4 h-9 w-32 rounded-full bg-royal-500" />
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

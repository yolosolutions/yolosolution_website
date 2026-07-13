import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

export function CTASection() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl bg-royal-500 px-8 py-16 text-center sm:px-16"
        >
          <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10" />
          <div className="pointer-events-none absolute -bottom-12 -left-10 h-48 w-48 rounded-full bg-gold-400/20" />

          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready for a website that works as hard as you do?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-royal-50 sm:text-lg">
            Tell us about your business and we'll get back to you with a free,
            no-obligation quote within one business day.
          </p>
          <div className="mt-8 flex justify-center">
            <Button to="/contact" variant="secondary" icon={<ArrowRight className="h-4 w-4" />}>
              Get Your Free Quote
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

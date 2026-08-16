import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

export function AboutPreview() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-3 inline-block rounded-full bg-gold-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-gold-600">
            Who We Are
          </span>
          <h2 className="font-display text-3xl font-bold tracking-tight text-charcoal-800 sm:text-4xl">
            A small agency focused on practical business growth
          </h2>
          <p className="mt-5 text-base leading-relaxed text-charcoal-400 sm:text-lg">
            YOLO Solutions builds business-focused websites, e-commerce
            experiences and automation for growing companies. We combine modern,
            responsive development with an automation mindset and direct
            communication—based in India and working worldwide.
          </p>
          <div className="mt-8">
            <Button to="/about" variant="secondary" icon={<ArrowRight className="h-4 w-4" />}>
              More About Us
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 gap-4"
        >
          {[
            { label: 'Projects Completed', value: '6+' },
            { label: 'Based In', value: 'India' },
            { label: 'Working', value: 'Worldwide' },
            { label: 'Communication', value: 'Direct' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-charcoal-100 bg-white p-6 text-center shadow-soft"
            >
              <p className="font-display text-3xl font-bold text-royal-500">{stat.value}</p>
              <p className="mt-1 text-sm text-charcoal-400">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}

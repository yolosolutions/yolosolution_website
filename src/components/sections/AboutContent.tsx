import { motion } from 'framer-motion'
import { Target, Heart, ShieldCheck } from 'lucide-react'
import { Container } from '@/components/ui/Container'

const values = [
  {
    icon: Target,
    title: 'Outcomes over technology',
    description:
      'We focus on useful digital solutions that strengthen credibility, support enquiries and simplify how a business works.',
  },
  {
    icon: Heart,
    title: 'Built for small businesses',
    description:
      'Modern, responsive development is shaped around each business, its customers and its priorities.',
  },
  {
    icon: ShieldCheck,
    title: 'Clear communication',
    description:
      "You'll always know what stage your project is at, with direct communication and a clear path to launch.",
  },
]

export function AboutContent() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="text-base leading-relaxed text-charcoal-500 sm:text-lg"
          >
            YOLO Solutions is a small digital agency based in India and working
            worldwide. We create business-focused websites, e-commerce solutions
            and smart automation that help growing companies improve their online
            presence, handle enquiries and reduce repetitive work. With 6+
            projects completed, we keep the process practical and communication
            direct from first conversation to launch.
          </motion.p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="rounded-2xl border border-charcoal-100 bg-white p-7 text-center shadow-soft"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-gold-50">
                <value.icon className="h-6 w-6 text-gold-600" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-charcoal-800">
                {value.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal-400">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

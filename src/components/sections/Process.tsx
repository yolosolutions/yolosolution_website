import { motion } from 'framer-motion'
import { processSteps } from '@/data/process'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function Process() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Our Process"
          title="A clear, six-step path from idea to launch"
          description="No jargon, no guesswork — you'll always know exactly what stage your project is at."
        />

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative rounded-2xl border border-charcoal-100 bg-white p-7 shadow-soft"
            >
              <span className="font-display text-4xl font-bold text-royal-100">
                {item.step}
              </span>
              <h3 className="mt-3 font-display text-lg font-semibold text-charcoal-800">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal-400">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

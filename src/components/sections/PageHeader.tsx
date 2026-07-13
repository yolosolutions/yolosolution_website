import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description: string
}) {
  return (
    <section className="relative overflow-hidden bg-charcoal-50/50 py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0 bg-grid-faint bg-grid opacity-30 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />
      <Container className="relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-3 inline-block rounded-full bg-royal-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-royal-600">
            {eyebrow}
          </span>
          <h1 className="font-display text-3xl font-bold tracking-tight text-charcoal-800 sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-charcoal-400 sm:text-lg">
            {description}
          </p>
        </motion.div>
      </Container>
    </section>
  )
}

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
    <section className="relative overflow-hidden bg-brand-950 pb-16 pt-32 sm:pb-20 sm:pt-40">
      <div className="pointer-events-none absolute inset-0 bg-grid-dark bg-grid opacity-60 [mask-image:radial-gradient(ellipse_70%_100%_at_50%_0%,black,transparent)]" />
      <div className="glow-blue pointer-events-none absolute -left-32 -top-40 h-[520px] w-[520px] rounded-full opacity-60" />
      <div className="glow-gold pointer-events-none absolute -right-40 -top-10 h-[420px] w-[420px] rounded-full opacity-40" />

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-gold-400">
            <span className="h-px w-6 bg-gold-400" />
            {eyebrow}
          </span>
          <h1 className="text-balance font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-[3.4rem] lg:leading-[1.1]">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-brand-100/80">{description}</p>
        </motion.div>
      </Container>
    </section>
  )
}

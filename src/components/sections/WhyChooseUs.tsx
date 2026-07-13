import { motion } from 'framer-motion'
import { Smartphone, Zap, Search, Wallet, Sparkles, LifeBuoy } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'

const reasons = [
  { icon: Smartphone, title: 'Responsive Design', description: 'Your site looks and works great on phones, tablets, and desktops alike.' },
  { icon: Zap, title: 'Fast Loading', description: 'Optimized pages that load quickly, keeping visitors engaged instead of waiting.' },
  { icon: Search, title: 'SEO Friendly', description: 'Built with clean structure so search engines can find and rank your site.' },
  { icon: Wallet, title: 'Affordable Pricing', description: 'Straightforward, fair pricing built for small business budgets.' },
  { icon: Sparkles, title: 'Clean UI', description: 'A modern, uncluttered design that builds trust the moment visitors arrive.' },
  { icon: LifeBuoy, title: 'Ongoing Support', description: 'We stay available after launch for updates, fixes, and questions.' },
]

export function WhyChooseUs() {
  return (
    <section className="bg-charcoal-50/50 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Why YOLO Solutions"
          title="Built to earn your customers' trust"
          description="Every site we ship is judged on the same standard: does it make visitors trust this business more?"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="rounded-2xl border border-charcoal-100 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-softLg"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-royal-50">
                <reason.icon className="h-5 w-5 text-royal-500" />
              </div>
              <h3 className="font-display text-base font-semibold text-charcoal-800">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal-400">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

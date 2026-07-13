import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { testimonials } from '@/data/testimonials'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function Testimonials() {
  return (
    <section className="bg-charcoal-50/50 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Client Feedback"
          title="What clients say about working with us"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="rounded-2xl border border-charcoal-100 bg-white p-7 shadow-soft"
            >
              <Quote className="h-6 w-6 text-gold-400" />
              <p className="mt-4 text-sm leading-relaxed text-charcoal-600">
                "{testimonial.quote}"
              </p>
              <div className="mt-6 border-t border-charcoal-100 pt-4">
                <p className="font-display text-sm font-semibold text-charcoal-800">
                  {testimonial.name}
                </p>
                <p className="text-xs text-charcoal-400">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

import { motion } from 'framer-motion'
import { Check, MessageCircle } from 'lucide-react'
import { services } from '@/data/services'
import { Container } from '@/components/ui/Container'

const WHATSAPP_NUMBER = '916379293492'

function whatsappLink(serviceTitle: string) {
  const message = `Hi, I'm interested in a ${serviceTitle}. Can you share more details?`
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}


export function ServiceCards() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
        <motion.a
              key={service.title}
              href={whatsappLink(service.title)}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="flex cursor-pointer flex-col rounded-2xl border border-charcoal-100 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-royal-200 hover:shadow-softLg"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-royal-50">
                <service.icon className="h-6 w-6 text-royal-500" />
              </div>
              <h3 className="font-display text-lg font-semibold text-charcoal-800">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal-400">
                {service.description}
              </p>
              <ul className="mt-5 space-y-2.5 border-t border-charcoal-100 pt-5">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-charcoal-600">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                    {feature}
                  </li>
                ))}
                     </ul>
              <span className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-royal-500">
                <MessageCircle className="h-4 w-4" /> Enquire on WhatsApp
              </span>
            </motion.a>
          ))}
        </div>
      </Container>
    </section>
  )
}

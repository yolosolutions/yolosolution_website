import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { services } from '@/data/services'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function HomeServices() {
  const primaryServices = services.slice(0, 3)

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="What We Do"
          title="Digital solutions built around your business"
          description="Practical websites, online stores and automation designed to support how your business grows and operates."
        />

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {primaryServices.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="rounded-2xl border border-charcoal-100 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-royal-200 hover:shadow-softLg"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-royal-50">
                <service.icon className="h-5 w-5 text-royal-500" />
              </div>
              <h3 className="mt-4 font-display text-base font-semibold text-charcoal-800">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal-400">
                {service.description}
              </p>
              <Link
                to="/services"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-royal-500 transition-colors hover:text-royal-600"
              >
                Learn More <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </motion.article>
          ))}
        </div>

        <div className="mt-9 flex justify-center">
          <Button to="/services" variant="secondary" icon={<ArrowRight className="h-4 w-4" />}>
            View All Services
          </Button>
        </div>
      </Container>
    </section>
  )
}

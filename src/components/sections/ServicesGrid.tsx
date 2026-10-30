import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { services } from '@/data/services'

export function ServicesGrid() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="What we build"
          title="Everything you need to build and grow online"
          description="One team for design, development and support, so your website, app and automations all work together."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={(index % 4) * 0.06}>
              <Link
                to={`/services#${service.id}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-ink-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lift"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-bold text-ink-900">{service.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">{service.summary}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-600">
                  Learn more
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
                <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-brand-600 to-gold-400 transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex justify-center">
          <Button to="/services" variant="secondary" size="lg" icon={<ArrowRight className="h-4 w-4" />}>
            Explore all services
          </Button>
        </Reveal>
      </Container>
    </section>
  )
}

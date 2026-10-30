import { Check } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { services } from '@/data/services'
import { cn } from '@/lib/utils'

export function ServiceDetails() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container className="space-y-6">
        {services.map((service, index) => (
          <Reveal key={service.id}>
            <article
              id={service.id}
              className={cn(
                'grid grid-cols-1 gap-8 rounded-3xl border border-ink-200 p-7 shadow-soft transition-shadow duration-300 hover:shadow-lift sm:p-10 lg:grid-cols-12 lg:gap-12',
                index % 2 === 0 ? 'bg-white' : 'bg-ink-50'
              )}
            >
              <div className="lg:col-span-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-600 text-white shadow-lift">
                  <service.icon className="h-7 w-7" />
                </div>
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-gold-700">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h2 className="mt-1 font-display text-2xl font-bold text-ink-900 sm:text-3xl">{service.title}</h2>
                <p className="mt-4 text-[15px] leading-relaxed text-ink-500">{service.description}</p>
                <p className="mt-5 rounded-xl border border-gold-200 bg-gold-50 px-4 py-3 text-sm text-ink-700">
                  <span className="font-semibold text-gold-700">Ideal for: </span>
                  {service.idealFor}
                </p>
              </div>

              <div className="lg:col-span-7">
                <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-400">What&rsquo;s included</h3>
                <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 rounded-xl border border-ink-200 bg-white px-4 py-3.5 text-sm font-medium text-ink-800"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </Container>
    </section>
  )
}

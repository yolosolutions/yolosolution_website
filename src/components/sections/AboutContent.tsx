import { Compass, Eye, ShieldCheck, Zap } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { GlobeSection } from '@/components/sections/GlobeSection'
import { site } from '@/data/site'

const values = [
  {
    icon: Compass,
    title: 'Outcomes over technology',
    description:
      'We choose tools to serve your goals, not the other way around. If a simple solution does the job, we build the simple solution.',
  },
  {
    icon: Eye,
    title: 'Clear communication',
    description:
      'You always know what stage your project is at, with direct contact and a clear path from first call to launch.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality you can trust',
    description:
      'Clean code, careful testing and attention to detail, so what we hand over is ready for real customers.',
  },
  {
    icon: Zap,
    title: 'Built for growth',
    description:
      'We build with the future in mind, so your product can scale and adapt as your business does.',
  },
]

export function AboutContent() {
  return (
    <>
      <section className="bg-white py-16 sm:py-24">
        <Container className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              align="left"
              eyebrow="Our story"
              title="A digital agency focused on practical, beautiful software"
            />
          </div>
          <Reveal className="space-y-5 text-base leading-relaxed text-ink-500 sm:text-lg lg:col-span-7">
            <p>
              YOLO Solutions is a digital agency based in India and working with clients worldwide. We
              design and build websites, e-commerce stores, web and mobile applications and smart
              automation that help growing businesses strengthen their online presence, handle enquiries
              and cut down repetitive work.
            </p>
            <p>
              Founded in {site.founded}, we&rsquo;ve delivered {site.projectsCompleted} projects, and we keep the
              process practical and the communication direct from the first conversation to launch and
              beyond. You work with the people who actually build your product.
            </p>
          </Reveal>
        </Container>
      </section>

      <GlobeSection />

      <section className="bg-ink-50 py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="What we stand for"
            title="The principles behind every project"
            description="How we work matters as much as what we build."
          />
          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={(index % 2) * 0.07}>
                <div className="flex h-full gap-5 rounded-2xl border border-ink-200 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <value.icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-ink-900">{value.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-500">{value.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}

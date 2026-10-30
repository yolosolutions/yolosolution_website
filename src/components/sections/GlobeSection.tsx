import { Logo } from '@/components/icons/Logo'
import { ThreeCanvas } from '@/components/sections/ThreeCanvas'
import { Container } from '@/components/ui/Container'
import { CountUp } from '@/components/ui/CountUp'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { site } from '@/data/site'

const loadGlobe = () => import('@/three/globeScene')

const facts = [
  { value: <CountUp to={parseInt(site.projectsCompleted, 10)} suffix="+" />, label: 'Projects delivered' },
  { value: <>{site.founded}</>, label: 'Established' },
  { value: <CountUp to={8} />, label: 'Core services' },
]

/** About-page interlude: a slowly turning dotted globe with arcs from India to the world. */
export function GlobeSection() {
  return (
    <section className="grain relative isolate overflow-hidden bg-brand-950 py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-dark bg-grid opacity-40 [mask-image:radial-gradient(ellipse_70%_80%_at_70%_50%,black,transparent)]" />
      <div className="glow-blue pointer-events-none absolute -right-24 top-0 -z-10 h-[520px] w-[520px] rounded-full opacity-40" />

      <Container className="relative grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
        <div>
          <SectionHeading
            tone="dark"
            align="left"
            eyebrow="Our reach"
            title="Based in India. Working worldwide."
            description="We build from India for clients across time zones, with clear communication wherever you are."
          />
          <Reveal delay={0.15}>
            <dl className="mt-10 grid max-w-md grid-cols-3 gap-6 border-t border-white/10 pt-8">
              {facts.map((fact) => (
                <div key={fact.label}>
                  <dd className="font-display text-3xl font-medium tracking-tight text-white sm:text-4xl">
                    {fact.value}
                  </dd>
                  <dt className="mt-1 text-[11px] uppercase tracking-[0.14em] text-white/50">{fact.label}</dt>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <ThreeCanvas
          load={loadGlobe}
          label="Interactive 3D globe with arcs reaching from India to cities around the world"
          className="mx-auto aspect-square w-full max-w-[520px]"
          fallback={<Logo tone="light" className="h-auto w-3/5 opacity-60" />}
        />
      </Container>
    </section>
  )
}

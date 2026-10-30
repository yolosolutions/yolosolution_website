import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { processSteps } from '@/data/process'

export function ProcessSection() {
  return (
    <section className="relative overflow-hidden bg-brand-950 py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid-dark bg-grid opacity-50 [mask-image:radial-gradient(ellipse_80%_70%_at_50%_0%,black,transparent)]" />
      <div className="glow-blue pointer-events-none absolute -right-40 top-0 h-[500px] w-[500px] rounded-full opacity-40" />

      <Container className="relative">
        <SectionHeading
          tone="dark"
          eyebrow="How we work"
          title="A clear process from first call to launch"
          description="No guesswork and no surprises. You see progress at every step and sign off before we move on."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <Reveal key={step.step} delay={(index % 3) * 0.07}>
              <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur transition-all duration-300 hover:border-gold-400/50 hover:bg-white/[0.07]">
                <span className="font-display text-4xl font-extrabold text-gold-400/90 transition-colors group-hover:text-gold-400">
                  {step.step}
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-100/70">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

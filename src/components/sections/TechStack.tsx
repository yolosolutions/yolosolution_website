import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { techGroups } from '@/data/techstack'

export function TechStack() {
  return (
    <section className="bg-ink-50 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Technology"
          title="Modern tools, chosen for your project"
          description="We pick the right technology for the job, favouring proven, well-supported tools that keep your product fast, secure and easy to maintain."
        />
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {techGroups.map((group, index) => (
            <Reveal key={group.label} delay={(index % 3) * 0.06}>
              <div className="h-full rounded-2xl border border-ink-200 bg-white p-6 shadow-soft">
                <h3 className="font-display text-sm font-bold uppercase tracking-[0.12em] text-brand-600">
                  {group.label}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-ink-200 bg-ink-50 px-3 py-1.5 text-sm font-medium text-ink-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

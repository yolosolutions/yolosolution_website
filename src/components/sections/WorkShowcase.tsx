import { ArrowRight, Sparkles } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ProjectTile } from '@/components/sections/ProjectTile'
import { projects } from '@/data/portfolio'

export function WorkShowcase() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Selected work"
          title="Real projects, live and working for their owners"
          description="A look at recent websites we've designed, built and launched."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectTile key={project.name} project={project} index={index} />
          ))}

          {/* closing tile so the grid always ends on a full row */}
          <Reveal className="h-full" delay={0.1}>
            <div className="flex h-full min-h-[320px] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-ink-200 bg-ink-50 px-6 py-10 text-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-100 text-gold-700">
                <Sparkles className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold text-ink-900">Your project could be next</h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-ink-500">
                Tell us what you&rsquo;re building and we&rsquo;ll show you how we&rsquo;d approach it.
              </p>
              <Button to="/contact" variant="primary" className="mt-6" icon={<ArrowRight className="h-4 w-4" />}>
                Start a project
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-12 flex justify-center">
          <Button to="/portfolio" variant="secondary" size="lg" icon={<ArrowRight className="h-4 w-4" />}>
            See all work
          </Button>
        </Reveal>
      </Container>
    </section>
  )
}

import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ProjectCard } from '@/components/sections/ProjectCard'
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
        <div className="mt-14 space-y-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
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

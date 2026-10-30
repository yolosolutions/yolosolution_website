import { ArrowRight, Sparkles } from 'lucide-react'
import { PageHeader } from '@/components/sections/PageHeader'
import { ConceptDevices } from '@/components/sections/headerVisuals'
import { ProjectCard } from '@/components/sections/ProjectCard'
import { CTASection } from '@/components/sections/CTASection'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
import { projects } from '@/data/portfolio'
import { usePageMeta } from '@/hooks/usePageMeta'

export default function Portfolio() {
  usePageMeta(
    'Our Work',
    'Explore recent websites and web projects built by YOLO Solutions, live and working for real businesses.'
  )

  return (
    <>
      <PageHeader
        eyebrow="Our work"
        index="02"
        title="Projects we're proud to"
        accent="put our name on."
        description="Real websites, live on the web and working for the businesses behind them."
        visual={<ConceptDevices />}
      />

      <section className="bg-white py-16 sm:py-24">
        <Container className="space-y-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}

          <Reveal>
            <div className="flex flex-col items-center rounded-3xl border-2 border-dashed border-ink-200 bg-ink-50 px-6 py-14 text-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-100 text-gold-700">
                <Sparkles className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-2xl font-bold text-ink-900">Your project could be next</h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-500">
                More case studies are on the way. Tell us what you&rsquo;re building and we&rsquo;ll show you how
                we&rsquo;d approach it.
              </p>
              <Button
                to="/contact"
                variant="primary"
                size="lg"
                className="mt-7"
                icon={<ArrowRight className="h-4 w-4" />}
              >
                Start a project
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      <CTASection />
    </>
  )
}

import { motion } from 'framer-motion'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { projects } from '@/data/portfolio'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'

const projectImages: Record<string, string> = {
  'Navigate Aviation Academy': '/projects/navigate-aviation-academy.jpg',
  'Voyage Enterprises': '/projects/voyage-enterprises.png',
}

export function HomePortfolio() {
  const featuredProjects = projects
    .filter((project) => projectImages[project.name])
    .slice(0, 3)

  return (
    <section className="bg-charcoal-50/50 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Portfolio"
          title="Selected Work"
          description="A selection of real projects built around business credibility, usability and customer enquiries."
        />

        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
              className="overflow-hidden rounded-2xl border border-charcoal-100 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-softLg"
            >
              <div className="h-44 overflow-hidden bg-gradient-to-br from-royal-50 to-gold-50">
                <img
                  src={projectImages[project.name]}
                  alt={`${project.name} project preview`}
                  className="h-full w-full object-contain p-3"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-gold-600">
                  {project.category}
                </span>
                <h3 className="mt-1.5 font-display text-lg font-semibold text-charcoal-800">
                  {project.name}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-charcoal-400">
                  {project.description}
                </p>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-royal-500 transition-colors hover:text-royal-600"
                  >
                    View Live Project <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-9 flex justify-center">
          <Button to="/portfolio" variant="secondary" icon={<ArrowRight className="h-4 w-4" />}>
            View All Projects
          </Button>
        </div>
      </Container>
    </section>
  )
}

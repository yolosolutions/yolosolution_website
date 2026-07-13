import { motion } from 'framer-motion'
import { ExternalLink, Globe } from 'lucide-react'
import { projects } from '@/data/portfolio'
import { Container } from '@/components/ui/Container'
import { cn } from '@/lib/utils'

export function PortfolioGrid() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="overflow-hidden rounded-2xl border border-charcoal-100 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-softLg"
            >
              {/* Screenshot placeholder — swap for a real project screenshot */}
              <div className="relative flex h-44 items-center justify-center bg-gradient-to-br from-royal-50 to-gold-50">
                <Globe className="h-10 w-10 text-royal-300" />
                <span
                  className={cn(
                    'absolute right-3 top-3 rounded-full px-3 py-1 text-xs font-semibold',
                    project.live
                      ? 'bg-white text-royal-600 shadow-soft'
                      : 'bg-charcoal-100 text-charcoal-500'
                  )}
                >
                  {project.live ? 'Live' : 'In Progress'}
                </span>
              </div>

              <div className="p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-gold-600">
                  {project.category}
                </span>
                <h3 className="mt-2 font-display text-lg font-semibold text-charcoal-800">
                  {project.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-400">
                  {project.description}
                </p>

                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-royal-500 hover:text-royal-600"
                  >
                    Visit Website <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

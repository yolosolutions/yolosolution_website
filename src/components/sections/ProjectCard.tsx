import { ArrowUpRight, Check } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'
import type { Project } from '@/data/portfolio'
import { cn } from '@/lib/utils'

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const flip = index % 2 === 1
  return (
    <Reveal>
      <article className="grid grid-cols-1 overflow-hidden rounded-3xl border border-ink-200 bg-white shadow-soft transition-shadow duration-300 hover:shadow-lift lg:grid-cols-2">
        <a
          href={project.url}
          target="_blank"
          rel="noreferrer"
          aria-label={`Visit ${project.name}`}
          className={cn(
            'group relative flex min-h-[280px] items-center justify-center overflow-hidden p-8 sm:p-12',
            project.surface,
            flip && 'lg:order-2'
          )}
        >
          <div className="pointer-events-none absolute inset-0 bg-grid-light bg-grid opacity-60" />
          <img
            src={project.image}
            alt={`${project.name} project artwork`}
            loading="lazy"
            className="relative max-h-64 w-full object-contain transition-transform duration-500 group-hover:scale-105"
          />
          <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-semibold text-emerald-700 shadow-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Live
          </span>
        </a>

        <div className="flex flex-col justify-center p-7 sm:p-10">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-700">
            {project.category}
          </span>
          <h3 className="mt-2 font-display text-2xl font-bold text-ink-900 sm:text-3xl">{project.name}</h3>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-500">{project.description}</p>

          <ul className="mt-5 space-y-2">
            {project.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2.5 text-sm text-ink-700">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" /> {h}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-ink-100 px-3 py-1 text-xs font-medium text-ink-600">
                {tag}
              </span>
            ))}
          </div>

          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex w-fit items-center gap-1.5 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
          >
            Visit live website <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </article>
    </Reveal>
  )
}

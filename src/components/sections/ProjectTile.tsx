import { ArrowUpRight } from 'lucide-react'
import { ProjectPreview } from '@/components/sections/ProjectPreview'
import { Reveal } from '@/components/ui/Reveal'
import type { Project } from '@/data/portfolio'
import { cn } from '@/lib/utils'

/** Compact project card for grids (used on the home page). */
export function ProjectTile({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <Reveal delay={(index % 3) * 0.07} className="h-full">
      <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink-200 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
        <a
          href={project.url}
          target="_blank"
          rel="noreferrer"
          aria-label={`Visit ${project.name}`}
          className={cn('relative flex h-64 items-center justify-center overflow-hidden p-5', project.surface)}
        >
          <div className="w-full transition-transform duration-500 group-hover:scale-[1.03]">
            <ProjectPreview project={project} compact />
          </div>
          <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 text-[11px] font-semibold text-emerald-700 shadow-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Live
          </span>
        </a>

        <div className="flex flex-1 flex-col p-6">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-700">{project.category}</span>
          <h3 className="mt-2 font-display text-xl font-bold text-ink-900">{project.name}</h3>
          <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-ink-500">{project.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.slice(0, 2).map((tag) => (
              <span key={tag} className="rounded-full bg-ink-100 px-3 py-1 text-xs font-medium text-ink-600">
                {tag}
              </span>
            ))}
          </div>
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="mt-auto inline-flex w-fit items-center gap-1.5 pt-5 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
          >
            Visit website <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </article>
    </Reveal>
  )
}

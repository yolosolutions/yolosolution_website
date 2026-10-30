import type { Project } from '@/data/portfolio'
import { cn } from '@/lib/utils'

/** Hostname shown in the browser frame, e.g. "venkateshwaraassociates.com". */
const hostOf = (url: string) => {
  try {
    return new URL(url).host.replace(/^www\./, '')
  } catch {
    return url
  }
}

/**
 * Artwork projects show their logo/illustration as-is; screenshot projects are
 * framed like a browser window so every project reads as "a real website".
 */
export function ProjectPreview({ project, compact = false }: { project: Project; compact?: boolean }) {
  if (project.preview === 'artwork') {
    return (
      <img
        src={project.image}
        alt={`${project.name} project artwork`}
        loading="lazy"
        className={cn('w-full object-contain', compact ? 'max-h-44' : 'max-h-64')}
      />
    )
  }

  return (
    <div className="w-full overflow-hidden rounded-xl border border-ink-200/80 bg-white shadow-lift">
      <div className="flex items-center gap-2.5 border-b border-ink-100 bg-ink-50 px-3 py-2">
        <span className="flex gap-1">
          <span className="h-2 w-2 rounded-full bg-ink-200" />
          <span className="h-2 w-2 rounded-full bg-ink-200" />
          <span className="h-2 w-2 rounded-full bg-gold-400" />
        </span>
        <span className="min-w-0 flex-1 truncate rounded-md bg-white px-2 py-0.5 font-mono text-[10px] text-ink-400 shadow-soft">
          {hostOf(project.url)}
        </span>
      </div>
      <img
        src={project.image}
        alt={`${project.name} website homepage`}
        loading="lazy"
        className="aspect-[16/10] w-full object-cover object-top"
      />
    </div>
  )
}

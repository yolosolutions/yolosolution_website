import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowUpRight, Check } from 'lucide-react'
import { ProjectPreview } from '@/components/sections/ProjectPreview'
import { Reveal } from '@/components/ui/Reveal'
import type { Project } from '@/data/portfolio'
import { useFinePointer } from '@/hooks/useFinePointer'
import { cn } from '@/lib/utils'

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const flip = index % 2 === 1
  const fine = useFinePointer()
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 140, damping: 18 })
  const sy = useSpring(my, { stiffness: 140, damping: 18 })
  const rotateY = useTransform(sx, [-0.5, 0.5], [-9, 9])
  const rotateX = useTransform(sy, [-0.5, 0.5], [7, -7])
  const glare = useTransform([sx, sy], ([x, y]: number[]) =>
    `radial-gradient(circle at ${(x + 0.5) * 100}% ${(y + 0.5) * 100}%, rgba(255,255,255,0.55), transparent 55%)`
  )

  function onMove(e: React.PointerEvent<HTMLElement>) {
    if (!fine) return
    const r = e.currentTarget.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width - 0.5)
    my.set((e.clientY - r.top) / r.height - 0.5)
  }
  function onLeave() {
    mx.set(0)
    my.set(0)
  }

  return (
    <Reveal>
      <article className="grid grid-cols-1 overflow-hidden rounded-3xl border border-ink-200 bg-white shadow-soft transition-shadow duration-300 hover:shadow-lift lg:grid-cols-2">
        <a
          href={project.url}
          target="_blank"
          rel="noreferrer"
          aria-label={`Visit ${project.name}`}
          onPointerMove={onMove}
          onPointerLeave={onLeave}
          className={cn(
            'group relative flex min-h-[280px] items-center justify-center overflow-hidden p-8 [perspective:900px] sm:p-12',
            project.surface,
            flip && 'lg:order-2'
          )}
        >
          <div className="pointer-events-none absolute inset-0 bg-grid-light bg-grid opacity-60" />
          <motion.div style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }} className="relative w-full">
            <div className="transition-transform duration-500 group-hover:scale-[1.03]">
              <ProjectPreview project={project} />
            </div>
          </motion.div>
          <motion.span
            aria-hidden="true"
            style={{ background: glare }}
            className="pointer-events-none absolute inset-0 opacity-0 mix-blend-soft-light transition-opacity duration-300 group-hover:opacity-100"
          />
          <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-semibold text-emerald-700 shadow-soft">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </span>
            Live
          </span>
          <span className="absolute bottom-4 right-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-brand-600 text-white opacity-0 shadow-lift transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <ArrowUpRight className="h-4 w-4" />
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

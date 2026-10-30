import { Gauge, MousePointer2, Smartphone, Zap } from 'lucide-react'
import { Logo } from '@/components/icons/Logo'
import { ThreeCanvas } from '@/components/sections/ThreeCanvas'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'

const loadDevices = () => import('@/three/devicesScene')

const points = [
  { icon: Zap, label: 'Smooth, purposeful motion' },
  { icon: Smartphone, label: 'Pixel-perfect on every screen' },
  { icon: Gauge, label: 'Fast by default' },
]

/** Home-page interlude: an interactive 3D website + app that you can nudge and turn. */
export function ThreeDShowcase() {
  return (
    <section className="grain relative isolate overflow-hidden bg-brand-950 py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-dark bg-grid opacity-50 [mask-image:radial-gradient(ellipse_70%_80%_at_70%_50%,black,transparent)]" />
      <div className="glow-blue pointer-events-none absolute -right-32 top-10 -z-10 h-[560px] w-[560px] rounded-full opacity-50" />
      <div className="glow-gold pointer-events-none absolute -bottom-40 left-0 -z-10 h-[420px] w-[420px] rounded-full opacity-30" />

      <Container className="relative grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <SectionHeading
            tone="dark"
            align="left"
            eyebrow="Crafted in depth"
            title="Websites and apps with real depth"
            description="Fast, smooth and made to be touched. We design every interface to feel as good as it looks, on every screen."
          />
          <Reveal delay={0.15}>
            <ul className="mt-8 space-y-3">
              {points.map((p) => (
                <li key={p.label} className="flex items-center gap-3 text-[15px] text-white/80">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.07] text-gold-400">
                    <p.icon className="h-4 w-4" />
                  </span>
                  {p.label}
                </li>
              ))}
            </ul>
            <p className="mt-8 inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.2em] text-white/45">
              <MousePointer2 className="h-3.5 w-3.5 text-gold-400" /> Drag to turn it
            </p>
          </Reveal>
        </div>

        <ThreeCanvas
          load={loadDevices}
          label="Interactive 3D illustration of a website and a mobile app floating beside the YOLO logo chevrons"
          className="aspect-[5/4] w-full"
          fallback={<Logo tone="light" className="h-auto w-3/5 opacity-60" />}
        />
      </Container>
    </section>
  )
}

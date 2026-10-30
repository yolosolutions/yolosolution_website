import {
  Gauge,
  Handshake,
  Layers,
  MessagesSquare,
  Target,
  Wallet,
} from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'

const reasons = [
  {
    icon: Target,
    title: 'Business-first thinking',
    description:
      'We start with what you need the product to achieve (enquiries, sales, efficiency) and build backwards from there.',
  },
  {
    icon: Layers,
    title: 'Design and engineering together',
    description:
      'One team handles UI/UX, development and launch, so nothing gets lost between a designer and a developer.',
  },
  {
    icon: Gauge,
    title: 'Fast, mobile-first builds',
    description:
      'Lightweight, responsive code that loads quickly on real phones and real connections.',
  },
  {
    icon: MessagesSquare,
    title: 'Direct, honest communication',
    description:
      'You talk to the people building your product, on WhatsApp, call or email, and always know where things stand.',
  },
  {
    icon: Wallet,
    title: 'Clear, fair pricing',
    description:
      'A fixed quote after a free discovery call. Built for growing businesses, with no hidden extras.',
  },
  {
    icon: Handshake,
    title: 'A partner after launch',
    description:
      'We stay on for updates, fixes and new features, so your product keeps pace as your business grows.',
  },
]

export function WhyChooseUs() {
  return (
    <section className="bg-ink-50 py-20 sm:py-28">
      <Container className="grid grid-cols-1 gap-14 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              align="left"
              eyebrow="Why YOLO Solutions"
              title="A small team that cares like it's our own business"
              description="We keep the process practical and the communication direct, from the first conversation to launch and beyond."
            />
            <Reveal delay={0.1} className="mt-8">
              <Button to="/about" variant="secondary" size="lg">
                More about us
              </Button>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-8">
          {reasons.map((reason, index) => (
            <Reveal key={reason.title} delay={(index % 2) * 0.07}>
              <div className="h-full rounded-2xl border border-ink-200 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gold-100 text-gold-700">
                  <reason.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-base font-bold text-ink-900">{reason.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{reason.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

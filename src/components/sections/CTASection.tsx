import { ArrowRight, MessageCircle } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { BackgroundVideo } from '@/components/ui/BackgroundVideo'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
import { media } from '@/data/media'
import { site } from '@/data/site'

export function CTASection() {
  return (
    <section className="bg-white pb-20 sm:pb-28">
      <Container>
        <Reveal>
          <div className="grain relative isolate overflow-hidden rounded-3xl bg-brand-950 px-6 py-20 text-center sm:px-16 sm:py-28">
            <div className="absolute inset-0 -z-20">
              <BackgroundVideo lazy src={media.ctaVideo} className="scale-110" />
            </div>
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-950/70 via-brand-950/55 to-brand-950/80" />

            <h2 className="mx-auto max-w-2xl text-balance font-display text-4xl font-medium leading-[1.02] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              Have an idea?{' '}
              <em className="font-serif text-[1.1em] font-normal italic tracking-[-0.02em] text-gold-400">
                Let&rsquo;s build it.
              </em>
            </h2>
            <p className="mx-auto mt-5 max-w-md text-base text-white/80 [text-shadow:0_2px_18px_rgba(0,0,0,0.42)] sm:text-lg">
              Tell us what you&rsquo;re building. We&rsquo;ll reply with honest advice and a free, no-obligation quote.
            </p>
            <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <Button to="/contact" variant="accent" size="lg" icon={<ArrowRight className="h-4 w-4" />}>
                Start your project
              </Button>
              <Button href={site.whatsapp} variant="glass" size="lg" icon={<MessageCircle className="h-4 w-4" />}>
                Chat on WhatsApp
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

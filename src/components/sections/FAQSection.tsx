import { Container } from '@/components/ui/Container'
import { Accordion } from '@/components/ui/Accordion'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { faqs } from '@/data/faq'

export function FAQSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHeading
            align="left"
            eyebrow="FAQ"
            title="Questions, answered"
            description="Can't find what you're looking for? Ask us directly and we'll reply quickly."
          />
          <Reveal delay={0.1} className="mt-8">
            <Button to="/contact" variant="primary" size="lg">
              Ask a question
            </Button>
          </Reveal>
        </div>
        <Reveal className="lg:col-span-8">
          <Accordion items={faqs} />
        </Reveal>
      </Container>
    </section>
  )
}

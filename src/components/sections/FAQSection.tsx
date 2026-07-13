import { Accordion } from '@/components/ui/Accordion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Container } from '@/components/ui/Container'
import { faqs } from '@/data/faq'

export function FAQSection() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="max-w-3xl">
        <SectionHeading eyebrow="FAQ" title="Common questions, answered" />
        <div className="mt-10">
          <Accordion items={faqs} />
        </div>
      </Container>
    </section>
  )
}

import { PageHeader } from '@/components/sections/PageHeader'
import { ContactForm } from '@/components/sections/ContactForm'
import { FAQSection } from '@/components/sections/FAQSection'

export default function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's build something great together"
        description="Tell us about your business and what you need — we'll reply with a free, no-obligation quote."
      />
      <ContactForm />
      <FAQSection />
    </>
  )
}

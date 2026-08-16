import { PageHeader } from '@/components/sections/PageHeader'
import { ContactForm } from '@/components/sections/ContactForm'
import { FAQSection } from '@/components/sections/FAQSection'

export default function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Start your project"
        description="Tell us what you're trying to build or improve, and we'll discuss the right solution for your business."
      />
      <ContactForm />
      <FAQSection />
    </>
  )
}

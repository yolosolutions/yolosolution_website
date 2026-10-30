import { PageHeader } from '@/components/sections/PageHeader'
import { ContactForm } from '@/components/sections/ContactForm'
import { FAQSection } from '@/components/sections/FAQSection'
import { usePageMeta } from '@/hooks/usePageMeta'

export default function Contact() {
  usePageMeta(
    'Contact',
    'Start your project with YOLO Solutions. Tell us what you want to build and get a free, no-obligation quote.'
  )

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk about your project"
        description="Share a few details and we'll reply with honest advice and a free, no-obligation quote."
      />
      <ContactForm />
      <FAQSection />
    </>
  )
}

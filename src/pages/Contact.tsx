import { PageHeader } from '@/components/sections/PageHeader'
import { ChatMock } from '@/components/sections/headerVisuals'
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
        index="04"
        title="Let's talk about"
        accent="your project."
        description="Share a few details and we'll reply with honest advice and a free, no-obligation quote."
        visual={<ChatMock />}
        sheet="bg-ink-50"
      />
      <ContactForm />
      <FAQSection />
    </>
  )
}

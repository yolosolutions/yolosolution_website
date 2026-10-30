import { PageHeader } from '@/components/sections/PageHeader'
import { ServiceDetails } from '@/components/sections/ServiceDetails'
import { ProcessSection } from '@/components/sections/ProcessSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { CTASection } from '@/components/sections/CTASection'
import { usePageMeta } from '@/hooks/usePageMeta'

export default function Services() {
  usePageMeta(
    'Services',
    'Website development, web applications, mobile apps, e-commerce, UI/UX design, AI automation, API integrations and ongoing support from YOLO Solutions.'
  )

  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Websites, apps and automation, built end to end"
        description="From a first landing page to a full custom platform, we design, build, launch and support digital products that help your business grow."
      />
      <ServiceDetails />
      <ProcessSection />
      <FAQSection />
      <CTASection />
    </>
  )
}

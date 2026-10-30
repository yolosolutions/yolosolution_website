import { Link } from 'react-router-dom'
import { PageHeader } from '@/components/sections/PageHeader'
import { CodeToSite } from '@/components/sections/headerVisuals'
import { ServiceDetails } from '@/components/sections/ServiceDetails'
import { ProcessSection } from '@/components/sections/ProcessSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { CTASection } from '@/components/sections/CTASection'
import { services } from '@/data/services'
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
        index="01"
        title="Websites, apps and automation,"
        accent="built end to end."
        description="From a first landing page to a full custom platform, we design, build, launch and support digital products that help your business grow."
        visual={<CodeToSite />}
        extra={
          <div className="flex flex-wrap gap-2">
            {services.map((service) => (
              <Link
                key={service.id}
                to={`/services#${service.id}`}
                className="liquid-glass rounded-full px-4 py-2.5 text-[13px] font-medium text-white/85 transition-colors hover:text-white"
              >
                {service.title}
              </Link>
            ))}
          </div>
        }
      />
      <ServiceDetails />
      <ProcessSection />
      <FAQSection />
      <CTASection />
    </>
  )
}

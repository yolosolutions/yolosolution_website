import { PageHeader } from '@/components/sections/PageHeader'
import { ServiceCards } from '@/components/sections/ServiceCards'
import { CTASection } from '@/components/sections/CTASection'

export default function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Websites, e-commerce and automation"
        description="Practical digital solutions scoped around your business goals, customers and day-to-day operations."
      />
      <ServiceCards />
      <CTASection />
    </>
  )
}

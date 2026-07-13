import { PageHeader } from '@/components/sections/PageHeader'
import { ServiceCards } from '@/components/sections/ServiceCards'
import { CTASection } from '@/components/sections/CTASection'

export default function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Websites built around what your business needs"
        description="From a simple landing page to a full business website, every project is scoped and priced around your goals — not a one-size-fits-all package."
      />
      <ServiceCards />
      <CTASection />
    </>
  )
}

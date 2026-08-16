import { PageHeader } from '@/components/sections/PageHeader'
import { PortfolioGrid } from '@/components/sections/PortfolioGrid'
import { CTASection } from '@/components/sections/CTASection'

export default function Portfolio() {
  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="Selected Work"
        description="A selection of real projects built around business credibility, usability and customer enquiries."
      />
      <PortfolioGrid />
      <CTASection />
    </>
  )
}

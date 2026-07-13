import { PageHeader } from '@/components/sections/PageHeader'
import { PortfolioGrid } from '@/components/sections/PortfolioGrid'
import { CTASection } from '@/components/sections/CTASection'

export default function Portfolio() {
  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="A look at what we've built"
        description="A selection of recent projects — from business websites to landing pages — built for real clients with real goals."
      />
      <PortfolioGrid />
      <CTASection />
    </>
  )
}

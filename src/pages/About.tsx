import { PageHeader } from '@/components/sections/PageHeader'
import { AboutContent } from '@/components/sections/AboutContent'
import { Process } from '@/components/sections/Process'
import { CTASection } from '@/components/sections/CTASection'

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="A digital agency built around business needs"
        description="Based in India and serving businesses worldwide with modern development, smart automation and direct communication."
      />
      <AboutContent />
      <Process />
      <CTASection />
    </>
  )
}

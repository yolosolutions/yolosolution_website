import { PageHeader } from '@/components/sections/PageHeader'
import { AboutContent } from '@/components/sections/AboutContent'
import { Process } from '@/components/sections/Process'
import { CTASection } from '@/components/sections/CTASection'

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="Helping businesses look credible online"
        description="We're a small, focused web development agency based in India — here's what drives how we work."
      />
      <AboutContent />
      <Process />
      <CTASection />
    </>
  )
}

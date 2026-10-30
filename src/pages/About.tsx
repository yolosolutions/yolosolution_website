import { PageHeader } from '@/components/sections/PageHeader'
import { AboutContent } from '@/components/sections/AboutContent'
import { TechStack } from '@/components/sections/TechStack'
import { CTASection } from '@/components/sections/CTASection'
import { usePageMeta } from '@/hooks/usePageMeta'

export default function About() {
  usePageMeta(
    'About',
    'YOLO Solutions is a digital agency based in India, building websites, web and mobile apps and automation for growing businesses worldwide.'
  )

  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="The team behind your next digital product"
        description="A small, focused agency that builds with care, communicates clearly and stays with you after launch."
      />
      <AboutContent />
      <TechStack />
      <CTASection />
    </>
  )
}

import { PageHeader } from '@/components/sections/PageHeader'
import { DesignBoard } from '@/components/sections/headerVisuals'
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
        index="03"
        title="The team behind"
        accent="your next digital product."
        description="A small, focused agency that builds with care, communicates clearly and stays with you after launch."
        visual={<DesignBoard />}
      />
      <AboutContent />
      <TechStack />
      <CTASection />
    </>
  )
}

import { Hero } from '@/components/sections/Hero'
import { Marquee } from '@/components/sections/Marquee'
import { ServicesGrid } from '@/components/sections/ServicesGrid'
import { WhyChooseUs } from '@/components/sections/WhyChooseUs'
import { ProcessSection } from '@/components/sections/ProcessSection'
import { WorkShowcase } from '@/components/sections/WorkShowcase'
import { TechStack } from '@/components/sections/TechStack'
import { FAQSection } from '@/components/sections/FAQSection'
import { CTASection } from '@/components/sections/CTASection'
import { usePageMeta } from '@/hooks/usePageMeta'

export default function Home() {
  usePageMeta(
    'YOLO Solutions',
    'YOLO Solutions is a web and software development agency building websites, e-commerce stores, web and mobile apps and business automation for growing companies in India and worldwide.'
  )

  return (
    <>
      <Hero />
      <Marquee />
      <ServicesGrid />
      <WhyChooseUs />
      <WorkShowcase />
      <ProcessSection />
      <TechStack />
      <FAQSection />
      <CTASection />
    </>
  )
}

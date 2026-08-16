import { Hero } from '@/components/sections/Hero'
import { HomeServices } from '@/components/sections/HomeServices'
import { HomePortfolio } from '@/components/sections/HomePortfolio'
import { AboutPreview } from '@/components/sections/AboutPreview'
import { WhyChooseUs } from '@/components/sections/WhyChooseUs'
import { Process } from '@/components/sections/Process'
import { CTASection } from '@/components/sections/CTASection'

export default function Home() {
  return (
    <>
      <Hero />
      <HomeServices />
      <HomePortfolio />
      <AboutPreview />
      <WhyChooseUs />
      <Process />
      <CTASection />
    </>
  )
}

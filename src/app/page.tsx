import { Hero } from '@/components/sections/Hero'
import { PestMarquee } from '@/components/sections/PestMarquee'
import { Certifications } from '@/components/sections/Certifications'
import { Services } from '@/components/sections/Services'
import { PestGrid } from '@/components/sections/PestGrid'
import { Process } from '@/components/sections/Process'
import { About } from '@/components/sections/About'
import { Guarantee } from '@/components/sections/Guarantee'
import { WhyChooseUs } from '@/components/sections/WhyChooseUs'
import { GoogleReviews } from '@/components/sections/GoogleReviews'
import { Faq } from '@/components/sections/Faq'
import { Locations } from '@/components/sections/Locations'
import { BlogTeaser } from '@/components/sections/BlogTeaser'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { Contact } from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <PestMarquee />
      <Certifications />
      <Services />
      <PestGrid />
      <Process />
      <About />
      <Guarantee />
      <WhyChooseUs />
      <GoogleReviews />
      <Locations />
      <Faq />
      <BlogTeaser />
      <CtaBanner />
      <Contact />
    </>
  )
}

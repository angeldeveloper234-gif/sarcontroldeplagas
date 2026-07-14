import { Hero } from '@/components/sections/Hero'
import { Certifications } from '@/components/sections/Certifications'
import { Services } from '@/components/sections/Services'
import { PestGrid } from '@/components/sections/PestGrid'
import { Process } from '@/components/sections/Process'
import { About } from '@/components/sections/About'
import { GoogleReviews } from '@/components/sections/GoogleReviews'
import { Faq } from '@/components/sections/Faq'
import { BlogTeaser } from '@/components/sections/BlogTeaser'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { Contact } from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <Certifications />
      <Services />
      <PestGrid />
      <Process />
      <About />
      <GoogleReviews />
      <Faq />
      <BlogTeaser />
      <CtaBanner />
      <Contact />
    </>
  )
}

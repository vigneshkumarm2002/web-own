import { CallToAction } from '@/components/CallToAction'
import { FAQ } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Services } from '@/components/Services'
import { Works } from '@/components/Works'
import { Testimonials } from '@/components/Testimonials'
import { Contact } from '@/components/Contact'

export default function Home() {
  return (
    <>
      <Hero />

      <About />
      <Services />

      <Works />
      <Testimonials />
      <CallToAction />

      <FAQ />
      <Contact />
      <Footer />
    </>
  )
}

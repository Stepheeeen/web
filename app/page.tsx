'use client'

import { useState } from 'react'
import Header from '@/components/header'
import Hero from '@/components/hero'
import Services from '@/components/services'
import About from '@/components/about'
import Products from '@/components/products'
import Team from '@/components/team'
import WhyDifferent from '@/components/why-different'
import Timeline from '@/components/timeline'
import CTA from '@/components/cta'
import Footer from '@/components/footer'
import Marquee from '@/components/marquee'
import ContactModal from '@/components/contact-modal'

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false)

  const openContact = () => setIsContactOpen(true)

  return (
    <main className="min-h-screen bg-background">
      <Header onContactClick={openContact} />
      <Hero onContactClick={openContact} />
      <Services onContactClick={openContact} />
      <About onContactClick={openContact} />
      <Products />
      <Team />
      <WhyDifferent />
      <Marquee />
      <Timeline />
      {/* <Testimonials /> */}
      <CTA onContactClick={openContact} />
      <Footer />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </main>
  )
}

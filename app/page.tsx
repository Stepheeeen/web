'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Header from '@/components/header'
import Hero from '@/components/hero'
import Services from '@/components/services'
import Products from '@/components/products'
import Team from '@/components/team'
import WhyDifferent from '@/components/why-different'
import Timeline from '@/components/timeline'
import Testimonials from '@/components/testimonials'
import CTA from '@/components/cta'
import Footer from '@/components/footer'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <Products />
      <Team />
      <WhyDifferent />
      <Timeline />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}

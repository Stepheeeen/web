'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import LogoFullLight from '@/public/assets/logo/logo-full-light.png'
import Logo from '@/public/assets/logo/logo-short.png'

export default function Marquee() {
  const logos = [
    { id: 1, src: LogoFullLight, name: 'Logo Full Light' },
    { id: 2, src: LogoFullLight, name: 'Logo Short' },
    { id: 3, src: LogoFullLight, name: 'Logo Full Dark' },
    { id: 4, src: LogoFullLight, name: 'Logo Short' },
    { id: 5, src: LogoFullLight, name: 'Logo Full Dark' },
    { id: 6, src: LogoFullLight, name: 'Logo Short' },


  ]

  return (
    <section className="relative py-12 overflow-hidden" style={{ background: 'linear-gradient(90deg, #DA9646 0%, #FFC078 51%, #B07430 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
        <motion.div
          className="flex gap-8 md:gap-12"
          animate={{ x: [0, -2400] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
            repeatType: 'loop',
          }}
        >
          {[...Array(3)].map((_, setIndex) => (
            <div key={setIndex} className="flex gap-4 md:gap-12 flex-shrink-0">
              {logos.map((logo) => (
                <div key={`${setIndex}-${logo.id}`} className="flex-shrink-0">
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    className="h-24 object-contain opacity-60 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
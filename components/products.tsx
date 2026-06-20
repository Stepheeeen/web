import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ExternalLink } from 'lucide-react'

const products = [
  {
    name: 'Parcel',
    tagline: 'Logistics Redefined',
    description: 'A robust delivery and logistics platform for managing orders, deliveries, and real-time tracking. Built for scale with real-time updates and seamless communication.',
    features: ['Next.js', 'TypeScript', 'Socket.io', 'Tailwind CSS'],
    impact: 'Real-time logistics management\nSeamless order tracking',
    image: '/assets/suite-preview.png'
  },
  {
    name: 'Super Awoof',
    tagline: 'Pet Community & Rewards',
    description: 'A cross-platform mobile and web application for pet services and community engagement. Built with Expo and React Native for a seamless user experience.',
    features: ['Expo', 'React Native', 'TypeScript', 'Paystack'],
    impact: 'Cross-platform pet services\nSeamless community engagement',
    url: 'https://superawoof.ng',
    image: '/assets/super-awoof-preview.png'
  },
  {
    name: 'iBitees Ventures',
    tagline: 'Investment Simplified',
    description: 'A comprehensive investment and venture platform designed for streamlined business venture management and unified investment tracking.',
    features: ['HTML', 'CSS', 'JavaScript'],
    impact: 'Unified investment portal\nStreamlined venture management',
    url: 'https://ibiteesventures.com',
    image: '/assets/nexus-preview.png'
  }
]

export default function Products() {
  return (
    <section id="products" className="py-20 md:py-32 bg-[#FFF8E4] dark:bg-[#080E1D]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-semibold text-[#1B1C1B] dark:text-white mb-4 text-center">
          Products We've Helped Bring To Life
        </h2>
        <p className="text-[#777777] dark:text-[#FFDB6E] text-center mb-16 text-md">
          Real products. Real outcomes. Built with flair.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="group overflow-hidden border-border dark:border-[#C6A87C] hover:shadow-xl transition-all duration-300 bg-[#0E1628]">
              {/* Product preview image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={product.image}
                  alt={`${product.name} preview`}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E1628] via-[#0E1628]/10 to-transparent" />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
                <p className="text-[#9CA3AF] mb-6 text-[14px]">{product.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <Badge key={idx} variant="secondary" className="text-[#E5D4B3] hover:bg-[#0A0042]/90 dark:hover:bg-[#FFFF] bg-[#0A0042] text-[12px] border border-[#3A3A3A] dark:text-[#080E1D] dark:bg-[#ffff] font-medium">
                      {feature}
                    </Badge>
                  ))}
                </div>

                <div className="border-t border-[#1F2937] pt-4">
                  <h1 className="text-[#8C7350] text-[12px] font-bold">Impact</h1>
                  <p className="text-white text-[16px] mt-1 font-medium">{product.impact}</p>
                </div>

                {product.url && (
                  <a
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 flex items-center gap-2 w-full justify-center rounded-md border border-[#C6A87C]/50 bg-[#C6A87C]/10 hover:bg-[#C6A87C]/20 text-[#C6A87C] hover:text-[#E5D4B3] text-[13px] font-semibold py-2.5 px-4 transition-all duration-200 group"
                  >
                    <ExternalLink className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    View Live Project
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

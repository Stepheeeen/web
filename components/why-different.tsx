import React from 'react'
import { Card } from '@/components/ui/card'
import { Settings, Gauge, Zap, ArrowRight } from 'lucide-react'

type CardItem = {
  id: string
  icon: React.ComponentType<any>
  title: string
  desc: string
  button: string
}

export default function WhyDifferent() {
  const cards: CardItem[] = [
    {
      id: 'product',
      icon: Settings,
      title: 'Product-First Execution',
      desc: 'We design and build digital products focused on real users, real problems, and long-term value.',
      button: 'Learn More'
    },
    {
      id: 'speed',
      icon: Gauge,
      title: 'Speed & Reliability',
      desc: 'Ship fast without sacrificing reliability — optimized workflows and proven engineering practices.',
      button: 'See How'
    },
    {
      id: 'scalability',
      icon: Zap,
      title: 'Scalable Architecture',
      desc: 'Architectures that grow with your business, designed for performance and maintainability.',
      button: 'Explore'
    },
    {
      id: 'quality',
      icon: Settings,
      title: 'Quality & Craft',
      desc: 'High standards in UX, code quality, and testing to deliver resilient products.',
      button: 'Read More'
    }
  ]

  return (
    <section className="relative py-20 md:py-32 bg-background dark:bg-[#000000]">
      {/* bottom radial for dark mode */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-60 dark:block hidden bg-[radial-gradient(ellipse_at_bottom,_#FFC07833_0%,_transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="hidden md:inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full border border-border bg-secondary/50">
            <div className="w-2 h-2 bg-yellow-500 rounded-full" />
            <span className="text-xs font-bold text-foreground uppercase">Why Flair</span>
          </div>
          <div className="w-full flex flex-col md:flex-row md:justify-between items-center md:items-stretch">
            <h2 className="text-3xl md:text-5xl font-semibold text-foreground mb-4 md:w-1/2 text-center md:text-left text-balance">
              Why Flair Technologies Is Built Different
            </h2>
            <p className="text-muted-foreground text-sm max-w-xs dark:text-[#DA9646] text-center md:text-left text-balance">
              Redefining the standard for digital product execution with a focus on speed, quality, and scalability.
            </p>
          </div>
        </div>

        {/* 2x2 Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {cards.map((card) => {
            const Icon = card.icon
            return (
              <Card
                key={card.id}
                className="group relative p-8 border border-border bg-card dark:bg-[#000000] rounded-2xl overflow-hidden min-h-[290px] hover:rotate-[1.88deg] transform transition-transform duration-300"
              >
                {/* Default content (visible when not hovered) */}
                <div className="transition-opacity duration-300 group-hover:opacity-0">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-[#FFFFFF1A] rounded-2xl">
                      <Icon className="w-6 h-6 text-foreground" />
                    </div>
                  </div>
                  <h3 className="text-xl font-medium text-foreground mb-3">{card.title}</h3>
                  <p className="text-muted-foreground text-sm mb-6">{card.desc}</p>
                </div>

                {/* Hover overlay (hidden until hover) */}
                <div
                  className="absolute inset-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between pointer-events-none group-hover:pointer-events-auto"
                  style={{
                    // radial gradient for dark mode: 64% -> #0D0033, 98% -> #110B23
                    background:
                      'radial-gradient(circle at 10% 10%, #0D0033 64%, #110B23 98%)'
                  }}
                >
                  <div>
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-3 rounded-2xl border-[1.14px] border-[#FFFFFF1A] inset-1" style={{ background: '#FFFFFF1A' }}>
                        <Icon className="w-6 h-6" style={{ color: '#DA9646' }} />
                      </div>
                    </div>
                    <h3 className="text-xl font-medium text-white mb-3">{card.title}</h3>
                    <p className="text-sm" style={{ color: '#DA9646' }}>{card.desc}</p>
                  </div>

                  <button className="w-full px-6 py-3 mt-4 bg-white text-[#0F172A] font-bold rounded-full hover:bg-gray-100 transition flex items-center justify-center gap-2">
                    {card.button}
                    <ArrowRight className="w-4 h-4 text-[#94A3B8]" />
                  </button>
                </div>
              </Card>
            )
          })}
        </div>
      <div className='w-full py-3 border-t-[1.14px] border-[#FFFFFF]/20 mt-24 flex items-center justify-center gap-8'>
        <p className="text-sm text-[#C6A87C] text-balance text-center">Venture Ready</p>
        <p className="text-sm text-[#C6A87C] text-balance text-center">Enterprise Security</p>
        <p className="text-sm text-[#C6A87C] text-balance text-center">Clean Architecture</p>
      </div>
      </div>

    </section>
  )
}

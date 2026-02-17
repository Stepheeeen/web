import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight } from 'lucide-react'

const products = [
  {
    name: 'Portal',
    tagline: 'Unified Platform',
    description: 'Enterprise-grade solution for managing operations. Streamlined workflow with advanced analytics and reporting capabilities.',
    features: ['React', 'Node.js', 'PostgreSQL'],
    impact: '40% increase in efficiency\nStreamlined operations'
  },
  {
    name: 'Suite',
    tagline: 'Complete Solution',
    description: 'All-in-one platform for digital transformation. Integrate all your business processes in a single, intuitive interface.',
    features: ['Next.js', 'GraphQL', 'MongoDB'],
    impact: '3x faster deployment\nReduced time to market'
  },
  {
    name: 'Nexus',
    tagline: 'Connected Ecosystem',
    description: 'Next-generation connectivity platform. Seamlessly connect all your systems and data sources for unified intelligence.',
    features: ['TypeScript', 'Redis', 'AWS'],
    impact: '99.9% uptime\nEnterprise-grade reliability'
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
            <Card key={index} className="overflow-hidden border-border dark:border-[#C6A87C] hover:shadow-xl transition-all duration-300 bg-[#0E1628]">
              {/* Dark header section */}
              <div
                className="h-40 bg-gradient-to-br from-foreground/90 to-foreground/75 border-t border-l border-r border-b-[3px]"
                style={{
                  borderImage: 'linear-gradient(to right, rgba(198, 168, 124, 1) 0%, rgba(198, 168, 124, 0) 100%) 0 0 1 0'
                }}
              />

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
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight } from 'lucide-react'

const products = [
  {
    name: 'Portal',
    tagline: 'Unified Platform',
    description: 'Enterprise-grade solution for managing operations. Streamlined workflow with advanced analytics and reporting capabilities.',
    features: ['Real-time Analytics', 'Team Collaboration', 'Custom Workflows']
  },
  {
    name: 'Suite',
    tagline: 'Complete Solution',
    description: 'All-in-one platform for digital transformation. Integrate all your business processes in a single, intuitive interface.',
    features: ['Integrated Tools', 'API Access', 'Advanced Security']
  },
  {
    name: 'Nexus',
    tagline: 'Connected Ecosystem',
    description: 'Next-generation connectivity platform. Seamlessly connect all your systems and data sources for unified intelligence.',
    features: ['Real-time Sync', 'Data Integration', 'Automation']
  }
]

export default function Products() {
  return (
    <section id="products" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16">
          Products We've Helped Bring To Life
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="overflow-hidden border-border hover:shadow-xl transition-all duration-300 bg-gradient-to-b from-foreground/5 to-card">
              {/* Dark header section */}
              <div className="h-40 bg-gradient-to-br from-foreground/90 to-foreground/75" />

              <div className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">{product.name}</h3>
                <p className="text-primary font-semibold text-sm mb-4">{product.tagline}</p>
                <p className="text-muted-foreground mb-6">{product.description}</p>

                <div className="space-y-3 mb-6">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <a href="#" className="text-primary hover:text-primary/80 font-semibold text-sm inline-flex items-center gap-2 group">
                  Explore <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Card } from '@/components/ui/card'
import { Code2, Palette, Database, Zap, Users, BarChart3 } from 'lucide-react'

const services = [
  {
    icon: Code2,
    title: 'Custom Development',
    description: 'Tailored solutions built with cutting-edge technology stack and best practices.'
  },
  {
    icon: Palette,
    title: 'UI/UX & Branding',
    description: 'Beautiful interfaces and strategic branding that resonate with your audience.'
  },
  {
    icon: Database,
    title: 'Data Management',
    description: 'Robust database architecture and data solutions for enterprise scale.'
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Lightning-fast applications with optimized performance and efficiency.'
  },
  {
    icon: Users,
    title: 'Team Augmentation',
    description: 'Extend your team with experienced developers and design professionals.'
  },
  {
    icon: BarChart3,
    title: 'Analytics & Insights',
    description: 'Data-driven decisions with comprehensive analytics and reporting.'
  }
]

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Our Services</h2>
          <div className="hidden md:block px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-semibold">
            Services
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="p-8 border-border hover:shadow-lg transition-shadow bg-card">
                <Icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <a href="#" className="text-primary hover:text-primary/80 font-semibold text-sm inline-flex items-center gap-2">
                  Learn more <span>→</span>
                </a>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

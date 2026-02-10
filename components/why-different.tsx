import { Card } from '@/components/ui/card'
import { Lightbulb, Rocket, Users, Zap } from 'lucide-react'

export default function WhyDifferent() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Features */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Why Flair Technologies Is Built Different
            </h2>

            <div className="space-y-6">
              <Card className="p-6 border-border bg-card hover:shadow-lg transition-shadow">
                <div className="flex gap-4">
                  <Lightbulb className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Innovation First</h3>
                    <p className="text-muted-foreground">We stay at the forefront of technology, continuously exploring new possibilities.</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-border bg-card hover:shadow-lg transition-shadow">
                <div className="flex gap-4">
                  <Rocket className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Built To Scale</h3>
                    <p className="text-muted-foreground">Our solutions grow with your business, handling everything from startups to enterprises.</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-border bg-card hover:shadow-lg transition-shadow">
                <div className="flex gap-4">
                  <Users className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-foreground mb-2">People Obsessed</h3>
                    <p className="text-muted-foreground">We design for humans, focusing on usability and delightful experiences.</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Right Column - Feature Box */}
          <div>
            <Card className="p-8 border-border bg-gradient-to-br from-foreground/5 to-card sticky top-24 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full -mr-20 -mt-20" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <Zap className="w-6 h-6 text-primary" />
                  <h3 className="font-bold text-foreground">Proven Advantage</h3>
                </div>
                
                <h4 className="text-2xl md:text-3xl font-bold text-foreground mb-6 leading-tight">
                  Integrated Solutions That Work
                </h4>

                <p className="text-muted-foreground mb-6">
                  Our unique approach combines strategic thinking, creative design, and technical excellence to deliver solutions that exceed expectations.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-foreground font-semibold">Expert team with proven track record</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-foreground font-semibold">Cutting-edge technology stack</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-foreground font-semibold">Agile methodology and quick delivery</span>
                  </div>
                </div>

                <button className="w-full px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition">
                  Schedule Consultation
                </button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

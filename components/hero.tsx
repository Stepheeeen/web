import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-secondary/30 to-background overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance leading-tight">
            Build With <span className="text-primary">Flair.</span>
            <br />
            Scale With <span className="text-primary">Confidence.</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 text-balance">
            We Design and Engineer Production-Ready Digital Products and Scalable Systems for Enterprise-Class Operations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg">
              Get Started
            </Button>
            <Button variant="outline" className="px-8 py-6 text-lg border-border text-foreground hover:bg-secondary bg-transparent">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

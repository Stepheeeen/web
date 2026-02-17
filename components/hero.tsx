import { GradientButton } from '@/components/gradient-button'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="h-[100%] py-28 md:py-0 md:h-screen grid place-items-center relative overflow-hidden">
      {/* Background image (light/dark) */}
      <div className="absolute inset-0 bg-[url('/assets/hero-light.png')] dark:bg-[url('/assets/hero-dark.png')] bg-cover bg-center" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-[36px] md:text-6xl font-normal mb-6 text-balance leading-tight text-transparent bg-clip-text bg-[linear-gradient(90deg,#DA9646_0%,#FFB96B_51%,#B07430_100%)]">
            Build With <span>Flair.</span>
            <br />
            Scale With <span>Confidence.</span>
          </h1>

          <p className="text-md md:text-lg text-black dark:text-white mb-8 text-balance">
            We design and engineer production-ready digital products and systems for founders and growing teams.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GradientButton className="px-8 py-6 text-lg dark:text-black rounded-full md:rounded">
              Get Started
            </GradientButton>
            <Button
              variant="outline"
              className="px-8 py-6 text-lg border-border text-foreground hover:bg-black/90 bg-transparent dark:border-transparent dark:bg-white dark:text-black dark:hover:bg-white/90 rounded-full md:rounded"
            >
              See how we work
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

import { Button } from '@/components/ui/button'

export default function CTA() {
  return (
    <section className="py-20 md:py-32 bg-foreground text-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance leading-tight">
          Ready To Automate Your Processes
          <br />
          Next Step With Us!
        </h2>

        <p className="text-lg text-background/80 mb-8 max-w-2xl mx-auto">
          Let's work together to transform your vision into reality. Contact us today to discuss your project.
        </p>

        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg">
          Get Started Today
        </Button>
      </div>
    </section>
  )
}

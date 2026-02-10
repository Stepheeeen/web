import { Card } from '@/components/ui/card'

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We deeply understand your business, goals, and challenges through collaborative workshops and research.'
  },
  {
    number: '02',
    title: 'Planning',
    description: 'Strategic roadmap creation with clear milestones, timelines, and deliverables aligned to your objectives.'
  },
  {
    number: '03',
    title: 'Execution',
    description: 'Agile development with regular updates, transparency, and adaptive methodology for optimal results.'
  },
  {
    number: '04',
    title: 'Launch',
    description: 'Seamless deployment with ongoing support, monitoring, and continuous optimization post-launch.'
  }
]

export default function Timeline() {
  return (
    <section className="py-20 md:py-32 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Our Process</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A strategic approach to delivering exceptional results on every project
          </p>
        </div>

        {/* Logo divider */}
        <div className="flex items-center justify-center mb-16">
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-border max-w-[100px]" />
            <span className="text-primary font-bold text-xl">Flair Technologies</span>
            <div className="h-px flex-1 bg-border max-w-[100px]" />
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="p-8 border-border bg-card hover:shadow-lg transition-shadow relative"
            >
              <div className="mb-6">
                <span className="text-5xl font-bold text-primary/20">{step.number}</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>

              {/* Connector line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border -translate-y-1/2" />
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Card } from '@/components/ui/card'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Alexandra Mitchell',
    role: 'CEO, TechVentures Inc',
    content: 'Flair transformed our entire digital infrastructure. Their team\'s expertise and dedication exceeded our expectations.',
    avatar: 'AM',
    rating: 5
  },
  {
    name: 'James Rodriguez',
    role: 'Product Manager, DataFlow Systems',
    content: 'Working with Flair was a game-changer. They delivered our project on time and with exceptional quality.',
    avatar: 'JR',
    rating: 5
  },
  {
    name: 'Priya Kapoor',
    role: 'Founder, Innovation Labs',
    content: 'The team\'s innovative approach and technical excellence helped us scale faster than we imagined possible.',
    avatar: 'PK',
    rating: 5
  }
]

export default function Testimonials() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16 text-center">
          What Our Clients Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 border-border bg-card hover:shadow-lg transition-shadow">
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array(testimonial.rating).fill(0).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground mb-6 text-lg leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Card } from '@/components/ui/card'
import { Code2, Palette, Database, Zap, Users, BarChart3, ArrowRight, ChevronRight, Globe, BadgeCheck, Megaphone, Terminal, Puzzle, BriefcaseBusiness } from 'lucide-react'
import { Button } from './ui/button'

const services = [
  {
    icon: Globe,
    title: 'Web & Mobile Application Development',
    description: 'Full-stack design and development of responsive websites and mobile apps tailored to business goals — including portfolio sites, ecommerce platforms, and custom web portals.'
  },
  {
    icon: BadgeCheck,
    title: 'UI/UX Design & Branding Solutions',
    description: 'Professional user interface (UI) and user experience (UX) design services, combined with visual branding — logos, style guides, graphics, and digital identity systems that boost engagement.'
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing & Social Media Management',
    description: 'Strategy and execution of social campaigns, content calendars, audience growth tactics, paid social advertising, and analytics reporting to scale online visibility and conversions.'
  },
  {
    icon: Terminal,
    title: 'Software Integration & Automation',
    description: 'Building and integrating business tools (APIs, CRM/ERP connectors) to streamline workflows, automate repetitive tasks, and improve operational efficiency.'
  },
  {
    icon: Puzzle,
    title: 'IT Support & Managed Services',
    description: 'Reliable technical support services — system maintenance, troubleshooting, cloud setup, data backups, security monitoring, and remote support for small and medium businesses.'
  },
  {
    icon: BriefcaseBusiness,
    title: 'Ecommerce Solutions & Payment Integration',
    description: 'Development of online stores with secure payment gateways, inventory management, checkout optimization, and customer tracking to enhance online sales performance.'
  }
]

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-[#FFF8F1] dark:bg-[#080E1D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center md:justify-between mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-semibold text-foreground text-center md:text-left">Our Services</h2>

            <p className='md:w-[70%] mt-2 text-[#86847E] text-sm text-center md:text-left'>
              Unleashing Comprehensive Digital Marketing Services Tailored to Elevate Your
              Online Presence and Boost Your Success.
            </p>
          </div>
          <div className="hidden md:block">
            <Button className="bg-[#FFC078] hover:bg-[#FFB96B] rounded-full text-black text-sm">
              Get Started
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="
                p-8
                border border-border
                bg-white dark:bg-transparent
                transition-all duration-300
                hover:shadow-lg
                dark:hover:bg-white
                dark:hover:text-black
                group
              "
              >
                <Icon className="w-8 h-8 text-black dark:text-white dark:group-hover:text-black mb-4" />

                <h3 className="text-xl font-medium text-foreground dark:group-hover:text-black mb-3">
                  {service.title}
                </h3>

                <p className="text-muted-foreground dark:group-hover:text-black/80 mb-4 text-sm">
                  {service.description}
                </p>

                <a
                  href="#"
                  className="
                  font-semibold
                  text-sm
                  inline-flex
                  items-center
                  gap-2
                  text-black dark:text-white
                  dark:group-hover:text-black
                "
                >
                  Learn more <ChevronRight size={16} />
                </a>
              </Card>

            )
          })}
        </div>
      </div>
    </section>
  )
}

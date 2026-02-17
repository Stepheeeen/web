import { Card } from '@/components/ui/card'

const steps = [
  {
    number: '01',
    title: 'Contact Us',
    description:
      "You can send us an email or fill out the form below. We'll get back to you as soon as possible.",
  },
  {
    number: '02',
    title: 'Conversation',
    description:
      'Iterative approaches in corporate strategy encourages people to work together and think collaboratively.',
  },
  {
    number: '03',
    title: 'Contract',
    description:
      'A well-drafted contract with clearly defined rights and obligations of each party will be drawn.',
  },
  {
    number: '04',
    title: 'Work!',
    description:
      'After all has been done and properly documented, we proceed to the actual business.',
  },
]

export default function Timeline() {
  return (
    <section
      className="py-24 bg-white dark:bg-gradient-to-b dark:from-[#080E1D] dark:to-[#0D0033]"
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-12">
          <div className="flex items-center">
            <div
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full border"
              // light pill / dark pill
              // light: cream bg with dark text, dark: semi-opaque cream on dark with lighter text
              style={{}}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#A08B1A]" />
              <span className="text-sm font-semibold text-[#6B5A00] dark:text-[#EDE5C8]">
                OUR PROCESS
              </span>
              <style jsx>{`
                div[role='pill'] { /* noop */ }
              `}</style>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:gap-8">
          {steps.map((step, index) => {
            const isCream = index % 2 === 0

            const cardClasses = [
              'p-12 py-14 md:py-12 rounded-3xl relative overflow-hidden border -mt-8 md:mt-0',
              // light mode background alternation
              isCream
                ? 'bg-[#FBF6EA] border-transparent text-[#0f1724]'
                : 'bg-white border-[#111827] text-[#0f1724]',
              // dark mode: unified dark card with subtle border/shadow
              'dark:border-white/10 dark:bg-[linear-gradient(to_right,#0D0033_0%,#080E1D_100%)]',
            ]
              .filter(Boolean)
              .join(' ')

            return (
              <Card
                key={step.number}
                className={cardClasses}
                style={{
                  // dark mode card background via tailwind classes above; add inset shadow for dark
                  boxShadow:
                    'inset 0 1px 0 rgba(255,255,255,0.02), 0 10px 30px rgba(3,6,23,0.06)',
                }}
              >
                {/* decorative radial glow only in dark */}
                <div
                  className="hidden dark:block absolute -left-16 -top-8 w-72 h-72 rounded-full pointer-events-none"
                />

                <div className="mb-6 relative z-10">
                  <span
                    className={
                      'block text-[140px] leading-none font-extrabold transform -rotate-6'
                    }
                    // Tailwind classes: in light show deep blue, in dark show gold gradient applied to text
                    // bg-clip-text + text-transparent used for gradient text in dark
                  >
                    <span
                      className={
                        'block text-[140px] leading-none font-extrabold transform rotate-12 ' +
                        'text-[#03384a] timeline-number-gradient'
                      }
                      style={{ lineHeight: 0.9 }}
                    >
                      {step.number}
                    </span>
                  </span>
                </div>

                <style jsx global>{`
                  .dark .timeline-number-gradient {
                    background-image: linear-gradient(to right, #DA9646 0%, #FFC078 51%, #B07430 100%);
                    -webkit-background-clip: text;
                    background-clip: text;
                    color: transparent;
                  }
                `}</style>

                <div className="absolute right-8 top-1/2 -translate-y-1/2 text-sm text-slate-700 dark:text-white/70 z-10">
                  <span className="inline-block">»</span>
                </div>

                <h3 className="text-2xl font-extrabold mt-6 mb-3 text-[#0f1724] dark:text-white z-10">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 z-10">
                  {step.description}
                </p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

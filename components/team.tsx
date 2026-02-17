'use client'

import { Card } from '@/components/ui/card'
import { Linkedin, Twitter } from 'lucide-react'

const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'Head of Product',
    bio: 'Strategic visionary with 10+ years in product leadership',
    bgColor: 'from-emerald-400 to-emerald-600'
  },
  {
    name: 'Marcus Chen',
    role: 'Engineering Lead',
    bio: 'Full-stack expert with passion for scalable architecture',
    bgColor: 'from-blue-400 to-blue-600'
  },
  {
    name: 'Emma Rodriguez',
    role: 'Design Director',
    bio: 'Creative innovator transforming ideas into beautiful products',
    bgColor: 'from-yellow-400 to-yellow-600'
  },
  {
    name: 'James Wilson',
    role: 'Technical Architect',
    bio: 'Enterprise solutions specialist with deep domain expertise',
    bgColor: 'from-purple-400 to-purple-600'
  },
  {
    name: 'Lisa Park',
    role: 'Senior Developer',
    bio: 'Performance-obsessed engineer building robust systems',
    bgColor: 'from-pink-400 to-pink-600'
  },
  {
    name: 'David Kumar',
    role: 'UX Researcher',
    bio: 'User-centered thinker creating intuitive experiences',
    bgColor: 'from-orange-400 to-orange-600'
  }
]

export default function Team() {
  return (
    <section id="team" className="py-20 md:py-32 bg-secondary/50 dark:bg-[#080E1D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-semibold text-foreground text-center mb-4">Meet Our Team</h2>
        <p className="text-[#777777] dark:text-[#FFDB6E] text-center mx-auto md:w-1/2 mb-16 text-balance">A diverse team of engineers, designers, and strategists committed to building exceptional digital products.</p>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="overflow-hidden border-border hover:shadow-lg transition-shadow bg-card dark:bg-[#0D0033] dark:border-none">
              {/* Avatar placeholder */}
              <div className={`h-60 bg-gradient-to-br ${member.bgColor}`}
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-1">{member.name}</h3>
                <p className="text-[#FFC078] font-normal text-sm my-2">{member.role}</p>
                <p className="text-muted-foreground text-sm mb-4 w-1/2">{member.bio}</p>

                <div className="flex gap-3">
                  <a href="#" className="text-muted-foreground hover:text-primary transition">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition">
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

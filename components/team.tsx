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
    <section id="team" className="py-20 md:py-32 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16">Meet Our Team</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="overflow-hidden border-border hover:shadow-lg transition-shadow bg-card">
              {/* Avatar placeholder */}
              <div className={`h-48 bg-gradient-to-br ${member.bgColor}`} />

              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-primary font-semibold text-sm mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>

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

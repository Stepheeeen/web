"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Linkedin, Twitter } from "lucide-react";

type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image: string;
  imageClassName?: string;
};

const teamMembers: TeamMember[] = [
  {
    name: "Isaac Bright",
    role: "Chief Executive Officer (CEO)",
    bio: "Guiding strategic vision and company direction, fostering innovation, and leading teams to deliver impactful technology solutions.",
    image: "/team/ceo.jpeg",
  },
  {
    name: "Stephen Onucheyo",
    role: "Chief Technical Officer (CTO)",
    bio: "Architecting robust systems, overseeing technical direction, and ensuring the adoption of cutting-edge engineering practices.",
    image: "/team/cto.jpeg",
  },
  {
    name: "Ogwu Praise Ajifa",
    role: "Chief Operating Officer (COO)",
    bio: "Streamlining daily operations, optimizing business processes, and executing strategies to fuel organizational efficiency and growth.",
    image: "/team/coo.jpeg",
  },
  {
    name: "Yanmife Emmanuel",
    role: "Human Resource Manager",
    bio: "Championing company culture, acquiring top-tier talent, and driving initiatives to ensure employee well-being and success.",
    image: "/team/hr.jpeg",
  },
  {
    name: "David C. Anozie",
    role: "Software Engineer",
    bio: "Developing scalable applications, writing clean, maintainable code, and solving complex technical challenges.",
    image: "/team/swe.png",
  },
  {
    name: "John Adewumi",
    role: "Graphics & UI/UX Designer",
    bio: "Crafting beautiful, intuitive user interfaces and designing seamless digital experiences that resonate with users.",
    image: "/team/ui_ux.jpeg",
  },
  {
    name: "Grace Gabriel",
    role: "Sales Manager",
    bio: "Leading sales initiatives, cultivating lasting client relationships, and driving revenue growth through strategic expansion.",
    image: "/team/gabriel_grace.jpeg",
  },
  {
    name: "Marvelous Odokina",
    role: "Social Media Manager",
    bio: "Curating engaging content, building strong brand presence, and fostering vibrant communities across digital platforms.",
    image: "/team/marvelous.png",
  },
  {
    name: "Aroniyo Favour",
    role: "Financial Secretary",
    bio: "Managing financial records, ensuring fiscal transparency, and providing critical insights to support sustainable growth.",
    image: "/team/financial_sec.jpeg",
  },
];

type TeamProps = {
  imageClassName?: string;
};

export default function Team({
  imageClassName = "aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5]",
}: TeamProps = {}) {
  return (
    <section
      id="team"
      className="py-20 md:py-32 bg-secondary/50 dark:bg-[#080E1D]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-semibold text-foreground text-center mb-4">
          Meet Our Team
        </h2>
        <p className="text-[#777777] dark:text-[#FFDB6E] text-center mx-auto md:w-1/2 mb-16 text-balance">
          A diverse team of engineers, designers, and strategists committed to
          building exceptional digital products.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => {
            const memberImageClassName =
              member.imageClassName ?? imageClassName;

            return (
              <Card
                key={index}
                className="overflow-hidden border-border hover:shadow-lg transition-shadow bg-card dark:bg-[#0D0033] dark:border-none"
              >
                <div
                  className={`relative w-full ${memberImageClassName} overflow-hidden bg-muted`}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover object-top transition-transform duration-300 hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[#FFC078] font-normal text-sm my-2">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-sm mb-4 w-1/2">
                    {member.bio}
                  </p>

                  <div className="flex gap-3">
                    {/*<a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>*/}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

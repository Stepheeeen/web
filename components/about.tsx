import React from "react";
import { Card } from "@/components/ui/card";
import { Compass, Sparkles, ShieldCheck, Cpu } from "lucide-react";

interface AboutProps {
  onContactClick?: () => void;
}

export default function About({ onContactClick }: AboutProps) {
  const highlights = [
    {
      icon: Compass,
      title: "Our Mission",
      description:
        "To empower brands and businesses by crafting custom, high-performance web and mobile platforms designed for real-world impact.",
    },
    {
      icon: Sparkles,
      title: "Product-First Craftsmanship",
      description:
        "We focus on clean UI/UX and rich user interactions, transforming complex technical constraints into beautiful, seamless software.",
    },
    {
      icon: ShieldCheck,
      title: "Enterprise Reliability",
      description:
        "From day-one security compliance to scalable API architectures, we implement engineering practices that scale alongside your growth.",
    },
    {
      icon: Cpu,
      title: "Modern Tech Ecosystems",
      description:
        "Using cutting-edge stacks like Next.js, React Native, Expo, and robust automation APIs to deliver speed, efficiency, and future-proof code.",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 md:py-32 bg-[#FFF8F1] dark:bg-[#0A0033] relative overflow-hidden transition-colors duration-500"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-[#FFC078]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gradient-to-tr from-[#C6A87C]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Centered 'About Us' Badge */}
        <div className="flex justify-center mb-12 pb-10">
          {/*<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-white/50 dark:bg-white/5 dark:border-[#C6A87C]/30">
            <span className="w-2 h-2 bg-[#FFC078] rounded-full animate-pulse" />
            <span className="text-xs font-semibold text-foreground dark:text-[#FFDB6E] uppercase tracking-wider">About Us</span>
          </div>*/}{" "}
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground">
            About Us
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-4xl md:text-5xl font-semibold text-foreground dark:text-white leading-tight">
              We Craft Digital Excellence With Flair
            </h2>

            <p className="text-[#86847E] dark:text-gray-300 text-base leading-relaxed">
              Flair Technologies is a forward-thinking software development and
              digital strategy agency. We specialize in building fast, scalable,
              and premium digital products that help ventures grow from MVP to
              enterprise scale.
            </p>

            <p className="text-[#86847E] dark:text-gray-400 text-sm leading-relaxed">
              Combining world-class engineering, strategic product-first
              execution, and intuitive user experiences, we align technology
              with real business outcomes. Whether you need a robust logistics
              portal, community platforms, or customized IT integrations, we
              bring your vision to life.
            </p>
          </div>

          {/* Highlight Cards Grid */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={index}
                  className="p-6 bg-white dark:bg-black/40 border border-border dark:border-[#C6A87C]/20 hover:border-[#FFC078] dark:hover:border-[#FFC078] transition-all duration-300 rounded-2xl group hover:shadow-xl"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#FFF8F1] dark:bg-[#FFC078]/10 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="w-6 h-6 text-[#C6A87C] dark:text-[#FFC078]" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#86847E] dark:text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

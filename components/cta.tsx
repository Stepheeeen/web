"use client";

import React, { useRef } from "react";

export default function CTA() {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section className="w-full px-6 md:px-12 py-24 bg-[#e7dfcc] dark:bg-black transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          className="relative overflow-hidden rounded-[40px] bg-[#1c1c1c] px-8 md:px-20 py-24 text-center group"
        >
          {/* Concentric Ring Overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-40">
            <div
              className="absolute inset-0"
              style={{
                background: `
                  radial-gradient(circle at 50% 30%, 
                    rgba(255,255,255,0.06) 0px,
                    rgba(255,255,255,0.04) 1px,
                    transparent 2px
                  ),
                  radial-gradient(circle at 50% 30%, 
                    transparent 0px,
                    transparent 180px,
                    rgba(255,255,255,0.04) 181px,
                    transparent 182px
                  ),
                  radial-gradient(circle at 50% 30%, 
                    transparent 0px,
                    transparent 350px,
                    rgba(255,255,255,0.03) 351px,
                    transparent 352px
                  )
                `,
              }}
            />
          </div>

          {/* Mouse Reactive Glow */}
          <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(224,162,78,0.35), transparent 40%)",
              }}
            />
          </div>

          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-semibold text-white leading-tight">
              Ready To Automate Your Processes <br />
              Next Step With Us!
            </h2>

            <p className="mt-6 text-gray-400 max-w-3xl mx-auto text-xs">
              Unleashing Comprehensive Digital Marketing Services Tailored to Elevate Your Online Presence and Boost Your Success.
            </p>

            <div className="mt-12 relative inline-block">
              <button className="bg-[#e0a24e] hover:opacity-90 transition px-8 py-3 rounded-full font-medium text-black shadow-lg">
                Get Started
              </button>

              <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-xs text-gray-400 italic">
                Let’s start your journey here!
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

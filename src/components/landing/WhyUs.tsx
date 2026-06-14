"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PILLARS } from "@/data";

gsap.registerPlugin(ScrollTrigger);

export default function WhyUs() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".pillar-row",
        { opacity: 0, x: 20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="why-us"
      ref={containerRef}
      className="relative w-full lg:h-screen bg-[#080a13] text-white border-t border-white/2 flex items-center py-12 lg:py-0 overflow-hidden select-none"
      aria-label="Why choose Systeyn"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* --- LEFT SIDE: THE BIG PICTURE STATEMENT --- */}
          <div className="lg:col-span-5 space-y-6 lg:pr-8">
            <div>
              <span className="text-[9px] sm:text-[10px] tracking-[0.3em] text-blue-500 uppercase font-bold block mb-3">
                Why Us
              </span>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-[1.15] text-white">
                We've engineered out the reasons software fails.
              </h2>
            </div>

            <p className="text-zinc-500 text-xs sm:text-sm font-light leading-relaxed max-w-sm">
              Most engineering milestones derail from fragile infrastructure,
              broken feedback loops, and scope bloat. We eliminate all three
              metrics by default.
            </p>

            {/* Micro Quote replacing the huge banner block */}
            <div className="pt-4 border-t border-white/3 max-w-xs">
              <p className="text-zinc-400 text-xs italic font-light">
                "We own production outcomes—not just atomic code features."
              </p>
            </div>
          </div>

          {/* --- RIGHT SIDE: ULTRA-LIGHT SCANNING ROW ELEMENTS --- */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-white/4 border-t border-b border-white/4">
            {PILLARS.map((pillar) => (
              <div
                key={pillar.num}
                className="pillar-row group py-5 sm:py-6 flex items-start gap-6 transition-colors duration-300 hover:bg-white/5 px-5"
              >
                {/* Index marker */}
                <span className="font-mono text-[10px] text-zinc-600 tracking-wider pt-0.5 group-hover:text-blue-500 transition-colors duration-300">
                  {pillar.num}
                </span>

                {/* Scannable content bundle */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between w-full gap-1 sm:gap-4">
                  <h3 className="text-zinc-100 font-medium text-sm sm:text-base tracking-tight group-hover:text-white transition-colors duration-300">
                    {pillar.title}
                  </h3>
                  <span className="text-zinc-500 text-xs font-light tracking-normal max-w-sm sm:text-right">
                    {pillar.note}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { METRICS } from "@/data";

gsap.registerPlugin(ScrollTrigger);

export default function Metrics() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Horizontal geometric line scaling reveal
      gsap.fromTo(
        ".metric-border-line",
        { scaleX: 0, transformOrigin: "left center" },
        {
          scaleX: 1,
          duration: 0.85,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: ".metric-grid-system",
            start: "top 80%",
          },
        }
      );

      // 2. Telemetry metrics numerical stagger slide
      gsap.fromTo(
        ".metric-node",
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".metric-grid-system",
            start: "top 75%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="metrics"
      className="w-full bg-[#030508] border-t border-white/[0.02] text-white relative py-24 lg:py-32 overflow-hidden"
      aria-label="System Performance Matrix"
    >
      {/* Structural Coordinate Reference Point */}
      <div className="absolute top-12 left-12 font-mono text-[7px] text-zinc-800 tracking-widest hidden lg:block">
        // LOG_SYS_METRICS_DB
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end mb-16 lg:mb-20">
          
          {/* Header Block */}
          <div className="lg:col-span-6 space-y-3">
            <span className="text-[9px] tracking-[0.3em] text-blue-500 uppercase font-mono block">
              Performance Telemetry // Audit 2026
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white leading-tight">
              Quantifiable system impacts.
            </h2>
          </div>

          {/* Analytical Subtext Context */}
          <div className="lg:col-span-6">
            <p className="text-zinc-500 text-xs sm:text-sm font-light leading-relaxed max-w-xl">
              We benchmark production achievements purely on engineering efficiency, system uptime, and core operational cost savings. No vanity data, just verified pipeline telemetry.
            </p>
          </div>
        </div>

        {/* --- PERFORMANCE GRID MATRIX SYSTEM --- */}
        <div className="metric-grid-system relative">
          
          {/* Animated Horizontal Layout Axis */}
          <div className="metric-border-line absolute top-0 left-0 w-full h-[1px] bg-white/[0.05]" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 pt-8">
            {METRICS.map((item) => (
              <div key={item.metricId} className="metric-node space-y-4 flex flex-col justify-between">
                
                {/* Metric Readout Node */}
                <div className="space-y-1">
                  <div className="flex items-baseline justify-between">
                    <span className="font-mono text-[8px] text-zinc-600 tracking-wider">
                      [{item.metricId}]
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500/20 border border-blue-500/40 block" />
                  </div>
                  
                  <p className="text-4xl sm:text-5xl font-semibold tracking-tight text-white pt-2">
                    {item.value}
                  </p>
                </div>

                {/* Analytical Copy Definitions */}
                <div className="space-y-2 border-t border-white/[0.02] pt-3">
                  <h3 className="text-zinc-300 text-xs sm:text-[13px] font-medium leading-snug tracking-tight">
                    {item.label}
                  </h3>
                  <p className="text-zinc-600 text-[10px] font-light leading-relaxed">
                    {item.context}
                  </p>
                </div>

              </div>
            ))}
          </div>

          {/* Bottom Structural Boundary Axis */}
          <div className="metric-border-line absolute -bottom-8 left-0 w-full h-[1px] bg-white/[0.03]" />
        </div>

      </div>
    </section>
  );
}
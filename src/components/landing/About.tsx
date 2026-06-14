"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { STATS, WORKFLOW } from "@/data";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Reveal background spotlight beam
      gsap.fromTo(
        glowRef.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.4,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 60%" },
        },
      );

      // 2. High-contrast layout panel slide sequence
      gsap.fromTo(
        ".studio-panel",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power4.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
        },
      );

      // 3. Telemetry count loop
      const countElements = gsap.utils.toArray(".count-ticker");
      countElements.forEach((el: any) => {
        const targetValue = parseInt(el.getAttribute("data-target") || "0", 10);
        gsap.fromTo(
          el,
          { textContent: "0" },
          {
            textContent: targetValue,
            duration: 1.6,
            ease: "power2.out",
            snap: { textContent: 1 },
            scrollTrigger: { trigger: el, start: "top 90%" },
          },
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="w-full min-h-screen lg:h-screen bg-[#07090e] text-white flex flex-col justify-between relative py-12 lg:py-0 overflow-hidden select-none border-y border-white/3"
    >
      {/* Dynamic Background Spotlight Overlay */}
      <div
        ref={glowRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 sm:w-200 sm:h-200 bg-linear-to-tr from-blue-600/10 via-indigo-500/5 to-transparent rounded-full blur-[120px] pointer-events-none z-0"
      />

      {/* Structural Framing Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.002)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.002)_1px,transparent_1px)] bg-size-[32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-6 sm:px-12 lg:px-20 relative z-10 flex-1 flex flex-col justify-center">
        {/* Section Entry Header */}
        <div className="mb-12 lg:mb-16 space-y-2 text-center lg:text-left">
          <span className="text-[9px] tracking-[0.4em] text-blue-400 font-mono uppercase block">
            Core Profile // Metrics Dashboard
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-transparent bg-clip-text bg-linear-to-b from-white to-zinc-400">
            System Performance Overview
          </h2>
        </div>

        {/* --- DUAL PANEL HIGH-CONTRAST MATRIX --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch w-full">
          {/* LEFT CONTAINER Panel: STATS FIELD */}
          <div className="studio-panel lg:col-span-5 bg-[#0b0f19]/60 backdrop-blur-xl border border-white/6 p-8 flex flex-col justify-between space-y-8 shadow-[0_24px_60px_-15px_rgba(0,0,0,0.8)]">
            <div className="font-mono text-[9px] text-zinc-600 tracking-wider flex justify-between border-b border-white/4 pb-3">
              <span>// OPERATIONAL_DATA</span>
              <span>LIVE_NODE</span>
            </div>

            <div className="space-y-6 flex-1 flex flex-col justify-center">
              {STATS.map((stat, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between group border-b border-white/2 last:border-none pb-4 last:pb-0"
                >
                  <p className="text-[11px] font-light text-zinc-400 tracking-wide uppercase font-mono">
                    {stat.label}
                  </p>
                  <div className="font-mono text-3xl font-semibold tracking-tight text-white flex items-baseline">
                    <span className="count-ticker" data-target={stat.value}>
                      0
                    </span>
                    <span className="text-blue-500 ml-0.5">{stat.suffix}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT CONTAINER Panel: WORKFLOW SYSTEM */}
          <div className="studio-panel lg:col-span-7 bg-[#0b0f19]/60 backdrop-blur-xl border border-white/6 p-8 flex flex-col justify-between space-y-6 shadow-[0_24px_60px_-15px_rgba(0,0,0,0.8)]">
            <div className="font-mono text-[9px] text-zinc-600 tracking-wider flex justify-between border-b border-white/4 pb-3">
              <span>// PIPELINE_EXECUTION</span>
              <span>STABLE</span>
            </div>

            <div className="space-y-3 flex-1 flex flex-col justify-center">
              {WORKFLOW.map((node, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-3.5 rounded-xl border border-white/3 bg-white/1 hover:bg-white/4 hover:border-white/8transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-[10px] text-zinc-500 group-hover:text-blue-400 transition-colors">
                      {node.step}
                    </span>
                    <span className="font-mono text-[8px] bg-white/4 text-zinc-400 px-2 py-0.5 rounded border border-white/4">
                      {node.micro}
                    </span>
                    <h3 className="text-zinc-200 text-sm font-medium tracking-tight group-hover:text-white transition-colors">
                      {node.action}
                    </h3>
                  </div>
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

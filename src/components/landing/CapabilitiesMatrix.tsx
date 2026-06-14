"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SERVICES } from "@/data";

gsap.registerPlugin(ScrollTrigger);

const VectorGraphic = ({
  id,
  className,
}: {
  id: string;
  className?: string;
}) => {
  if (id === "vector-01") {
    return (
      <svg
        className={`${className} stroke-blue-500/40 fill-none`}
        viewBox="0 0 100 100"
        style={{ strokeDasharray: "100", strokeLinecap: "round" }}
      >
        <circle
          cx="50"
          cy="50"
          r="8"
          className="fill-blue-500/20 stroke-blue-400"
        />
        <circle cx="20" cy="30" r="4" />
        <circle cx="80" cy="30" r="4" />
        <circle cx="30" cy="75" r="4" />
        <circle cx="70" cy="75" r="4" />
        <path
          d="M50 42 L20 34 M50 42 L80 34 M50 58 L30 71 M50 58 L70 71"
          strokeWidth="0.7"
        />
      </svg>
    );
  }
  if (id === "vector-02") {
    return (
      <svg
        className={`${className} stroke-blue-400/30 fill-none`}
        viewBox="0 0 100 100"
      >
        <circle
          cx="50"
          cy="50"
          r="32"
          strokeWidth="1"
          strokeDasharray="6 4"
          className="animate-[spin_40s_linear_infinite]"
        />
        <circle
          cx="50"
          cy="50"
          r="22"
          strokeWidth="1.5"
          strokeDasharray="40 10"
          className="stroke-blue-500 animate-[spin_15s_linear_infinite_reverse]"
        />
        <circle cx="50" cy="50" r="12" strokeWidth="0.8" />
        <path
          d="M50 10 L50 90 M10 50 L90 50"
          strokeWidth="0.5"
          stroke="rgba(255,255,255,0.05)"
        />
      </svg>
    );
  }
  if (id === "vector-03") {
    return (
      <svg
        className={`${className} stroke-blue-500/40 fill-none`}
        viewBox="0 0 100 100"
        strokeWidth="1"
      >
        <rect
          x="25"
          y="20"
          width="50"
          height="14"
          rx="3"
          className="fill-white/1"
        />
        <rect
          x="25"
          y="43"
          width="50"
          height="14"
          rx="3"
          className="fill-blue-500/10 stroke-blue-400"
        />
        <rect
          x="25"
          y="66"
          width="50"
          height="14"
          rx="3"
          className="fill-white/1"
        />
        <path
          d="M50 34 L50 43 M50 57 L50 66"
          strokeWidth="1"
          className="stroke-blue-400"
        />
      </svg>
    );
  }
  return (
    <svg
      className={`${className} fill-blue-500/10 stroke-blue-500/30`}
      viewBox="0 0 100 100"
      strokeWidth="0.7"
    >
      <rect x="20" y="20" width="16" height="16" rx="2" />
      <rect
        x="42"
        y="20"
        width="16"
        height="16"
        rx="2"
        className="fill-blue-400/20 stroke-blue-400"
      />
      <rect x="64" y="20" width="16" height="16" rx="2" />
      <rect x="20" y="42" width="16" height="16" rx="2" />
      <rect x="42" y="42" width="16" height="16" rx="2" />
      <rect
        x="64"
        y="42"
        width="16"
        height="16"
        rx="2"
        className="fill-blue-400/20 stroke-blue-400"
      />
      <rect
        x="20"
        y="64"
        width="16"
        height="16"
        rx="2"
        className="fill-blue-400/20 stroke-blue-400"
      />
      <rect x="42" y="64" width="16" height="16" rx="2" />
      <rect x="64" y="64" width="16" height="16" rx="2" />
    </svg>
  );
};

export default function CapabilitiesJourney() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftGlowRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // DESKTOP & LAPTOP EXPERIENCES: (Pinnable layout configured for 1024px widths and above)
      mm.add("(min-width: 1024px)", () => {
        const cards = gsap.utils.toArray<HTMLElement>(".journey-card");
        const ghostNums = gsap.utils.toArray<HTMLElement>(".ghost-number");
        const vectors = gsap.utils.toArray<HTMLElement>(".system-vector");

        const pinTl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: `+=${SERVICES.length * 120}%`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const progress = self.progress;
              const step = 1 / SERVICES.length;
              const index = Math.min(
                Math.floor(progress / step),
                SERVICES.length - 1,
              );
              setActiveIndex(index);
            },
          },
        });

        cards.forEach((card, index) => {
          const ghostNum = ghostNums[index] as HTMLElement;
          const vector = vectors[index] as HTMLElement;

          pinTl.fromTo(
            [card, ghostNum, vector],
            { opacity: 0, y: 40, scale: 0.97, filter: "blur(8px)" },
            {
              opacity: (i, target) => (target === ghostNum ? 0.03 : 1),
              y: 0,
              scale: 1,
              filter: "blur(0px)",
              duration: 1.2,
              ease: "power2.out",
            },
          );

          if (vector) {
            const paths = vector.querySelectorAll("path, circle, rect");
            pinTl.fromTo(
              paths,
              { strokeDashoffset: 40, opacity: 0.4 },
              { strokeDashoffset: 0, opacity: 1, duration: 0.7, stagger: 0.04 },
              "-=0.8",
            );
          }

          if (index < cards.length - 1) {
            pinTl.to(
              [card, ghostNum, vector],
              {
                opacity: 0,
                y: -40,
                scale: 0.97,
                filter: "blur(8px)",
                duration: 0.9,
                ease: "power2.in",
              },
              "+=0.6",
            );
          }
        });
      });

      // MOBILE & TABLET EXPERIENCES: (Standard continuous vertical flows up to 1023px viewports)
      mm.add("(max-width: 1023px)", () => {
        const blocks = gsap.utils.toArray<HTMLElement>(".mobile-content-block");
        blocks.forEach((block) => {
          gsap.fromTo(
            block,
            { opacity: 0, y: 25 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              scrollTrigger: {
                trigger: block,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            },
          );
        });
      });

      // Unified ambient background responsive track
      gsap.to(leftGlowRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
        y: "10%",
        scale: 1.05,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen lg:h-screen bg-[#030508] text-white overflow-hidden flex items-center select-none border-t border-white/2 py-12 sm:py-20 lg:py-0"
    >
      {/* --- BACKGROUND METRICS & ALIGNMENT LINERS --- */}
      <div
        ref={leftGlowRef}
        className="absolute top-1/4 left-1/2 w-70 sm:w-125 lg:w-175 h-70 sm:h-125 lg:h-175 rounded-full bg-linear-to-tr from-[#1E40AF]/10 to-transparent opacity-60 blur-[100px] lg:blur-[140px] pointer-events-none transform -translate-x-1/2"
      />
      <div className="absolute hidden lg:block lg:left-[35%] top-0 w-px h-full bg-linear-to-b from-white/1 via-white/4 to-white/1" />

      {/* --- RESPONSIVE MAIN CONTENT SYSTEM CONTAINER --- */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-8 lg:px-10 xl:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 xl:gap-12 items-center relative z-10">
        {/* LEFT COLUMN: Clean Brand Typography Title and Stepper Tracker */}
        <div className="lg:col-span-5 flex flex-col justify-center w-full">
          <div className="space-y-4 lg:space-y-8 xl:space-y-10 relative">
            <div className="text-left">
              <span className="text-[9px] sm:text-[10px] tracking-[0.3em] text-blue-500 uppercase font-bold block">
                Capability Matrix
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-semibold tracking-tight text-white mt-1 sm:mt-2">
                Core Infrastructures
              </h2>
            </div>

            {/* Desktop Dynamic Track Stepper Indicator (Safely stays hidden below lg-break) */}
            <div className="hidden lg:block space-y-4 xl:space-y-6 border-l border-white/4 pl-6 xl:pl-8 relative">
              <div
                ref={trackRef}
                className="absolute left-0 top-0 w-[1.5px] bg-linear-to-b from-blue-400 to-blue-600 shadow-[0_0_8px_rgba(59,130,246,0.5)] transition-all duration-500 ease-out"
                style={{
                  height: `${100 / SERVICES.length}%`,
                  transform: `translateY(${activeIndex * 100}%)`,
                }}
              />
              {SERVICES.map((item, idx) => (
                <div
                  key={item.id}
                  className={`transition-all duration-500 transform ${idx === activeIndex ? "opacity-100 translate-x-2" : "opacity-15"}`}
                >
                  <span className="font-mono text-[9px] tracking-widest text-blue-400 block font-medium mb-0.5">
                    SYSTEM {item.num}
                  </span>
                  <h4 className="text-sm xl:text-base font-medium text-white tracking-tight">
                    {item.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Interactive Screen Viewport Matrix / Stacked Responsive List */}
        <div className="lg:col-span-7 relative w-full flex items-center justify-center">
          {/* DESKTOP ENGINE GRID WORKSPACE (1024px and wider displays) */}
          <div className="hidden lg:flex relative w-full lg:min-h-100 lg:h-105 xl:h-120 rounded-2xl bg-linear-to-br from-white/1.5 to-transparent border border-white/4 backdrop-blur-xl shadow-2xl p-6 xl:p-10 items-center overflow-hidden">
            {/* Architectural Crosshair Corners & Underlying Grid Lattice */}
            <div className="absolute top-3 left-3 w-2 h-2 border-t border-l border-white/20" />
            <div className="absolute top-3 right-3 w-2 h-2 border-t border-r border-white/20" />
            <div className="absolute bottom-3 left-3 w-2 h-2 border-b border-l border-white/20" />
            <div className="absolute bottom-3 right-3 w-2 h-2 border-b border-r border-white/20" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.005)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.005)_1px,transparent_1px)] bg-size-[18px_18px] pointer-events-none mask-[radial-gradient(ellipse_at_center,white,transparent_75%)]" />

            {/* Adaptive Massive Ghost Numbers Backdrop Layout */}
            <div className="absolute right-4 -bottom-3.75 select-none pointer-events-none font-bold text-[180px] xl:text-[240px] text-white font-sans tracking-tighter leading-none overflow-hidden h-full flex items-end">
              {SERVICES.map((service) => (
                <span
                  key={`ghost-${service.id}`}
                  className="ghost-number absolute font-black opacity-0"
                >
                  {service.num}
                </span>
              ))}
            </div>

            {/* Split Inline Viewport Sub-Grid */}
            <div className="relative w-full z-10 grid grid-cols-12 gap-4 xl:gap-6 items-center">
              {/* Dynamic Absolute Text Content Frame */}
              <div className="col-span-7 relative min-h-55 xl:min-h-60 flex items-center">
                {SERVICES.map((service, index) => (
                  <div
                    key={service.id}
                    className="journey-card absolute inset-x-0 w-full flex flex-col justify-center pointer-events-none opacity-0"
                    style={{ zIndex: activeIndex === index ? 30 : 10 }}
                  >
                    <div className="inline-flex items-center gap-2 mb-3 xl:mb-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6] animate-pulse" />
                      <span className="text-[9px] xl:text-[10px] tracking-[0.18em] text-blue-400 font-semibold">
                        {service.tag}
                      </span>
                    </div>
                    <h3 className="text-2xl xl:text-3xl font-semibold text-white tracking-tight mb-3 xl:mb-4">
                      {service.title}
                    </h3>
                    <p className="text-zinc-400 text-xs xl:text-sm leading-relaxed font-light max-w-xs xl:max-w-sm">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Dynamic Render Frame for Vector Systems */}
              <div className="col-span-5 relative h-55 xl:h-65 flex items-center justify-center border-l border-white/3 pl-4 xl:pl-6">
                {SERVICES.map((service) => (
                  <VectorGraphic
                    key={`vector-${service.id}`}
                    id={service.vectorId}
                    className="system-vector absolute opacity-0 w-full h-full max-h-40 xl:max-h-50"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* TABLET & MOBILE VIEWPORT SYSTEM: Continuous fluid, auto-spacing layout stack */}
          <div className="lg:hidden w-full grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {SERVICES.map((service) => (
              <div
                key={`mobile-${service.id}`}
                className="mobile-content-block w-full bg-linear-to-br from-white/1.5 to-transparent border border-white/4 backdrop-blur-md rounded-xl p-5 sm:p-6 flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <div className="inline-flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_6px_#3b82f6]" />
                      <span className="text-[8px] sm:text-[9px] tracking-widest text-blue-400 font-semibold uppercase">
                        {service.tag}
                      </span>
                    </div>
                    <span className="font-mono text-[10px] text-zinc-600 font-bold">
                      #{service.num}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white tracking-tight mb-2">
                    {service.title}
                  </h3>
                  <p className="text-zinc-400 text-[11px] sm:text-xs leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>

                {/* Micro-System Visualizer Blueprint Node for full design parity across mobile devices */}
                <div className="w-full h-24 border-t border-white/2 pt-3 mt-1 flex items-center justify-center overflow-hidden opacity-80">
                  <VectorGraphic
                    id={service.vectorId}
                    className="w-full h-full max-h-18.75"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

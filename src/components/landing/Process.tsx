// "use client";

// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const PROCESS_STEPS = [
//   {
//     phase: "01",
//     title: "Scope & Blueprint",
//     time: "Week 1",
//     detail: "Architecture mapping, core tech choices, and a locked milestone roadmap.",
//     trace: "SYS_INTAKE_INIT"
//   },
//   {
//     phase: "02",
//     title: "Sprint Engine",
//     time: "Weeks 2–6",
//     detail: "Iterative production builds streaming continuous deployments directly into staging loops.",
//     trace: "DEV_CYCLE_EXEC"
//   },
//   {
//     phase: "03",
//     title: "Rigorous Audit",
//     time: "Week 7",
//     detail: "Automated end-to-end regression validation, security stress tests, and trace sweeps.",
//     trace: "SEC_RECON_LOOP"
//   },
//   {
//     phase: "04",
//     title: "Atomic Launch",
//     time: "Ongoing",
//     detail: "Zero-downtime gateway orchestration, production telemetry setups, and operations sync.",
//     trace: "LIVE_RELEASE_GATE"
//   },
// ];

// export default function Process() {
//   const scrollContainerRef = useRef<HTMLDivElement>(null);
//   const trackRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const track = trackRef.current;
//       if (!track) return;

//       const scrollWidth = track.scrollWidth - window.innerWidth;

//       // Master Horizontal Pin Scroll Layout Trigger
//       const masterTimeline = gsap.timeline({
//         scrollTrigger: {
//           trigger: scrollContainerRef.current,
//           pin: true,
//           scrub: 0.5, // Smoother response curve to prevent scrolling lag
//           start: "top top",
//           end: () => `+=${scrollWidth}`,
//           invalidateOnRefresh: true,
//         },
//       });

//       // 1. Move the panoramic container track horizontally
//       masterTimeline.to(track, {
//         x: -scrollWidth,
//         ease: "none",
//       });

//       // 2. Controlled Kinetic Parallax for the background digits (No overflow)
//       gsap.utils.toArray(".parallax-ghost").forEach((ghost: any) => {
//         masterTimeline.to(
//           ghost,
//           {
//             xPercent: -20,
//             ease: "none",
//           },
//           0 // Syncs directly with the track movement
//         );
//       });

//       // 3. Crisp High-Performance Reveal of Content (No CSS Filters/Blurs)
//       gsap.utils.toArray(".pane-content").forEach((content: any) => {
//         masterTimeline.fromTo(
//           content,
//           { opacity: 0.2, y: 15 },
//           {
//             opacity: 1,
//             y: 0,
//             duration: 0.3,
//             ease: "power1.out",
//           },
//           ">-0.15" // Accurate intersection alignment timing
//         );
//       });
//     }, scrollContainerRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div ref={scrollContainerRef} className="w-full h-screen bg-[#030508] overflow-hidden select-none">
//       <div
//         ref={trackRef}
//         className="flex h-full w-[300vw] sm:w-[220vw] lg:w-[170vw] xl:w-[150vw] relative items-center"
//       >
//         {/* Continuous Baseline Alignment Rail Running Across All Panels */}
//         <div className="absolute top-[65%] left-0 w-full h-px bg-linear-to-b from-blue-500/20 via-zinc-800 to-transparent z-0 pointer-events-none" />

//         {/* --- INTRO ELEMENT: VIEWPORT CAPTION --- */}
//         <div className="w-[75vw] sm:w-[55vw] lg:w-[40vw] h-full flex flex-col justify-center px-8 sm:px-16 lg:px-20 border-r border-white/[0.02] relative z-10 bg-[#030508]">
//           <div className="space-y-4 max-w-sm">
//             <span className="text-[9px] tracking-[0.3em] text-blue-500 uppercase font-mono block">
//               Execution Framework
//             </span>
//             <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-[1.15] text-white">
//               A pipeline engineered for control.
//             </h2>
//             <p className="text-zinc-500 text-xs sm:text-sm font-light leading-relaxed">
//               We removed operational variance. Scroll down to sweep horizontally across our modular deployment loop.
//             </p>
//           </div>

//           <div className="absolute bottom-12 font-mono text-[9px] text-zinc-600 tracking-widest">
//             PANORAMIC_TRACK_STABLE // SWIPE →
//           </div>
//         </div>

//         {/* --- PROCESS STEP LOOP PANELS --- */}
//         {PROCESS_STEPS.map((step, idx) => (
//           <div
//             key={step.phase}
//             className="w-[55vw] sm:w-[42vw] lg:w-[32vw] h-full flex flex-col justify-center px-8 sm:px-12 lg:px-14 border-r border-white/[0.02] relative overflow-hidden bg-[#030508]"
//           >
//             {/* Refined Minimalist Background Digit Plane */}
//             <div className="parallax-ghost absolute top-20 right-8 font-mono text-7xl lg:text-8xl font-extrabold text-white/[0.02] tracking-tighter select-none pointer-events-none will-change-transform">
//               {step.phase}
//             </div>

//             {/* Foreground Structural Metric Panel */}
//             <div className="pane-content space-y-5 relative z-10 pt-12 will-change-transform">
//               <div className="flex items-center justify-between border-b border-white/[0.03] pb-3">
//                 <span className="font-mono text-[10px] tracking-widest text-zinc-600">
//                   {step.trace}
//                 </span>
//                 <span className="text-[9px] font-mono tracking-wider text-blue-400 bg-blue-500/[0.03] border border-blue-500/10 px-2 py-0.5 rounded">
//                   {step.time}
//                 </span>
//               </div>

//               <div className="space-y-2">
//                 <div className="flex items-baseline space-x-2">
//                   <span className="font-mono text-xs text-zinc-500">{step.phase}</span>
//                   <h3 className="text-white font-medium text-base sm:text-lg tracking-tight">
//                     {step.title}
//                   </h3>
//                 </div>
//                 <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed max-w-xs">
//                   {step.detail}
//                 </p>
//               </div>

//               {/* Baseline Connector Intersection Node point */}
//               <div className="absolute top-[calc(65%-13px)] left-0 w-2 h-2 rounded-full bg-[#030508] border border-blue-500/40 transform -translate-x-1/2 flex items-center justify-center">
//                 <div className="w-0.5 h-0.5 rounded-full bg-blue-400" />
//               </div>
//             </div>

//             {/* Panel Terminal Details Footer */}
//             <div className="absolute bottom-12 font-mono text-[8px] text-zinc-700 tracking-wider">
//               STAGE_REF_0{idx + 1} // CRITICAL_PATH
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PROCESS_STEPS = [
  {
    phase: "01",
    title: "Scope & Blueprint",
    time: "Week 1",
    detail:
      "Architecture mapping, core tech choices, and a locked milestone roadmap.",
    coordinate: "T_SYS // 42.8°N",
  },
  {
    phase: "02",
    title: "Sprint Engine",
    time: "Weeks 2–6",
    detail:
      "Iterative production builds streaming continuous deployments directly into staging loops.",
    coordinate: "C_CYC // 88.1°N",
  },
  {
    phase: "03",
    title: "Rigorous Audit",
    time: "Week 7",
    detail:
      "Automated end-to-end regression validation, security stress tests, and trace sweeps.",
    coordinate: "V_SEC // 14.5°N",
  },
  {
    phase: "04",
    title: "Atomic Launch",
    time: "Ongoing",
    detail:
      "Zero-downtime gateway orchestration, production telemetry setups, and operations sync.",
    coordinate: "L_GAT // 99.9°N",
  },
];

export default function Process() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const crosshairXRef = useRef<HTMLDivElement>(null);
  const crosshairYRef = useRef<HTMLDivElement>(null);

  const [isMobile, setIsMobile] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1023px)");

    const update = () => setIsMobile(mediaQuery.matches);
    update();

    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const ctx = gsap.context(() => {
      const stepElements = gsap.utils.toArray<HTMLElement>(
        ".blueprint-step-node",
      );

      const masterTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: scrollContainerRef.current,
          pin: true,
          scrub: 0.3,
          start: "top top",
          end: "+=2500",
          invalidateOnRefresh: true,
        },
      });

      // Target positions for the laser crosshairs relative to the right-hand grid container
      const coordinatesY = [15, 38, 62, 85];
      const coordinatesX = [12, 45, 25, 58];

      stepElements.forEach((step: any, index: number) => {
        if (index > 0) {
          masterTimeline.to(
            crosshairYRef.current,
            {
              top: `${coordinatesY[index]}%`,
              ease: "power2.inOut",
              duration: 1,
            },
            `segment-${index}`,
          );

          masterTimeline.to(
            crosshairXRef.current,
            {
              left: `${coordinatesX[index]}%`,
              ease: "power2.inOut",
              duration: 1,
            },
            `segment-${index}`,
          );

          masterTimeline.to(
            stepElements[index - 1],
            {
              opacity: 0.05,
              scale: 0.98,
              duration: 0.4,
              ease: "power1.out",
            },
            `segment-${index}`,
          );
        }

        masterTimeline.to(
          step,
          {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            ease: "power2.out",
          },
          `segment-${index}+=0.4`,
        );
      });
    }, scrollContainerRef);

    return () => ctx.revert();
  }, [isMobile]);

  const activeData = useMemo(() => PROCESS_STEPS[activeStep], [activeStep]);

  return (
    <div
      ref={scrollContainerRef}
      className="relative flex h-auto w-full select-none flex-col overflow-hidden bg-[#030508] px-4 py-12 sm:px-6 lg:h-screen lg:flex-row lg:items-center lg:justify-between lg:px-20 lg:py-0"
    >
      {/* Structural Engineering Layout Grid Overlay */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.002)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.002)_1px,transparent_1px)] bg-size-[40px_40px]" />

      {/* LEFT CONTROL MODULE */}
      <div className="relative z-10 w-full space-y-6 rounded-xl bg-[#030508]/80 p-4 backdrop-blur-sm lg:w-[30%] lg:space-y-6 lg:bg-transparent lg:p-0">
        <div className="space-y-4">
          <span className="block font-mono text-[9px] uppercase tracking-[0.3em] text-blue-500">
            Execution Framework
          </span>
          <h2 className="max-w-md text-3xl font-semibold tracking-tight leading-[1.15] text-white sm:text-4xl">
            A pipeline engineered for control.
          </h2>
          <p className="max-w-sm text-xs font-light leading-relaxed text-zinc-500 sm:text-sm">
            We removed operational variance. Scroll to recalibrate the tracking
            matrix across four decoupled pipeline gates.
          </p>
        </div>

        <div className="border-t border-white/5 pt-2 font-mono text-[9px] space-y-1.5 text-zinc-600">
          <p className="flex items-center gap-2 text-blue-400/70">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
            MATRIX_TRACKER_ONLINE
          </p>
        </div>
      </div>

      {/* DESKTOP RIGHT CANVAS */}
      {!isMobile && (
        <div className="relative z-10 h-[60vh] w-full max-w-2xl flex-1 lg:ml-auto lg:h-[80vh] lg:w-[60%]">
          <div
            ref={crosshairYRef}
            className="pointer-events-none absolute left-0 h-px w-full bg-linear-to-b from-transparent via-blue-500/40 to-transparent transition-all duration-75"
            style={{ top: "15%" }}
          >
            <span className="absolute right-0 -top-2.5 font-mono text-[8px] tracking-widest text-blue-500/50">
              LN_Y // SEL
            </span>
          </div>

          <div
            ref={crosshairXRef}
            className="pointer-events-none absolute top-0 h-full w-px bg-linear-to-b from-transparent via-blue-500/40 to-transparent transition-all duration-75"
            style={{ left: "12%" }}
          >
            <span className="absolute bottom-0 -left-6 origin-left rotate-90 font-mono text-[8px] tracking-widest text-blue-500/50">
              LN_X // TRC
            </span>
          </div>

          <div className="absolute inset-0 h-full w-full">
            {PROCESS_STEPS.map((step, idx) => (
              <div
                key={step.phase}
                className="blueprint-step-node absolute w-[85%] rounded-lg border border-white/5 bg-[#05080c]/30 p-6 transition-all duration-300 will-change-transform sm:w-[70%] lg:w-[65%]"
                style={{
                  top:
                    idx === 0
                      ? "15%"
                      : idx === 1
                        ? "38%"
                        : idx === 2
                          ? "62%"
                          : "85%",
                  left:
                    idx === 0
                      ? "12%"
                      : idx === 1
                        ? "45%"
                        : idx === 2
                          ? "25%"
                          : "58%",
                  transform: "translate(0%, -50%)",
                  opacity: idx === 0 ? 1 : 0.05,
                }}
              >
                <div className="mb-3 flex items-center justify-between border-b border-white/5 pb-2.5 font-mono text-[9px]">
                  <div className="flex items-center space-x-2">
                    <span className="font-bold text-blue-500">
                      {step.phase}
                    </span>
                    <span className="tracking-wider text-zinc-600">
                      {step.coordinate}
                    </span>
                  </div>
                  <span className="rounded border border-white/5 bg-white/5 px-2 py-0.5 text-zinc-400">
                    {step.time}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-sm font-medium tracking-tight text-white">
                    {step.title}
                  </h3>
                  <p className="text-xs font-light leading-relaxed text-zinc-400">
                    {step.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* MOBILE TAB VIEW */}
      {isMobile && (
        <div className="relative z-10 mt-10 w-full">
          <div className="mb-4 flex gap-2 overflow-x-auto pb-2">
            {PROCESS_STEPS.map((step, index) => {
              const active = index === activeStep;
              return (
                <button
                  key={step.phase}
                  type="button"
                  onClick={() => setActiveStep(index)}
                  className={`shrink-0 border px-4 py-2 text-[10px] uppercase tracking-[0.24em] transition-all ${
                    active
                      ? "border-blue-500/60 bg-blue-500/15 text-blue-300"
                      : "border-white/10 bg-white/5 text-zinc-500"
                  }`}
                >
                  {step.phase}
                </button>
              );
            })}
          </div>

          <div className="border border-white/5 bg-[#05080c]/50 p-5 shadow-2xl backdrop-blur-md">
            <div className="mb-4 flex items-center justify-between border-b border-white/5 pb-3 font-mono text-[9px]">
              <div className="flex items-center space-x-2">
                <span className="font-bold text-blue-500">
                  {activeData.phase}
                </span>
                <span className="tracking-wider text-zinc-600">
                  {activeData.coordinate}
                </span>
              </div>
              <span className="rounded border border-white/5 bg-white/5 px-2 py-0.5 text-zinc-400">
                {activeData.time}
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-medium tracking-tight text-white">
                {activeData.title}
              </h3>
              <p className="text-sm font-light leading-relaxed text-zinc-400">
                {activeData.detail}
              </p>
            </div>

            <div className="mt-5 h-px w-full bg-white/5" />

            <div className="mt-4 flex items-center justify-between font-mono text-[9px] text-blue-400/70">
              <span>MATRIX_TRACKER_ONLINE</span>
              <span>
                {String(activeStep + 1).padStart(2, "0")} /{" "}
                {String(PROCESS_STEPS.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

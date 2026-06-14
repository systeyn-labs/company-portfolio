"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PROCESS_STEPS } from "@/data";

gsap.registerPlugin(ScrollTrigger);

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
      <div className="relative z-10 space-y-6 rounded-xl bg-[#030508]/80 p-4 backdrop-blur-sm lg:w-[30%] lg:space-y-6 lg:bg-transparent lg:p-0">
        <div className="space-y-4">
          <span className="text-[9px] sm:text-[10px] tracking-[0.3em] text-blue-500 uppercase font-bold block">
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
        <div className="relative z-10 h-[60vh] w-full max-w-3xl flex-1 lg:ml-auto lg:h-[80vh] lg:w-[60%]">
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
                className="blueprint-step-node absolute w-[85%] border border-white/5 bg-[#05080c]/30 p-6 transition-all duration-300 will-change-transform sm:w-[70%] lg:w-[65%]"
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

"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Crucial step: Register ScrollTrigger plugin for exit animations
gsap.registerPlugin(ScrollTrigger);

export default function DeployHero() {
  const containerRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const topLinesRef = useRef<HTMLDivElement>(null);
  const bottomLinesRef = useRef<HTMLDivElement>(null);
  const leftGlowRef = useRef<HTMLDivElement>(null);
  const rightGlowRef = useRef<HTMLDivElement>(null);
  const sideOutlinesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. MASTER TIMELINE FOR ENTRANCE
      const tlIntro = gsap.timeline({ defaults: { ease: "power4.out" } });

      // Ambient Glow Intro
      tlIntro.fromTo(
        [leftGlowRef.current, rightGlowRef.current],
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1.8, stagger: 0.15, ease: "power2.out" }
      );

      // Top and Bottom vertical accent lines slide/scale reveal
      tlIntro.fromTo(
        topLinesRef.current,
        { scaleY: 0, transformOrigin: "top center" },
        { scaleY: 1, duration: 1, ease: "power3.inOut" },
        "-=1.4"
      );

      tlIntro.fromTo(
        bottomLinesRef.current,
        { scaleY: 0, transformOrigin: "bottom center" },
        { scaleY: 1, duration: 1, ease: "power3.inOut" },
        "-=1.0"
      );

      // Typography Stagger
      tlIntro.fromTo(
        badgeRef.current,
        { y: -15, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 },
        "-=0.5"
      )
      .fromTo(
        headingRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9 },
        "-=0.6"
      )
      .fromTo(
        descRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.7"
      )
      .fromTo(
        buttonsRef.current,
        { y: 15, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.7"
      );

      // 2. CONTINUOUS AMBIENT IDLE PULSE
      gsap.to(leftGlowRef.current, {
        opacity: 0.85,
        scale: 1.06,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(rightGlowRef.current, {
        opacity: 0.75,
        scale: 1.04,
        duration: 5.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.5,
      });

      gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",      // When the top of container hits top of view
          end: "bottom top",    // When the bottom of container leaves top of view
          scrub: true,          // Syncs exit progress directly with mouse scrolling
        }
      })
      .to(badgeRef.current, { y: -50, opacity: 0, ease: "power2.in" }, 0)
      .to(headingRef.current, { y: -80, opacity: 0, ease: "power2.in" }, 0.05)
      .to(descRef.current, { y: -60, opacity: 0, ease: "power2.in" }, 0.1)
      .to(buttonsRef.current, { y: -40, opacity: 0, ease: "power2.in" }, 0.15)
      .to(topLinesRef.current, { scaleY: 0, transformOrigin: "top center", opacity: 0, ease: "power1.in" }, 0)
      .to(bottomLinesRef.current, { scaleY: 0, transformOrigin: "bottom center", opacity: 0, ease: "power1.in" }, 0)
      .to(sideOutlinesRef.current, { opacity: 0, scale: 0.95, ease: "power1.in" }, 0)
      .to([leftGlowRef.current, rightGlowRef.current], { opacity: 0, scale: 0.8, ease: "power2.in" }, 0);

    }, containerRef);

    return () => ctx.revert(); // Automatically cleans up triggers & avoids memory leaks
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full bg-[#030508] text-white flex flex-col items-center justify-center overflow-hidden px-6 py-32 select-none"
    >
      {/* --- BACKGROUND GLOW FIELDS --- */}
      <div
        ref={leftGlowRef}
        className="absolute top-0 left-0 w-137.5 h-137.5 rounded-full bg-linear-to-br from-[#1E40AF] to-transparent opacity-100 blur-[130px] pointer-events-none transform -translate-x-1/4 -translate-y-1/4"
      />

      <div
        ref={rightGlowRef}
        className="absolute bottom-0 right-0 w-162.5 h-162.5 rounded-full bg-linear-to-tl from-[#1D4ED8] to-transparent opacity-90 blur-[150px] pointer-events-none transform translate-x-1/4 translate-y-1/4"
      />

      {/* --- PROMINENT TECHNICAL OUTLINES --- */}
      <div ref={sideOutlinesRef} className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[25%] left-0 w-[18%] h-[35%] border-r border-t border-white/[0.07] rounded-tr-4xl" />
        <div className="absolute top-[25%] right-0 w-[18%] h-[35%] border-l border-t border-white/[0.07] rounded-tl-4xl" />
      </div>

      {/* --- ACCENT TRACK LINES --- */}
      <div
        ref={topLinesRef}
        className="absolute top-0 left-1/2 -translate-x-1/2 flex gap-5 h-28 opacity-40 z-10"
      >
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="w-px h-full bg-linear-to-b from-white/80 via-white/40 to-transparent"
          />
        ))}
      </div>

      <div
        ref={bottomLinesRef}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-5 h-28 opacity-40 z-10"
      >
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="w-px h-full bg-linear-to-t from-white/80 via-white/40 to-transparent"
          />
        ))}
      </div>

      {/* --- HERO CONTENT ARCHITECTURE --- */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center mt-6">
        <div
          ref={badgeRef}
          className="mb-8 opacity-0 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-linear-to-b from-white/8 to-white/2 border border-white/10 backdrop-blur-md shadow-md cursor-pointer hover:border-white/18 transition-all duration-300"
        >
          <span className="text-xs sm:text-[13px] tracking-wide text-gray-300 font-medium">
            Flexible Plans for You
          </span>
          <span className="text-xs text-gray-400">→</span>
        </div>

        <h1
          ref={headingRef}
          className="opacity-0 text-[42px] sm:text-[58px] md:text-[72px] font-semibold text-white tracking-tight leading-[1.08] max-w-3xl mb-6"
        >
          Deploy your website <br />
          in seconds, not hours
        </h1>

        <p
          ref={descRef}
          className="opacity-0 text-gray-400 text-base sm:text-lg md:text-[19px] leading-relaxed max-w-2xl mb-12 font-light tracking-wide"
        >
          With our state of the art, cutting edge, we are so back kinda hosting
          services, you can deploy your website in seconds.
        </p>

        <div
          ref={buttonsRef}
          className="opacity-0 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <button className="w-full sm:w-auto px-7 py-3.5 text-[14px] font-medium text-gray-200 rounded-full bg-linear-to-b from-white/10 to-white/3 border border-white/12 hover:from-white/16 hover:to-white/5 hover:border-white/22 active:scale-[0.98] transition-all duration-200 shadow-md backdrop-blur-sm">
            Start a project
          </button>

          <button className="w-full sm:w-auto px-8 py-3.5 text-[14px] font-semibold text-[#030508] bg-white rounded-full hover:bg-gray-100 active:scale-[0.98] transition-all duration-200 shadow-[0_4px_24px_rgba(255,255,255,0.18)]">
            Book a call
          </button>
        </div>
      </div>
    </section>
  );
}
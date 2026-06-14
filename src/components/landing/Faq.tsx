"use client";

import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FAQS } from "@/data";

gsap.registerPlugin(ScrollTrigger);

function FAQItem({ faq, index, isOpen, toggle }: any) {
  const id = String(index + 1).padStart(2, "0");

  return (
    <div 
      className={`group transition-all duration-500 border-b border-white/3 ${
        isOpen ? "bg-white/2" : "hover:bg-white/1"
      }`}
    >
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between py-7 px-4 sm:px-8 text-left outline-none"
      >
        <div className="flex items-center gap-6 sm:gap-10">
          <span className={`font-mono text-[10px] transition-colors duration-300 ${
            isOpen ? "text-blue-500" : "text-zinc-600"
          }`}>
            {id} //
          </span>
          <h3 className={`text-sm sm:text-base font-medium tracking-tight transition-colors duration-300 ${
            isOpen ? "text-white" : "text-zinc-400 group-hover:text-zinc-200"
          }`}>
            {faq.q}
          </h3>
        </div>

        <div className="relative flex items-center justify-center">
          {/* Trendy Geometric Toggle */}
          <div className={`w-5 h-5 border transition-all duration-500 rounded-sm ${
            isOpen ? "border-blue-500 rotate-90 scale-110" : "border-zinc-800 rotate-0"
          }`} />
          <div className={`absolute w-1 h-1 bg-blue-500 rounded-full transition-opacity duration-500 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`} />
        </div>
      </button>

      {/* Smooth Grid-based Expansion */}
      <div className={`grid transition-all duration-500 ease-in-out ${
        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
      }`}>
        <div className="overflow-hidden">
          <div className="px-14 sm:px-24 pb-8 flex flex-col gap-4">
            <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed font-light max-w-2xl">
              {faq.a}
            </p>
            <div className="flex items-center gap-3">
              <span className="font-mono text-[8px] text-blue-500/60 tracking-widest border border-blue-500/20 px-2 py-0.5 rounded">
                TAG::{faq.tag}
              </span>
              <div className="h-px w-8 bg-blue-500/20" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".faq-row",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="faq"
      className="w-full min-h-screen bg-[#030508] text-white flex flex-col relative py-12 overflow-hidden select-none border-t border-white/2"
    >
      {/* Structural Crosshair Intersections */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-white/1 hidden lg:block" />
      <div className="absolute top-1/2 left-0 w-full h-px bg-white/1 hidden lg:block" />

      <div className="w-full px-6 sm:px-12 lg:px-20 relative z-10 flex-1 flex flex-col justify-center">
        <div className="flex flex-col gap-12 lg:gap-12">
          
          {/* --- SIDEBAR HEADER --- */}
          <div className="space-y-3 text-center">
            <div className="w-full">
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white leading-tight">
                Common Inquiries.
              </h2>
            </div>
            <p className="text-zinc-600 text-xs sm:text-sm font-light leading-relaxed">
              Transparent definitions for architectural control, timeline management, and system governance.
            </p>
          </div>

          {/* --- TRENDY ACCORDION STACK --- */}
          <div className="faq-row">
            <div className="border-t border-white/3 overflow-hidden">
              {FAQS.map((faq, i) => (
                <FAQItem
                  key={i}
                  index={i}
                  faq={faq}
                  isOpen={openIndex === i}
                  toggle={() => setOpenIndex(openIndex === i ? -1 : i)}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
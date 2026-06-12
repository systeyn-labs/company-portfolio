"use client";

import React from "react";

const SERVICES = [
  {
    id: 'ai-agents',
    mono: '01 // AGENTIC.OS',
    title: 'AI Agents',
    description: 'Purpose-built autonomous agents engineered to handle multi-step processes and complex business workflows directly out of the box.',
    tag: 'PROT.ACTIVE',
  },
  {
    id: 'automation',
    mono: '02 // INFRA.PIPE',
    title: 'Automation Solutions',
    description: 'End-to-end operational automation loops that clear systemic bottlenecks and unify legacy microservice data planes.',
    tag: null,
  },
  {
    id: 'custom-software',
    mono: '03 // ARCH.ENGINE',
    title: 'Custom Software',
    description: 'Bespoke high-performance web applications built from bare-metal foundations for scale, absolute security, and speed.',
    tag: null,
  },
  {
    id: 'saas',
    mono: '04 // MULTI.TENANT',
    title: 'SaaS Architecture',
    description: 'Complete production-grade platforms including modern ledger billing logic, unified session identity, and real-time dashboard clusters.',
    tag: null,
  },
  {
    id: 'api',
    mono: '05 // INTEGRATION.LAYER',
    title: 'API Orchestration',
    description: 'Robust, fully type-safe communication layers connecting your isolated databases and applications into a clean global runtime environment.',
    tag: null,
  },
  {
    id: 'consulting',
    mono: '06 // STRATEGY.NODE',
    title: 'AI Advisory',
    description: 'Technical roadmap synthesis and hardware allocation strategies designed to bypass engineering pitfalls from day zero.',
    tag: null,
  },
];

export default function CapabilitiesMatrix() {
  return (
    <div className="w-full max-w-7xl mx-auto pointer-events-auto [transform:rotateX(14deg)] transform-gpu origin-bottom">
      
      {/* Minimalist Grid Header */}
      <header className="max-w-3xl mb-12 text-left">
        <div className="flex items-center gap-2 mb-2">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
          <p className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-sky-400">Capabilities Matrix</p>
        </div>
        <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight mb-4">
          Engineered ecosystems. Built for technical scale.
        </h2>
        <p className="text-zinc-400 text-xs sm:text-sm max-w-xl leading-relaxed">
          Six high-impact engineering disciplines optimized into microservice-driven processes, maintaining clear product clarity and production-grade delivery timelines.
        </p>
      </header>

      {/* Premium Compact Matrix Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {SERVICES.map((service) => (
          <article
            key={service.id}
            className="group relative flex flex-col justify-between p-5 rounded-xl border border-zinc-800/50 bg-zinc-950/40 backdrop-blur-md hover:bg-zinc-900/40 hover:border-zinc-700/70 transition-all duration-300 cursor-default overflow-hidden shadow-xl"
          >
            {/* Subtle Ambient Hover Mesh Glow */}
            <div className="absolute -inset-px bg-gradient-to-br from-indigo-500/10 to-sky-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-between gap-4 mb-6">
                <span className="font-mono text-[9px] text-zinc-500 tracking-widest">{service.mono}</span>
                {service.tag && (
                  <span className="px-1.5 py-0.5 font-mono text-[8px] font-bold rounded bg-sky-500/10 text-sky-400 border border-sky-500/20 tracking-wider uppercase">
                    {service.tag}
                  </span>
                )}
              </div>

              <h3 className="text-base font-bold text-white mb-2 tracking-tight group-hover:text-sky-400 transition-colors duration-200">
                {service.title}
              </h3>
              <p className="text-zinc-400 text-[11px] sm:text-xs leading-relaxed font-normal">
                {service.description}
              </p>
            </div>

            {/* Linear Style Functional Interactive Callout */}
            <div className="relative z-10 mt-6 pt-3 border-t border-zinc-900/60 flex items-center gap-1.5 text-zinc-500 group-hover:text-white font-mono text-[10px] tracking-wide transition-all duration-300">
              <span>SYSTEM.EXECUTE</span>
              <svg className="w-2.5 h-2.5 transform translate-x-0 group-hover:translate-x-0.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </div>
          </article>
        ))}
      </div>

      {/* Sleek Conveyor Embedded CTA Footer Strip */}
      <footer className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 rounded-xl border border-zinc-800/40 bg-zinc-950/50 backdrop-blur-md">
        <div>
          <p className="text-white font-bold text-xs sm:text-sm tracking-tight">
            Require an isolated system architecture context?
          </p>
          <p className="text-zinc-500 text-[10px] mt-0.5 font-mono">// Our team handles complex infrastructure mapping requests.</p>
        </div>
        <a
          href="#contact"
          className="flex-shrink-0 px-4 py-2 rounded-lg bg-white hover:bg-zinc-200 text-black font-black text-[10px] tracking-wide uppercase transition-all duration-200 active:scale-95 shadow-md"
        >
          Initialize Intake Vector
        </a>
      </footer>

    </div>
  );
}
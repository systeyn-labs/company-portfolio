"use client";

import React, { RefObject } from "react";

export const SERVICES = [
  {
    id: 'ai-agents',
    mono: '// 01.AGENTIC.OS',
    title: 'AI Agents',
    description: 'Autonomous execution layers built for multi-step workflow pipelines.',
  },
  {
    id: 'automation',
    mono: '// 02.INFRA.PIPE',
    title: 'Automation Loops',
    description: 'Systemic data synchronization loops built to eliminate bottlenecks.',
  },
  {
    id: 'custom-software',
    mono: '// 03.ARCH.ENGINE',
    title: 'Custom Architectures',
    description: 'Bare-metal software components engineered for high absolute scale.',
  },
  {
    id: 'saas',
    mono: '// 04.MULTI.TENANT',
    title: 'SaaS Platforms',
    description: 'Production infrastructures deploying live ledgers and identity matrices.',
  },
  {
    id: 'api',
    mono: '// 05.INTEGRATION',
    title: 'API Engineering',
    description: 'Type-safe communication patterns uniting isolated database planes.',
  },
  {
    id: 'consulting',
    mono: '// 06.STRATEGY',
    title: 'AI Advisory',
    description: 'Technical compute optimization mapping and architectural roadmaps.',
  },
];

interface CapabilitiesMatrixProps {
  serviceItemsRef: React.MutableRefObject<HTMLDivElement[]>;
}

export default function CapabilitiesMatrix({ serviceItemsRef }: CapabilitiesMatrixProps) {
  return (
    <>
      {SERVICES.map((service, index) => (
        <div
          key={service.id}
          ref={(el) => {
            if (el) serviceItemsRef.current[index] = el;
          }}
          className="absolute inset-0 w-full h-full flex flex-col items-center justify-center pointer-events-none will-change-transform [transform-style:preserve-3d] opacity-0"
        >
          {/* Flat 14 degree structural matrix angle align with locked floor geometry perspective */}
          <div className="w-full max-w-lg px-6 text-center pointer-events-auto [transform:rotateX(14deg)] transform-gpu origin-center">
            
            {/* Tech Index Marker */}
            <span className="block font-mono text-[9px] tracking-[0.3em] text-zinc-600 mb-3">
              {service.mono}
            </span>

            {/* Pristine Minimalist Typography Header */}
            <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tighter mb-3">
              {service.title}
            </h3>

            {/* Clean Micro Copy Description Drop */}
            <p className="text-zinc-400 font-mono text-[11px] leading-relaxed tracking-normal max-w-sm mx-auto">
              {service.description}
            </p>

            {/* Micro Industrial Execution Line */}
            <div className="mt-6 flex items-center justify-center gap-1.5 text-zinc-600 font-mono text-[9px] tracking-widest">
              <span className="w-1 h-1 rounded-full bg-emerald-500/80 animate-pulse" />
              <span>READY_FOR_DEPLOYMENT</span>
            </div>

          </div>
        </div>
      ))}
    </>
  );
}
'use client';

import { useState } from 'react';

/* ─── Project data ────────────────────────────────────────────── */
const PROJECTS = [
  {
    id: 'nexus-ai',
    category: 'AI Agents',
    title: 'Nexus AI — Intelligent Support Platform',
    subtitle: 'Reduced tier-1 support costs by 74% for a SaaS company.',
    challenge:
      'A fast-growing B2B SaaS company was drowning in repetitive support tickets — their team of 8 agents couldn\'t scale with 40% MoM user growth.',
    solution:
      'We built a multi-agent AI system that triages, resolves, and escalates support queries using company knowledge bases, live product data, and natural language reasoning.',
    stack: ['GPT-4o', 'LangChain', 'Next.js', 'Postgres', 'Redis'],
    results: [
      { metric: '74%', label: 'Cost reduction' },
      { metric: '4 min', label: 'Avg. resolution time' },
      { metric: '98.2%', label: 'Satisfaction score' },
    ],
    gradient: 'from-blue-600 to-violet-600',
    accentColor: 'text-blue-500',
    badgeColor: 'bg-blue-50 text-blue-600 border-blue-100',
  },
  {
    id: 'flowops',
    category: 'Automation',
    title: 'FlowOps — Manufacturing Automation Suite',
    subtitle: 'Automated 14 manual processes for a mid-market manufacturer.',
    challenge:
      'A manufacturing firm had 14 disconnected data entry points across ERP, CRM, and logistics tools — costing 120+ staff-hours weekly.',
    solution:
      'We designed a custom automation layer that orchestrates bi-directional sync, event-triggered workflows, and exception handling across all platforms — zero manual intervention.',
    stack: ['Python', 'n8n', 'FastAPI', 'PostgreSQL', 'Docker'],
    results: [
      { metric: '120 hrs', label: 'Saved per week' },
      { metric: '99.97%', label: 'Process accuracy' },
      { metric: '6 weeks', label: 'Time to delivery' },
    ],
    gradient: 'from-emerald-500 to-teal-600',
    accentColor: 'text-emerald-500',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-100',
  },
  {
    id: 'launchpad',
    category: 'SaaS Development',
    title: 'Launchpad — Recruitment SaaS Platform',
    subtitle: 'Zero to $40k MRR in 5 months post-launch.',
    challenge:
      'A solo founder had a validated recruitment tool idea but no technical co-founder. They needed a production SaaS, fast, without cutting corners on architecture.',
    solution:
      'We designed and built a multi-tenant SaaS with applicant tracking, AI-powered screening, Stripe billing, and a white-label option — production-ready in 11 weeks.',
    stack: ['Next.js', 'Supabase', 'Stripe', 'OpenAI', 'Tailwind'],
    results: [
      { metric: '11 wks', label: 'Launch timeline' },
      { metric: '$40k', label: 'MRR at month 5' },
      { metric: '3 plans', label: 'Billing tiers live' },
    ],
    gradient: 'from-orange-400 to-rose-500',
    accentColor: 'text-orange-500',
    badgeColor: 'bg-orange-50 text-orange-700 border-orange-100',
  },
];

/* ─── Project Card ───────────────────────────────────────────── */
function ProjectCard({ project }: any) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="group rounded-2xl border border-gray-100 bg-white shadow-card hover:shadow-lg overflow-hidden transition-all duration-300">
      {/* Visual Header */}
      <div className={`relative h-44 bg-gradient-to-br ${project.gradient} flex items-end p-6 overflow-hidden`}>
        {/* Abstract grid */}
        <svg className="absolute inset-0 w-full h-full opacity-10" aria-hidden="true">
          <defs>
            <pattern id={`grid-${project.id}`} width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="white" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#grid-${project.id})`} />
        </svg>
        {/* Orb */}
        <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10 blur-2xl" aria-hidden="true" />

        <div className="relative z-10">
          <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full border ${project.badgeColor} bg-white/90 mb-2`}>
            {project.category}
          </span>
          <h3 className="text-white font-bold text-xl leading-snug">{project.title}</h3>
        </div>
      </div>

      {/* Body */}
      <div className="p-6">
        <p className={`text-sm font-medium mb-4 ${project.accentColor}`}>{project.subtitle}</p>

        {/* Results grid */}
        <div className="grid grid-cols-3 gap-3 mb-5 p-4 rounded-xl bg-gray-50">
          {project.results.map((r: any) => (
            <div key={r.label} className="text-center">
              <p className="text-xl font-bold text-gray-900 leading-none">{r.metric}</p>
              <p className="text-xs text-gray-400 mt-1">{r.label}</p>
            </div>
          ))}
        </div>

        {/* Expandable details */}
        <div className={`overflow-hidden transition-all duration-300 ${expanded ? 'max-h-80' : 'max-h-0'}`}>
          <div className="space-y-4 mb-5">
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">The Challenge</p>
              <p className="text-sm text-gray-600 leading-relaxed">{project.challenge}</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">Our Solution</p>
              <p className="text-sm text-gray-600 leading-relaxed">{project.solution}</p>
            </div>
          </div>
        </div>

        {/* Tech stack + toggle */}
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((tech: any) => (
              <span key={tech} className="px-2.5 py-1 rounded-lg bg-gray-100 text-gray-600 text-xs font-medium">
                {tech}
              </span>
            ))}
          </div>
          <button
            onClick={() => setExpanded(!expanded)}
            className={`text-xs font-semibold flex items-center gap-1 transition-colors ${project.accentColor}`}
            aria-expanded={expanded}
            aria-label={expanded ? 'Show less' : 'Read case study'}
          >
            {expanded ? 'Less ↑' : 'Case study ↓'}
          </button>
        </div>
      </div>
    </article>
  );
}

/* ─── Section ────────────────────────────────────────────────── */
export default function Portfolio() {
  return (
    <section id="portfolio" className="section bg-white" aria-label="Portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="label text-blue-500 mb-3">Our Work</p>
          <h2 className="display-lg text-navy mb-5">
            Results our clients<br /> can put in a board deck.
          </h2>
          <p className="body-md text-muted">
            Every project below started with a specific business problem. Here's what we
            built — and what changed because of it.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>

        {/* CTA banner */}
        <div className="text-center">
          <p className="text-muted text-sm mb-4">These are placeholder projects. Real case studies coming soon.</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-navy text-white font-semibold text-sm hover:bg-navy/90 transition-all duration-200 hover:-translate-y-0.5"
          >
            Discuss your project →
          </a>
        </div>
      </div>
    </section>
  );
}
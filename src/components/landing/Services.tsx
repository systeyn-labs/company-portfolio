'use client';

/* ─── Service data ───────────────────────────────────────────── */
const SERVICES = [
  {
    id: 'ai-agents',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    title: 'AI Agents',
    description: 'Purpose-built intelligent agents that handle complex workflows autonomously — from customer support to data analysis and beyond.',
    tag: 'Most Popular',
  },
  {
    id: 'automation',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: 'Automation Solutions',
    description: 'End-to-end process automation that eliminates manual bottlenecks, reduces errors, and gives your team time back for what matters.',
    tag: null,
  },
  {
    id: 'custom-software',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    title: 'Custom Software Development',
    description: 'Bespoke web and backend applications engineered for performance, security, and long-term maintainability.',
    tag: null,
  },
  {
    id: 'saas',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
    title: 'SaaS Development',
    description: 'From zero to production-ready SaaS: multi-tenant architecture, billing, auth, and dashboards built for scale from day one.',
    tag: null,
  },
  {
    id: 'api',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    ),
    title: 'API Integrations',
    description: 'Connect your tools, data sources, and platforms into a unified ecosystem with robust, well-documented API layers.',
    tag: null,
  },
  {
    id: 'consulting',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
    title: 'AI Consulting',
    description: 'Strategic AI roadmaps and hands-on advisory to help you identify high-impact opportunities and avoid costly detours.',
    tag: null,
  },
];

/* ─── Single Service Card ─────────────────────────────────────── */
function ServiceCard({ service, index }: any) {
  return (
    <article
      className="group relative flex flex-col gap-4 p-6 rounded-2xl border border-gray-100 bg-white shadow-card hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Popular badge */}
      {service.tag && (
        <span className="absolute top-4 right-4 px-2.5 py-1 text-xs font-semibold rounded-full bg-blue-50 text-blue-600 border border-blue-100">
          {service.tag}
        </span>
      )}

      {/* Icon */}
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center text-white flex-shrink-0 shadow-blue group-hover:scale-105 transition-transform duration-300">
        {service.icon}
      </div>

      {/* Text */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed">{service.description}</p>
      </div>

      {/* Hover arrow */}
      <div className="mt-auto pt-2 flex items-center gap-1 text-blue-500 text-sm font-medium opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-1 transition-all duration-300">
        Learn more
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </div>

      {/* Subtle gradient hover overlay */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/[0.02] to-violet-600/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" aria-hidden="true" />
    </article>
  );
}

/* ─── Section ────────────────────────────────────────────────── */
export default function Services() {
  return (
    <section id="services" className="section bg-surface" aria-label="Services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="label text-blue-500 mb-3">What We Build</p>
          <h2 className="display-lg text-navy mb-5">
            Every engagement starts<br /> with the right capability.
          </h2>
          <p className="body-md text-muted">
            We specialize in six high-impact disciplines — each delivered with production-grade
            quality, clear timelines, and measurable outcomes.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-2xl bg-navy border border-navy">
          <p className="text-white font-medium text-lg">
            Not sure which service fits your challenge?
          </p>
          <a
            href="#contact"
            className="flex-shrink-0 px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-semibold text-sm transition-all duration-200 shadow-blue hover:-translate-y-0.5"
          >
            Let's talk →
          </a>
        </div>
      </div>
    </section>
  );
}
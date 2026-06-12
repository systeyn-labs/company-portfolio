'use client';

const PILLARS = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: 'Fast Delivery',
    body: 'We ship working software in weeks, not quarters. Our sprint-based delivery model keeps momentum high and scope creep out.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
      </svg>
    ),
    title: 'Scalable Architecture',
    body: 'Every system we build can handle 10× your current load. Infrastructure decisions made on day one save months of painful rework later.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    title: 'Modern Tech Stack',
    body: 'We build with the tools top-tier engineering teams use: Next.js, Supabase, Python, LLM APIs, and containerized infrastructure.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: 'Security Focused',
    body: 'SOC2-aligned practices, encrypted data at rest and in transit, and rigorous access controls are built into every layer — not bolted on afterward.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
    title: 'Transparent Communication',
    body: 'Weekly progress updates, async Slack access, and no hidden surprises. You always know what we\'re building and why.',
  },
];

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="section relative overflow-hidden bg-navy"
      aria-label="Why choose Systeyn"
    >
      {/* Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-violet-600/10 rounded-full blur-3xl" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="label text-blue-400 mb-3">Why Systeyn</p>
          <h2 className="display-lg text-white mb-5">
            We've engineered out<br /> the reasons projects fail.
          </h2>
          <p className="body-md text-white/50">
            Most software projects fail from poor architecture decisions, unclear communication,
            and underestimated scope. We've built systems to prevent all three.
          </p>
        </div>

        {/* Pillar cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PILLARS.map((pillar, i) => (
            <div
              key={pillar.title}
              className="group p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/8 hover:border-white/20 transition-all duration-300"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-4 group-hover:bg-blue-500/30 transition-colors">
                {pillar.icon}
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{pillar.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{pillar.body}</p>
            </div>
          ))}

          {/* Quote card — spanning 3 cols on desktop */}
          <div className="sm:col-span-2 lg:col-span-3 p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-blue-500/10 to-violet-600/10">
            <blockquote className="max-w-3xl mx-auto text-center">
              <p className="text-white/80 text-xl font-medium leading-relaxed italic mb-4">
                "We don't just ship features. We take ownership of outcomes — and we stay
                until the numbers prove it."
              </p>
              <footer className="text-white/40 text-sm">— Systeyn Engineering Philosophy</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
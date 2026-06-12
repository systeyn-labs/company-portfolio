'use client';

const TESTIMONIALS = [
  {
    id: 1,
    quote:
      "Systeyn delivered a production-ready AI agent in 6 weeks that replaced a 5-person manual process. The ROI conversation was easy after that.",
    author: 'Jordan M.',
    role: 'CTO, Series A SaaS Company',
    avatar: 'JM',
    rating: 5,
    accentColor: 'from-blue-500 to-indigo-600',
  },
  {
    id: 2,
    quote:
      "What I valued most was their communication. I always knew where we stood. No excuses, no delays hidden behind jargon — just honest updates and great work.",
    author: 'Priya S.',
    role: 'Founder, HR Tech Startup',
    avatar: 'PS',
    rating: 5,
    accentColor: 'from-violet-500 to-purple-600',
  },
  {
    id: 3,
    quote:
      "We'd tried two other agencies before Systeyn. The difference was their architecture thinking. They asked questions the others didn't even think to ask.",
    author: 'Marcus O.',
    role: 'VP Engineering, E-commerce Platform',
    avatar: 'MO',
    rating: 5,
    accentColor: 'from-emerald-500 to-teal-600',
  },
  {
    id: 4,
    quote:
      "They automated 14 manual workflows in our ops team and saved us 120 hours per week. The system hasn't gone down once in 8 months.",
    author: 'Leila K.',
    role: 'COO, Manufacturing Group',
    avatar: 'LK',
    rating: 5,
    accentColor: 'from-orange-400 to-rose-500',
  },
  {
    id: 5,
    quote:
      "Systeyn took our vague AI idea and turned it into a working product within a quarter. The team felt like an extension of our own engineering org.",
    author: 'David T.',
    role: 'CEO, Fintech Startup',
    avatar: 'DT',
    rating: 5,
    accentColor: 'from-blue-600 to-violet-600',
  },
  {
    id: 6,
    quote:
      "Their code quality is exceptional. After the project ended, our internal team could maintain and extend everything without issue — that says everything.",
    author: 'Anya R.',
    role: 'Head of Product, B2B Platform',
    avatar: 'AR',
    rating: 5,
    accentColor: 'from-indigo-500 to-blue-600',
  },
];

function StarRating({ count = 5 }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-amber-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ t }: any) {
  return (
    <figure className="group flex flex-col gap-5 p-6 rounded-2xl border border-gray-100 bg-white shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <StarRating count={t.rating} />
      <blockquote className="flex-1">
        <p className="text-gray-700 text-sm leading-relaxed">"{t.quote}"</p>
      </blockquote>
      <figcaption className="flex items-center gap-3 pt-2 border-t border-gray-100">
        <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.accentColor} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}
          aria-hidden="true">
          {t.avatar}
        </div>
        <div>
          <p className="font-semibold text-gray-900 text-sm">{t.author}</p>
          <p className="text-xs text-muted">{t.role}</p>
        </div>
      </figcaption>
    </figure>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="section bg-surface" aria-label="Client testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="label text-blue-500 mb-3">Social Proof</p>
          <h2 className="display-lg text-navy mb-5">
            Clients who've seen the difference.
          </h2>
          <p className="body-md text-muted">
            These are placeholder testimonials reflecting the type of outcomes we target.
            Real client quotes will appear here as the portfolio grows.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.id} t={t} />
          ))}
        </div>

        {/* Social proof footer */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-center">
          {[
            { value: '50+', label: 'Projects completed' },
            { value: '98%', label: 'Satisfaction rate' },
            { value: '40+', label: 'Happy clients' },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-bold text-navy tracking-tight">{s.value}</p>
              <p className="text-sm text-muted mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
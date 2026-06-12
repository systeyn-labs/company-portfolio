'use client';

const STEPS = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We map your business context, technical landscape, and goals in a structured kick-off. No assumptions, just facts.',
    duration: '1 week',
    color: 'from-blue-500 to-blue-600',
    textColor: 'text-blue-500',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-100',
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'We draft a solution blueprint — architecture decisions, technology choices, and a delivery roadmap with milestone gates.',
    duration: '1 week',
    color: 'from-indigo-500 to-indigo-600',
    textColor: 'text-indigo-500',
    bgColor: 'bg-indigo-50',
    borderColor: 'border-indigo-100',
  },
  {
    number: '03',
    title: 'Design',
    description: 'UX wireframes and interactive prototypes let you see the product before a single line of production code is written.',
    duration: '1–2 weeks',
    color: 'from-violet-500 to-violet-600',
    textColor: 'text-violet-500',
    bgColor: 'bg-violet-50',
    borderColor: 'border-violet-100',
  },
  {
    number: '04',
    title: 'Development',
    description: 'Two-week sprints with continuous deployment to staging. You review, give feedback, and see progress in real time.',
    duration: '4–8 weeks',
    color: 'from-purple-500 to-purple-600',
    textColor: 'text-purple-500',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-100',
  },
  {
    number: '05',
    title: 'Testing',
    description: 'Automated test suites, security audits, performance benchmarks, and manual QA before anything touches production.',
    duration: '1–2 weeks',
    color: 'from-rose-500 to-rose-600',
    textColor: 'text-rose-500',
    bgColor: 'bg-rose-50',
    borderColor: 'border-rose-100',
  },
  {
    number: '06',
    title: 'Deployment',
    description: 'Zero-downtime releases with rollback capabilities, monitoring setup, and a handover session for your team.',
    duration: '1 week',
    color: 'from-orange-500 to-orange-600',
    textColor: 'text-orange-500',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-100',
  },
  {
    number: '07',
    title: 'Support',
    description: 'Post-launch monitoring, bug fixes, and iterative improvements — so your product compounds over time, not just at launch.',
    duration: 'Ongoing',
    color: 'from-emerald-500 to-emerald-600',
    textColor: 'text-emerald-500',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-100',
  },
];

export default function Process() {
  return (
    <section id="process" className="section bg-surface" aria-label="Our process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="label text-blue-500 mb-3">How We Work</p>
          <h2 className="display-lg text-navy mb-5">
            A process built for<br /> predictable outcomes.
          </h2>
          <p className="body-md text-muted">
            Every step is designed to reduce uncertainty, keep you informed, and ship
            software that works the first time.
          </p>
        </div>

        {/* Desktop: horizontal scrollable timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connector line */}
            <div className="absolute top-10 left-10 right-10 h-px bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500" aria-hidden="true" />

            <div className="grid grid-cols-7 gap-4">
              {STEPS.map((step) => (
                <div key={step.number} className="relative flex flex-col items-center text-center group">
                  {/* Node */}
                  <div className={`relative z-10 w-10 h-10 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white text-xs font-bold shadow-md mb-5 group-hover:scale-110 transition-transform duration-200`}>
                    {step.number}
                  </div>

                  {/* Card */}
                  <div className={`w-full rounded-xl border ${step.borderColor} ${step.bgColor} p-4 group-hover:shadow-md transition-shadow duration-200`}>
                    <h3 className="font-semibold text-gray-900 text-sm mb-2">{step.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed mb-3">{step.description}</p>
                    <span className={`text-xs font-semibold ${step.textColor}`}>{step.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: vertical list */}
        <div className="lg:hidden space-y-4">
          {STEPS.map((step, i) => (
            <div key={step.number} className="flex gap-4">
              {/* Connector column */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                  {step.number}
                </div>
                {i < STEPS.length - 1 && (
                  <div className="w-px flex-1 my-2 bg-gray-200" aria-hidden="true" />
                )}
              </div>

              {/* Content */}
              <div className={`flex-1 pb-4 rounded-xl border ${step.borderColor} ${step.bgColor} p-4`}>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-gray-900">{step.title}</h3>
                  <span className={`text-xs font-semibold ${step.textColor}`}>{step.duration}</span>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-12 text-center">
          <p className="text-muted text-sm">
            Timelines are estimates. We share a precise project plan after discovery.
          </p>
          <a
            href="#contact"
            className="mt-4 inline-flex items-center gap-2 text-blue-500 font-semibold text-sm hover:text-blue-600 transition-colors"
          >
            Start with a discovery call →
          </a>
        </div>
      </div>
    </section>
  );
}
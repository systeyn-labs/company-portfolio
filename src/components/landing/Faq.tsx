'use client';

import { useState } from 'react';

const FAQS = [
  {
    q: 'How long does a typical project take?',
    a: 'Most projects follow a 10–14 week arc from discovery to deployment — but scope determines pace. A focused AI agent or automation workflow can be live in 4–6 weeks. Complex SaaS platforms generally run 12–20 weeks. We share a detailed timeline after the discovery session.',
  },
  {
    q: 'What does the engagement look like from my side?',
    a: 'You\'ll spend roughly 2–3 hours per week reviewing progress, giving feedback, and approving decisions. We handle the rest. You get a dedicated Slack channel, weekly written updates, and a bi-weekly video sync. No chasing required.',
  },
  {
    q: 'Do you work with early-stage startups or only larger companies?',
    a: 'Both. Our smallest engagements are founder-led startups building their first product. Our largest are mid-market companies with dedicated engineering teams who need specialized AI or automation expertise. We size our approach to match the stage.',
  },
  {
    q: 'Who owns the code and IP when the project is done?',
    a: 'You do — entirely. All code, designs, models, and documentation transfer to you at the end of the project. We sign IP assignment agreements before work begins.',
  },
  {
    q: 'Can you integrate with our existing systems and tech stack?',
    a: 'Yes. Integration work is a core part of what we do. We\'ve connected with major CRMs, ERPs, logistics platforms, payment processors, and custom databases. If there\'s an API, we can work with it.',
  },
  {
    q: 'What happens after the project ships?',
    a: 'We offer a structured 30-day hypercare period included in every engagement. After that, clients can choose monthly retainer support for ongoing improvements, bug fixes, and monitoring — or hand off to their internal team with full documentation and training.',
  },
  {
    q: 'How do you price projects?',
    a: 'Most projects are scoped and priced as fixed-fee engagements based on a detailed requirements document. This protects you from runaway costs. Ongoing retainer work is priced monthly. We don\'t charge hourly.',
  },
  {
    q: 'Do you sign NDAs?',
    a: 'Yes, before any detailed conversation about your business. We\'re happy to sign your NDA or use ours — whichever you\'re more comfortable with.',
  },
];

function FAQItem({ faq, index }: any) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        className="w-full flex items-start justify-between gap-4 py-5 text-left group"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={`faq-answer-${index}`}
        id={`faq-question-${index}`}
      >
        <span className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors text-sm sm:text-base pr-2">
          {faq.q}
        </span>
        <span
          className={`flex-shrink-0 w-7 h-7 rounded-full border border-gray-200 bg-gray-50 group-hover:border-blue-200 group-hover:bg-blue-50 flex items-center justify-center transition-all duration-200 ${open ? 'rotate-45 border-blue-200 bg-blue-50' : ''}`}
          aria-hidden="true"
        >
          <svg className={`w-3.5 h-3.5 transition-colors ${open ? 'text-blue-500' : 'text-gray-400 group-hover:text-blue-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </span>
      </button>

      <div
        id={`faq-answer-${index}`}
        role="region"
        aria-labelledby={`faq-question-${index}`}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <p className="pb-5 text-muted text-sm leading-relaxed pr-12">{faq.a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="section bg-white" aria-label="Frequently asked questions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

          {/* Left — header */}
          <div className="lg:col-span-2">
            <p className="label text-blue-500 mb-3">FAQ</p>
            <h2 className="display-md text-navy mb-5">
              Questions we hear before every project.
            </h2>
            <p className="body-md text-muted mb-8">
              If your question isn't here, book a free consultation — no sales pitch, just
              answers.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold transition-all duration-200 shadow-blue hover:-translate-y-0.5"
            >
              Ask us directly →
            </a>
          </div>

          {/* Right — accordion */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-gray-100 bg-white shadow-sm divide-y-0 px-2">
              {FAQS.map((faq, i) => (
                <FAQItem key={i} faq={faq} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
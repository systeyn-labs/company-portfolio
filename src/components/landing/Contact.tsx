'use client';

import { useState } from 'react';

const BUDGETS = ['< $5k', '$5k – $15k', '$15k – $50k', '$50k+', 'Not sure yet'];
const SERVICES = ['AI Agents', 'Automation', 'Custom Software', 'SaaS Development', 'API Integration', 'AI Consulting'];

export default function Contact() {
  const [form, setForm] = useState({
    name: '', email: '', company: '', budget: '', service: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError]         = useState('');

  const handleChange = (e: any) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError('Please fill in name, email, and message.');
      return;
    }
    setError('');

    /* ── Replace this with your preferred form submission logic ── */
    /* Options: Formspree, Resend, Supabase, custom API route      */
    /* Example Formspree: POST to https://formspree.io/f/YOUR_ID  */

    try {
      // Simulate async submission for demonstration
      await new Promise((res) => setTimeout(res, 800));
      setSubmitted(true);
    } catch {
      setError('Something went wrong. Please email us directly.');
    }
  };

  return (
    <section id="contact" className="section relative overflow-hidden bg-navy" aria-label="Contact Systeyn">
      {/* Orbs */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-violet-600/15 rounded-full blur-3xl" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left — info */}
          <div>
            <p className="label text-blue-400 mb-3">Get in Touch</p>
            <h2 className="display-lg text-white mb-5">
              Let's figure out what<br /> you actually need.
            </h2>
            <p className="body-md text-white/50 mb-10">
              The first conversation is free, unscripted, and focused on your problem — not
              our services. We'll tell you if we're the right fit.
            </p>

            {/* Contact info */}
            <div className="space-y-5">
              <a
                href="mailto:hello@systeyn.com"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group"
                aria-label="Email us at hello@systeyn.com"
              >
                <div className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center group-hover:border-blue-400/40 group-hover:bg-blue-500/10 transition-colors">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <span className="text-sm font-medium">hello@systeyn.com</span>
              </a>

              <a
                href="https://linkedin.com/company/systeyn"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group"
                aria-label="Systeyn on LinkedIn (opens in new tab)"
              >
                <div className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center group-hover:border-blue-400/40 group-hover:bg-blue-500/10 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <span className="text-sm font-medium">linkedin.com/company/systeyn</span>
              </a>
            </div>

            {/* Availability note */}
            <div className="mt-10 flex items-center gap-2.5">
              <span className="relative flex h-3 w-3" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400"></span>
              </span>
              <span className="text-sm text-white/50">Currently accepting new projects for Q3 2025</span>
            </div>
          </div>

          {/* Right — form */}
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-12 gap-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-white font-bold text-xl">Message received!</h3>
                <p className="text-white/50 text-sm">We'll be in touch within one business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <h3 className="text-white font-semibold text-lg mb-6">Book a Free Consultation</h3>

                {/* Name + email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-medium text-white/50 mb-1.5">
                      Full name <span aria-hidden="true" className="text-blue-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder-white/25 text-sm focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-medium text-white/50 mb-1.5">
                      Work email <span aria-hidden="true" className="text-blue-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder-white/25 text-sm focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="contact-company" className="block text-xs font-medium text-white/50 mb-1.5">Company</label>
                  <input
                    id="contact-company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Acme Inc."
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder-white/25 text-sm focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all duration-200"
                  />
                </div>

                {/* Service + Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-service" className="block text-xs font-medium text-white/50 mb-1.5">Service needed</label>
                    <select
                      id="contact-service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white text-sm focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all duration-200 appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-gray-900">Select a service</option>
                      {SERVICES.map((s) => (
                        <option key={s} value={s} className="bg-gray-900">{s}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="contact-budget" className="block text-xs font-medium text-white/50 mb-1.5">Approximate budget</label>
                    <select
                      id="contact-budget"
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white text-sm focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all duration-200 appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-gray-900">Select a range</option>
                      {BUDGETS.map((b) => (
                        <option key={b} value={b} className="bg-gray-900">{b}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-medium text-white/50 mb-1.5">
                    What are you trying to solve? <span aria-hidden="true" className="text-blue-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe your challenge or idea in plain language. No jargon needed."
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder-white/25 text-sm focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all duration-200 resize-none"
                  />
                </div>

                {error && (
                  <p className="text-rose-400 text-xs" role="alert">{error}</p>
                )}

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-semibold text-sm transition-all duration-200 shadow-blue hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent"
                >
                  Send — it's free →
                </button>

                <p className="text-center text-white/30 text-xs">
                  No spam. No sales calls without permission. We respond within 24 hours.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
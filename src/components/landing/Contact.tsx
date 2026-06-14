"use client";

import React, { useState } from "react";

const BUDGETS = ["< $5k", "$5k – $15k", "$15k – $50k", "$50k+"];
const SERVICES = ["AI Agents", "Automation", "Custom Software", "SaaS Development", "API Integration", "AI Consulting"];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSelect = (field: "budget" | "service", value: string) => {
    setForm((prev) => ({ ...prev, [field]: prev[field] === value ? "" : value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError("Required telemetry channels missing: Name, Email, and Scope Description.");
      return;
    }
    setError("");
    setIsSubmitting(true);

    try {
      // High-fidelity production simulation delay
      await new Promise((res) => setTimeout(res, 1200));
      setSubmitted(true);
    } catch {
      setError("Ingestion pipeline error. Please transmit requirements directly via email.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="contact" 
      className="w-full bg-[#030508] border-t border-white/2 text-white relative py-24 lg:py-32 overflow-hidden select-none"
      aria-label="System Intake Channel"
    >
      {/* Structural Crosshair Coordinates */}
      <div className="absolute top-12 left-12 font-mono text-[7px] text-zinc-800 tracking-widest hidden lg:block">// GRID_REF_0x94</div>
      <div className="absolute bottom-12 right-12 font-mono text-[7px] text-zinc-800 tracking-widest hidden lg:block">// END_OF_NODE</div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

          {/* --- LEFT PANEL: DIRECT TRANSMISSION HUD --- */}
          <div className="lg:col-span-5 space-y-10 lg:sticky lg:top-24">
            <div className="space-y-4">
              <span className="text-[9px] tracking-[0.3em] text-blue-500 uppercase font-mono block">
                Inbound Intake // Protocol 01
              </span>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white leading-[1.15]">
                Let's scope your architecture.
              </h2>
              <p className="text-zinc-500 text-xs sm:text-sm font-light leading-relaxed max-w-md">
                Initial architectural reviews are unscripted, direct, and zero-obligation. We align strictly on engineering logic and operational feasibility—never on sales pitches.
              </p>
            </div>

            {/* Direct Communication Channels */}
            <div className="space-y-3 pt-4 border-t border-white/[0.03]">
              <a
                href="mailto:hello@systeyn.com"
                className="group flex items-center gap-4 p-3 bg-[#05080c]/30 border border-white/[0.02] hover:border-white/[0.06] rounded-xl transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-lg bg-[#030508] border border-white/[0.04] flex items-center justify-center group-hover:border-blue-500/20 group-hover:text-blue-400 transition-colors text-zinc-500">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div className="space-y-0.5">
                  <span className="block text-[8px] font-mono tracking-wider text-zinc-600 uppercase">Direct Secure Link</span>
                  <span className="text-xs font-medium text-zinc-400 group-hover:text-zinc-200 transition-colors">hello@systeyn.com</span>
                </div>
              </a>

              <a
                href="https://linkedin.com/company/systeyn"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-3 bg-[#05080c]/30 border border-white/[0.02] hover:border-white/[0.06] rounded-xl transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-lg bg-[#030508] border border-white/[0.04] flex items-center justify-center group-hover:border-blue-500/20 group-hover:text-blue-400 transition-colors text-zinc-500">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/>
                  </svg>
                </div>
                <div className="space-y-0.5">
                  <span className="block text-[8px] font-mono tracking-wider text-zinc-600 uppercase">Network Terminal</span>
                  <span className="text-xs font-medium text-zinc-400 group-hover:text-zinc-200 transition-colors">linkedin.com/company/systeyn</span>
                </div>
              </a>
            </div>

            {/* Dynamic Allocation Note */}
            <div className="flex items-center gap-3 p-3 rounded-lg bg-[#05080c]/20 border border-white/[0.01] w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] font-mono tracking-wide text-zinc-500 uppercase">Pipeline Status: Accepting Nodes for Q3 2026</span>
            </div>
          </div>

          {/* --- RIGHT PANEL: HIGH-FIDELITY INTAKE CONSOLE --- */}
          <div className="lg:col-span-7 bg-[#05080c]/20 border border-white/[0.03] rounded-2xl p-6 sm:p-10 backdrop-blur-md relative shadow-[inset_0_1px_30px_rgba(255,255,255,0.01)]">
            
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-20 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <div className="space-y-1">
                  <h3 className="font-mono text-xs tracking-wider uppercase text-white">Transmission Complete</h3>
                  <p className="text-zinc-500 text-xs max-w-xs leading-relaxed">
                    Intake blueprint compiled correctly. Engineering response vector scheduled within 24 operational hours.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-8">
                
                {/* Row 1: Text Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="block font-mono text-[9px] tracking-wider text-zinc-500 uppercase">
                      Identity Name <span className="text-blue-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      className="w-full px-4 py-3 rounded-xl bg-[#030508] border border-white/[0.04] text-white placeholder-zinc-700 text-xs font-light focus:outline-none focus:border-blue-500/40 focus:ring-1 focus:ring-blue-500/10 transition-all duration-200"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="block font-mono text-[9px] tracking-wider text-zinc-500 uppercase">
                      Routing Email <span className="text-blue-500">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#030508] border border-white/[0.04] text-white placeholder-zinc-700 text-xs font-light focus:outline-none focus:border-blue-500/40 focus:ring-1 focus:ring-blue-500/10 transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Row 2: Corporate Context */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-company" className="block font-mono text-[9px] tracking-wider text-zinc-500 uppercase">Organization / Corporate Context</label>
                  <input
                    id="contact-company"
                    name="company"
                    type="text"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Acme Inc."
                    className="w-full px-4 py-3 rounded-xl bg-[#030508] border border-white/[0.04] text-white placeholder-zinc-700 text-xs font-light focus:outline-none focus:border-blue-500/40 focus:ring-1 focus:ring-blue-500/10 transition-all duration-200"
                  />
                </div>

                {/* Row 3: Service Vector (Custom Chip Grid) */}
                <div className="space-y-3">
                  <span className="block font-mono text-[9px] tracking-wider text-zinc-500 uppercase">Target Capability Requirement</span>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {SERVICES.map((s) => {
                      const isSelected = form.service === s;
                      return (
                        <button
                          key={s}
                          type="button"
                          onClick={() => handleSelect("service", s)}
                          className={`px-3 py-2.5 rounded-lg font-mono text-[10px] text-left border transition-all duration-200 ${
                            isSelected
                              ? "bg-blue-500/10 border-blue-500/30 text-blue-400"
                              : "bg-[#030508] border-white/[0.03] text-zinc-500 hover:border-white/[0.08] hover:text-zinc-300"
                          }`}
                        >
                          {s}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Row 4: Budget Range Matrix */}
                <div className="space-y-3">
                  <span className="block font-mono text-[9px] tracking-wider text-zinc-500 uppercase">Allocated Capital Depth</span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {BUDGETS.map((b) => {
                      const isSelected = form.budget === b;
                      return (
                        <button
                          key={b}
                          type="button"
                          onClick={() => handleSelect("budget", b)}
                          className={`px-3 py-2.5 rounded-lg font-mono text-[10px] text-center border transition-all duration-200 ${
                            isSelected
                              ? "bg-blue-500/10 border-blue-500/30 text-blue-400"
                              : "bg-[#030508] border-white/[0.03] text-zinc-500 hover:border-white/[0.08] hover:text-zinc-300"
                          }`}
                        >
                          {b}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Row 5: Operational Challenge / Message Block */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="block font-mono text-[9px] tracking-wider text-zinc-500 uppercase">
                    Problem Scope Description <span className="text-blue-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe your structural bottleneck, automation objectives, or tech stack constraints in plain terms."
                    className="w-full px-4 py-3 rounded-xl bg-[#030508] border border-white/[0.04] text-white placeholder-zinc-700 text-xs font-light focus:outline-none focus:border-blue-500/40 focus:ring-1 focus:ring-blue-500/10 transition-all duration-200 resize-none leading-relaxed"
                  />
                </div>

                {error && (
                  <p className="text-rose-400 font-mono text-[9px] tracking-wide" role="alert">// ERROR: {error}</p>
                )}

                {/* Submit Trigger Action */}
                <div className="space-y-3 pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-mono text-xs tracking-wider uppercase transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Compiling Transmission..." : "Transmit Inbound Requirements //"}
                  </button>
                  <p className="text-center text-zinc-600 font-mono text-[8px] tracking-widest uppercase">
                    Strict confidentiality enforced // Response frequency &lt; 24H
                  </p>
                </div>

              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
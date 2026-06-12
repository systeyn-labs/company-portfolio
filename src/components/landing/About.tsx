'use client';

const VALUES = [
  { emoji: '🎯', title: 'Outcomes over output', body: 'We measure success by business results, not lines of code or features shipped.' },
  { emoji: '🔍', title: 'Radical transparency', body: 'No surprises. We communicate early, often, and clearly — especially when things get hard.' },
  { emoji: '🏗️', title: 'Built to last',         body: 'We write code we\'d be proud to inherit. Clean, documented, and designed for the team that comes after.' },
  { emoji: '⚡', title: 'Move with purpose',     body: 'Speed matters, but not at the cost of quality. We move fast because we prepare well.' },
];

export default function About() {
  return (
    <section id="about" className="section bg-white" aria-label="About Systeyn">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left — text content */}
          <div>
            <p className="label text-blue-500 mb-3">About Us</p>
            <h2 className="display-lg text-navy mb-6">
              We exist to make advanced technology accessible to every serious business.
            </h2>

            <div className="space-y-5 text-muted body-md leading-relaxed">
              <p>
                Systeyn was founded on a frustration: too many businesses with real problems
                were being priced out of quality software, or handed generic solutions that
                didn't fit their constraints.
              </p>
              <p>
                We built a team that combines the rigor of enterprise engineering with the
                speed of a startup studio. The result: software that earns its place in
                your operations on day one.
              </p>
              <p>
                We work with founders, operators, and enterprise teams who care about getting
                it right — not just getting it done.
              </p>
            </div>

            {/* Mission / Vision cards */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-blue-50 border border-blue-100">
                <p className="label text-blue-500 mb-2">Mission</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Democratize access to elite software engineering and AI — so every ambitious
                  business can compete on capability.
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-violet-50 border border-violet-100">
                <p className="label text-violet-500 mb-2">Vision</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  A world where any company can operate with the technological leverage
                  previously reserved for the Fortune 500.
                </p>
              </div>
            </div>

            {/* Trust indicators */}
            <div className="mt-10 flex flex-wrap gap-4">
              {[
                { icon: '🌍', text: 'Remote-first team' },
                { icon: '🤝', text: 'Long-term partnerships' },
                { icon: '📋', text: 'NDA & IP protection' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                  <span aria-hidden="true">{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>
          </div>

          {/* Right — values + visual */}
          <div>
            {/* Abstract brand visual */}
            <div className="relative rounded-2xl overflow-hidden bg-navy p-8 mb-8">
              <div className="absolute -top-16 -right-16 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" aria-hidden="true" />
              <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-violet-600/20 rounded-full blur-3xl" aria-hidden="true" />
              <div className="relative z-10 text-center py-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-violet-600 shadow-blue mb-4">
                  <svg width="32" height="32" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                    <path d="M3 9h12M9 3v12M3 5l12 8M15 5L3 13" stroke="white" strokeWidth="1.75" strokeLinecap="round"/>
                  </svg>
                </div>
                <p className="text-white text-3xl font-bold tracking-tight">Systeyn</p>
                <p className="text-white/40 text-sm mt-1">Engineering tomorrow, today.</p>
              </div>
            </div>

            {/* Values */}
            <div className="space-y-3">
              <p className="label text-gray-400 mb-4">Our Values</p>
              {VALUES.map((v) => (
                <div key={v.title} className="flex gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors group">
                  <span className="text-2xl flex-shrink-0 mt-0.5" aria-hidden="true">{v.emoji}</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm mb-0.5">{v.title}</h3>
                    <p className="text-sm text-muted">{v.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
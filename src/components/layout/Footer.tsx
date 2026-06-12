import Link from 'next/link';

const NAV_COLS = [
  {
    heading: 'Services',
    links: [
      { label: 'AI Agents',            href: '#services' },
      { label: 'Automation Solutions', href: '#services' },
      { label: 'Custom Software',      href: '#services' },
      { label: 'SaaS Development',     href: '#services' },
      { label: 'API Integrations',     href: '#services' },
      { label: 'AI Consulting',        href: '#services' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About Us',    href: '#about' },
      { label: 'Portfolio',   href: '#portfolio' },
      { label: 'Process',     href: '#process' },
      { label: 'Contact',     href: '#contact' },
    ],
  },
  {
    heading: 'Connect',
    links: [
      { label: 'LinkedIn',    href: 'https://linkedin.com/company/systeyn', external: true },
      { label: 'hello@systeyn.com', href: 'mailto:hello@systeyn.com', external: true },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy border-t border-white/5" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-5" aria-label="Systeyn home">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path d="M3 9h12M9 3v12M3 5l12 8M15 5L3 13" stroke="white" strokeWidth="1.75" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="font-bold text-xl tracking-tight text-white">Systeyn</span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed mb-6">
              AI solutions, automation, and custom software for businesses that mean business.
            </p>
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
              </span>
              <span className="text-xs text-white/30">Accepting new projects</span>
            </div>
          </div>

          {/* Nav columns */}
          <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {NAV_COLS.map((col) => (
              <div key={col.heading}>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-4">{col.heading}</h3>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        target='_blank'
                        rel='noopener noreferrer'
                        className="text-sm text-white/50 hover:text-white transition-colors"
                        aria-label={`${link.label} (opens in new tab)`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs">
            © {year} Systeyn. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-white/25 hover:text-white/50 text-xs transition-colors">Privacy Policy</Link>
            <Link href="/terms"   className="text-white/25 hover:text-white/50 text-xs transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
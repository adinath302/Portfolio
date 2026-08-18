import React, { useState } from 'react';
import AnimatedThemeToggler from './AnimatedThemeToggler';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Résumé', href: '#resume' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-[var(--border)] bg-[var(--bg)]/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2 font-mono text-base font-bold tracking-tight text-[var(--text)]">
          <span className="text-[var(--accent)]">&gt;_</span>
          adinath<span className="text-[var(--accent)]">.dev</span>
        </a>

        <div className="flex items-center gap-6">
          <ul className="hidden items-center gap-6 sm:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <AnimatedThemeToggler />

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 sm:hidden"
          >
            <span className={`h-0.5 w-5 bg-[var(--text)] transition-transform ${open ? 'translate-y-[4px] rotate-45' : ''}`} />
            <span className={`h-0.5 w-5 bg-[var(--text)] transition-transform ${open ? '-translate-y-[4px] -rotate-45' : ''}`} />
          </button>
        </div>
      </div>

      {open && (
        <ul className="border-t border-[var(--border)] bg-[var(--bg)] px-6 py-2 sm:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-base font-medium text-[var(--text)]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

import React from 'react';
import { FiMail, FiGithub, FiLinkedin, FiTwitter, FiArrowUpRight } from 'react-icons/fi';

const Contact = () => {
  const emailAddress = 'adinathgaware23072003@gmail.com';

  const links = [
    {
      label: 'GitHub',
      value: 'adinath302',
      href: 'https://github.com/adinath302',
      icon: FiGithub,
    },
    {
      label: 'LinkedIn',
      value: 'adinath-gaware',
      href: 'https://linkedin.com/in/adinath-gaware-97a68225a/',
      icon: FiLinkedin,
    },
    {
      label: 'X',
      value: '@Adinath302',
      href: 'https://x.com/Adinath302',
      icon: FiTwitter,
    },
  ];

  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      <div className="flex items-center gap-3">
        <span className="font-mono text-lg text-[var(--accent)]">05.</span>
        <h2 className="text-sm font-bold uppercase tracking-[0.25em] text-[var(--text)]">
          Contact
        </h2>
        <span className="hidden h-px flex-1 bg-[var(--border)] sm:block" />
      </div>
      <h3 className="mt-8 text-3xl font-bold tracking-tight text-[var(--text)] md:text-4xl">
        Let's build something great together.
      </h3>
      <p className="mt-3 text-[var(--muted)]">
        Based in India, working worldwide. I'll get back to you within 24
        hours.
      </p>

      <div className="mx-auto mt-10 max-w-xl space-y-3">
        <a
          href={`mailto:${emailAddress}`}
          className="glass flex items-center justify-between rounded-xl p-4 transition-colors hover:border-[var(--accent)]"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--accent)]">
              <FiMail className="h-4 w-4" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--muted)]">
                Email
              </span>
              <span className="text-sm font-medium text-[var(--text)]">
                {emailAddress}
              </span>
            </div>
          </div>
          <FiArrowUpRight className="h-4 w-4 text-[var(--muted)]" />
        </a>

        {links.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass flex items-center justify-between rounded-xl p-4 transition-colors hover:border-[var(--accent)]"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--secondary)]">
                  <Icon className="h-4 w-4" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--muted)]">
                    {link.label}
                  </span>
                  <span className="text-sm font-medium text-[var(--text)]">
                    {link.value}
                  </span>
                </div>
              </div>
              <FiArrowUpRight className="h-4 w-4 text-[var(--muted)]" />
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Contact;

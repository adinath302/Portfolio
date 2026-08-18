import React from 'react';
import { FiGithub, FiLinkedin, FiInstagram, FiTwitter } from 'react-icons/fi';

const socialLinks = [
  { id: 'github', url: 'https://github.com/adinath302', icon: FiGithub },
  {
    id: 'linkedin',
    url: 'https://linkedin.com/in/adinath-gaware-97a68225a/',
    icon: FiLinkedin,
  },
  { id: 'instagram', url: 'https://instagram.com/adinath.codes', icon: FiInstagram },
  { id: 'twitter', url: 'https://x.com/Adinath302', icon: FiTwitter },
];

const Footer = () => {
  return (
    <footer className="mx-auto max-w-5xl px-6 py-10">
      <div className="flex flex-col items-center justify-between gap-6 border-t border-[var(--border)] pt-8 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="text-sm font-semibold text-[var(--text)]">
            © 2026 Adinath Gaware
          </p>
          <p className="mt-0.5 text-xs text-[var(--muted)]">
            Built with React & Tailwind CSS
          </p>
        </div>

        <div className="flex items-center gap-5">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.id}
                className="text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
              >
                <Icon className="h-[18px] w-[18px]" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

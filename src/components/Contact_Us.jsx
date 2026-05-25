import React, { useState } from 'react';
import PortfolioStore from './useStore';
import { motion } from 'framer-motion';

const Contact = () => {
  const theme = PortfolioStore((state) => state.theme);
  const [copied, setCopied] = useState(false);

  // Unified Architecture Color Mapping
  const labelColor = theme ? 'text-emerald-600' : 'text-emerald-400';
  const textColor = theme ? 'text-slate-900' : 'text-slate-100';
  const subTextColor = theme ? 'text-slate-500' : 'text-slate-400';
  const cardBg = theme ? 'bg-slate-50 border-slate-100' : 'bg-white/[0.01] border-white/5';
  const iconBoxBg = theme ? 'bg-white border-slate-200/60 shadow-sm text-slate-700' : 'bg-white/[0.03] border-white/5 text-slate-300';

  const emailAddress = 'adinathgaware23072003@gmail.com';

  const handleEmailClick = (e) => {
    // Copy to clipboard fallback
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);

    // Automatically reset the "Copied!" text back to normal after 2 seconds
    setTimeout(() => setCopied(false), 2000);
  };

  const links = [
    {
      id: '02',
      label: 'Github',
      value: 'adinath302',
      href: 'https://github.com/adinath302',
      icon: (className) => (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.48,0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.0.069-.608 1.003.705 1.531 1.81 1.531 1.81.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
        </svg>
      )
    },
    {
      id: '03',
      label: 'Linkedin',
      value: 'adinath-gaware',
      href: 'https://linkedin.com/in/adinath-gaware-97a68225a/',
      icon: (className) => (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      )
    },
    {
      id: '04',
      label: 'X',
      value: '@Adinath302',
      href: 'https://x.com/Adinath302',
      icon: (className) => (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      )
    },
  ];

  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 md:px-8 py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">

        {/* Left Side */}
        <div className="md:col-span-1 space-y-3">
          <h2 className={`t-h-label ${labelColor}`}>Get In Touch</h2>
          <div className="space-y-1">
            <h3 className={`t-h3 ${textColor}`}>Available for projects</h3>
            <p className={`t-body ${subTextColor}`}>
              Based in India, working worldwide. Let's engineer something clean together.
            </p>
          </div>
          <div className="hidden md:block pt-4">
            <div className={`h-[1px] w-24 bg-gradient-to-r ${theme ? 'from-slate-200' : 'from-white/10'} to-transparent`} />
          </div>
        </div>

        {/* Right Side */}
        <div className="md:col-span-2 flex flex-col gap-3">

          {/* Isolated Email Button Design for Robust Event Handling */}
          <a
            target="_blank"
            href={`mailto:${emailAddress}`}
            onClick={handleEmailClick}
            className={`group flex items-center justify-between p-4 rounded-xl border ${cardBg} hover:scale-[1.01] transition-all duration-300 cursor-pointer`}
          >
            <div className="flex items-center gap-4">
              <div className={`w-10 h-10 flex items-center justify-center rounded-lg border group-hover:text-emerald-500 group-hover:border-emerald-500/20 transition-colors duration-300 ${iconBoxBg}`}>
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>

              <div className="flex flex-col">
                <span className={`t-caption font-bold tracking-wider uppercase opacity-60 ${subTextColor}`}>
                  {copied ? 'Success' : 'Email'}
                </span>
                <span className={`t-small font-medium transition-colors duration-200 ${copied ? 'text-emerald-500' : textColor} group-hover:text-emerald-500`}>
                  {copied ? 'Email Copied to Clipboard!' : emailAddress}
                </span>
              </div>
            </div>

            <span className={`t-caption font-mono tracking-tight transition-colors duration-200 ${subTextColor} group-hover:text-emerald-400/80`}>
              {copied ? '// ✓' : '// 01'}
            </span>
          </a>

          {/* Social Links Loop */}
          {links.map((link) => {
            return (
              <a
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className={`group flex items-center justify-between p-4 rounded-xl border ${cardBg} hover:scale-[1.01] transition-all duration-300`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 flex items-center justify-center rounded-lg border group-hover:text-emerald-500 group-hover:border-emerald-500/20 transition-colors duration-300 ${iconBoxBg}`}>
                    {link.icon("w-4 h-4")}
                  </div>

                  <div className="flex flex-col">
                    <span className={`t-caption font-bold tracking-wider uppercase opacity-60 ${subTextColor}`}>
                      {link.label}
                    </span>
                    <span className={`t-small font-medium transition-colors duration-200 ${textColor} group-hover:text-emerald-500`}>
                      {link.value}
                    </span>
                  </div>
                </div>

                <span className={`t-caption font-mono tracking-tight transition-colors duration-200 ${subTextColor} group-hover:text-emerald-400/80`}>
                  // {link.id}
                </span>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Contact;
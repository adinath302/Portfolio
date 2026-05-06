import React from 'react';
import PortfolioStore from './useStore';
import { FaGithub, FaLinkedin, FaXTwitter, FaEnvelope } from 'react-icons/fa6';

const Contact = () => {
  const theme = PortfolioStore((state) => state.theme);

  const textColor = theme ? 'text-slate-900' : 'text-slate-100';
  const subTextColor = theme ? 'text-slate-500' : 'text-slate-400';
  const borderColor = theme ? 'border-slate-200' : 'border-white/10';

  const links = [
    { id: '01', label: 'Email', value: 'adinath@example.com', href: 'mailto:adinath@example.com' },
    { id: '02', label: 'Github', value: 'adinath302', href: 'https://github.com/adinath302' },
    { id: '03', label: 'Linkedin', value: 'adinath-gaware', href: 'https://linkedin.com/in/adinath-gaware' },
  ];

  return (
    <section id="contact" className="max-w-5xl mx-auto px-8 md:px-12 py-16">
      <div className="flex gap-10 md:gap-20">
        
        {/* Vertical Title Sidebar */}
        <div className="flex flex-col items-center">
          <span className={`rotate-180 [writing-mode:vertical-lr] text-[10px] font-bold uppercase tracking-[0.4em] ${subTextColor} opacity-50`}>
            Contact Details
          </span>
          <div className={`w-[1px] flex-grow mt-4 bg-gradient-to-b from-green-500/50 to-transparent`} />
        </div>

        {/* Content Area */}
        <div className="flex-grow space-y-8">
          <div className="space-y-1">
            <h3 className={`text-[13px] font-bold uppercase tracking-widest text-green-500`}>
              Available for projects
            </h3>
            <p className={`text-[12px] ${subTextColor}`}>Based in India, working worldwide.</p>
          </div>

          <div className="flex flex-col gap-6">
            {links.map((link) => (
              <a 
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-start gap-4 transition-all"
              >
                <span className={`text-[9px] font-mono mt-1 ${subTextColor} group-hover:text-green-500`}>
                  {link.id}
                </span>
                <div className="flex flex-col">
                  <span className={`text-[14px] font-semibold uppercase tracking-wide ${subTextColor} mb-0.5`}>
                    {link.label}
                  </span>
                  <span className={`text-[14px] font-medium border-b border-transparent group-hover:border-green-500/30 transition-all ${textColor}`}>
                    {link.value}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
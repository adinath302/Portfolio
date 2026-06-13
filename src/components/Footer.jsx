import React from 'react';
import PortfolioStore from './useStore';
import { FaGithub, FaLinkedin, FaInstagram, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  const theme = PortfolioStore((state) => state.theme);

  // Global Design Tokens
  const textColor = theme ? 'text-slate-900' : 'text-slate-100';
  const subTextColor = theme ? 'text-slate-500' : 'text-slate-400';
  const borderColor = theme ? 'border-slate-200/60' : 'border-white/5';

  // Explicitly mapping hover states to guarantee static class parsing
  const iconLinkColor = theme
    ? 'text-slate-400 hover:text-emerald-600'
    : 'text-slate-500 hover:text-emerald-400';

  const socialLinks = [
    { id: 'github', url: 'https://github.com/adinath302', icon: FaGithub },
    {
      id: 'linkedin',
      url: 'https://linkedin.com/in/adinath-gaware-97a68225a/',
      icon: FaLinkedin,
    },
    { id: 'instagram', url: 'https://instagram.com/adinath.codes', icon: FaInstagram },
    { id: 'twitter', url: 'https://x.com/Adinath302', icon: FaXTwitter },
  ];

  return (
    <footer className={`max-w-5xl mx-auto px-6 md:px-8 py-8 md:py-12 border-t ${borderColor}`}>
      <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
        {/* Left Side: Professional Metadata */}
        <div className="flex flex-col items-center sm:items-start space-y-1 text-center sm:text-left">
          <p className={`t-small font-semibold tracking-tight ${textColor}`}>© 2026 Adinath Gaware</p>
          <p className={`t-caption ${subTextColor} font-normal`}>
            Engineered with React & Tailwind CSS
          </p>
        </div>


        {/* Right Side: Social Icons */}
        <div className="flex items-center gap-5">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors duration-200 ${iconLinkColor}`}
              >
                <Icon className="w-[18px] h-[18px]" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;


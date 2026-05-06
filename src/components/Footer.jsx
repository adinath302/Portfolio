import React from 'react';
import PortfolioStore from './useStore';
import { FaGithub, FaLinkedin, FaInstagram, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  const theme = PortfolioStore((state) => state.theme);

  // Consistent color palette
  const textColor = theme ? 'text-slate-900' : 'text-white';
  const subTextColor = theme ? 'text-slate-500' : 'text-slate-400';
  const borderColor = theme ? 'border-slate-100' : 'border-white/5';

  return (
    <footer className={`max-w-5xl mx-auto px-8 md:px-12 py-8 border-t ${borderColor}`}>
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left Side: Copyright & Tech */}
        <div className="flex flex-col items-center md:items-start space-y-1">
          <p className={`text-[14px] font-medium ${textColor}`}>
            © 2026 Adinath Gaware
          </p>
          <p className={`text-[12px] ${subTextColor}`}>
            Built with React & Tailwind CSS
          </p>
        </div>

        {/* Right Side: Social Links - Minimalist style */}
        <div className="flex gap-6">
          <a href="https://github.com/adinath302" target="_blank" rel="noreferrer" 
             className={`${subTextColor} hover:${textColor} transition-colors duration-300`}>
            <FaGithub className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com/in/adinath-gaware-97a68225a/" target="_blank" rel="noreferrer" 
             className={`${subTextColor} hover:${textColor} transition-colors duration-300`}>
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a href="https://instagram.com/adinath.codes" target="_blank" rel="noreferrer" 
             className={`${subTextColor} hover:${textColor} transition-colors duration-300`}>
            <FaInstagram className="w-5 h-5" />
          </a>
          <a href="https://x.com/Adinath302" target="_blank" rel="noreferrer" 
             className={`${subTextColor} hover:${textColor} transition-colors duration-300`}>
            <FaXTwitter className="w-5 h-5" />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import PortfolioStore from './useStore';
import { FaGithub, FaLinkedin, FaInstagram, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  const theme = PortfolioStore((state) => state.theme);
  return (
    <footer className='px-6 p-0 border-t border-gray-800 animate-slideUp flex flex-col items-center'>
      <div className='flex gap-6 mb-4'>
        <a href='https://github.com/adinath302' target='_blank' rel='noopener noreferrer' className={`p-3 ${theme ? "bg-white/20 hover:bg-white/30 text-black hover:text-black" : "bg-gray-900/50 hover:bg-gray-800/50 text-white hover:text-gray-200"} rounded-xl transition-all duration-300 hover:scale-110 group animate-bounce-slow`}>
          <FaGithub className='w-5 h-5 group-hover:rotate-12 transition-transform duration-300' />
        </a>
        <a href='https://www.linkedin.com/in/adinath-gaware-97a68225a/' target='_blank' rel='noopener noreferrer' className={`p-3 ${theme ? "bg-white/20 hover:bg-white/30 text-black hover:text-black" : "bg-gray-900/50 hover:bg-gray-800/50 text-white hover:text-gray-200"} rounded-xl transition-all duration-300 hover:scale-110 group animate-pulse-slow`}>
          <FaLinkedin className='w-5 h-5 group-hover:-rotate-12 transition-transform duration-300' />
        </a>
        <a href='https://instagram.com/adinath.codes' target='_blank' rel='noopener noreferrer' className={`p-3 ${theme ? "bg-white/20 hover:bg-white/30 text-black hover:text-black" : "bg-gray-900/50 hover:bg-gray-800/50 text-white hover:text-gray-200"} rounded-xl transition-all duration-300 hover:scale-110 group animate-bounce-slow`}>
          <FaInstagram className='w-5 h-5 group-hover:rotate-12 transition-transform duration-300' />
        </a>
        <a href='https://x.com/Adinath302' target='_blank' rel='noopener noreferrer' className={`p-3 ${theme ? "bg-white/20 hover:bg-white/30 text-black hover:text-black" : "bg-gray-900/50 hover:bg-gray-800/50 text-white hover:text-gray-200"} rounded-xl transition-all duration-300 hover:scale-110 group animate-pulse-slow`}>
          <FaXTwitter className='w-5 h-5 group-hover:-rotate-12 transition-transform duration-300' />
        </a>
      </div>
      <p className={`${theme ? 'text-black' : 'text-white'} text-center text-sm animate-pulse`}>© 2026 Adinath Gaware. Built with React & Tailwind.</p>
    </footer>
  );
};

export default Footer;

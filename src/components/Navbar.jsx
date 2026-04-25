import React from 'react'
import { motion, useScroll } from 'framer-motion';
import AnimatedThemeToggler from './AnimatedThemeToggler';
import PortfolioStore from './useStore';

const Navbar = () => {
  const theme = PortfolioStore((state) => state.theme);
  const { scrollYProgress } = useScroll({
    target: { element: () => document.body },
    offset: ['start start', 'end end']
  });

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div 
        className={`fixed top-0 left-0 right-0 z-[60] h-[3px] origin-left ${theme ? 'bg-gray-700' : 'bg-white'}`}
        style={{ 
          scaleX: scrollYProgress,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 40
        }}
      />
      {/* Navbar */}
      <section className='fixed top-0 left-0 w-full z-50 flex py-0 px-6 items-center bg-transparent backdrop-filter backdrop-saturate-200 backdrop-brightness/50 backdrop-blur-md'>
        <div className='max-w-230 w-full mx-auto flex py-4 px-6 items-center justify-between'>
          <motion.a initial={{opacity:0 }} animate={{opacity:1}} className={`${theme ? 'text-black' : 'text-white'} hover:border-b-2 border-${theme ? 'black' : 'white'} transition-all duration-300`} href='https://x.com/Adinath302' target='_blank'>
            adinath.codes
          </motion.a>  

          <div className='flex items-center gap-4'>
            <ul className={`flex gap-6 items-center mr-2.75 ${theme ? 'text-black' : 'text-white'}`} >
              <li>Contact</li>
              <li>Project</li>
            </ul>
            <AnimatedThemeToggler />
          </div>
        </div>
      </section>
    </>
  )
}

export default Navbar;


import React from 'react';
import { FaCode } from 'react-icons/fa6';
import PortfolioStore from './useStore';
import { AnimatePresence, motion } from 'framer-motion';

const Bio = () => {
    const theme = PortfolioStore((state) => state.theme);

    const bioText = "I design and build high-performance web applications with a strong focus on user experience, scalability, and clean architecture. Specializing in React and modern JavaScript, I turn complex ideas into intuitive digital products. Focused on real-world problem solving, I continuously refine my craft by building production-level projects and staying aligned with industry best practices. Open to collaborating with ambitious teams and startups to create meaningful, high-impact products.";
    const words = bioText.split(' ');

    return (
        <section className="px-6 mt-10.5 mb-0">
            <motion.h2
                initial={{ opacity: 0, y: '-50px' }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className={`mb-3 ${theme ? 'text-black' : 'text-white'} text-start`}
            >
                About
            </motion.h2>
            <AnimatePresence mode="wait">
                <motion.div
                    initial={{ x: '-50px', opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    className="group cursor-default rounded-xl flex items-start gap-3 transition-all duration-400 ease-out hover:scale-[1.02] p-2 hover:bg-gray-950/5 hover:dark:bg-gray-50/5 max-w-5xl"
                >
                    <motion.div
                        whileHover={{ rotate: 180 }}
                        className="rounded-lg bg-gray-950/10 hover:bg-gray-900/20 transition-all duration-300 p-1.5 mt-0.5"
                    >
                        <FaCode className={`w-4 h-4 ${theme ? 'text-black' : 'text-white'} drop-shadow-lg`} />
                    </motion.div>
                    <p className={`text-sm font-sans leading-relaxed ${theme ? 'text-black' : 'text-[#A6A6A6]'}`}>
                        {words.map((word, i) => (
                            <motion.span
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: i * 0.08 + 0.1, ease: 'easeOut' }}
                                style={{ display: 'inline-block', marginRight: '0.25em' }}
                            >
                                {word}
                            </motion.span>
                        ))}
                    </p>
                </motion.div>
            </AnimatePresence>
        </section>
    );
};

export default Bio;


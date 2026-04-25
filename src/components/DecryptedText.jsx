import React, { useEffect, useState, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const DecryptedText = ({
  text = '',
  speed = 30,
  maxIterations = 15,
  characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*',
  className = '',
  parentClassName = '',
  encryptedClassName = '',
  animateOn = 'hover',
  clickMode = 'toggle',
  revealDirection = 'end',
  sequential = true,
  useOriginalCharsOnly = true
}) => {
  const [decrypted, setDecrypted] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const [iteration, setIteration] = useState(0);
  const intervalRef = useRef(null);

  const getRandomChar = () => characters[Math.floor(Math.random() * characters.length)];

  const decryptChar = (originalChar, index) => {
    if (!decrypted) {
      return getRandomChar();
    }
    return originalChar;
  };

  const startDecryption = () => {
    if (decrypted || iteration >= maxIterations) {
      setDecrypted(true);
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }

    setIteration(prev => prev + 1);
    const newText = text.split('').map(decryptChar).join('');
    setDisplayText(newText);
  };

  const handleMouseEnter = () => {
    if (animateOn === 'hover' && !intervalRef.current) {
      intervalRef.current = setInterval(startDecryption, speed);
    }
  };

  const handleMouseLeave = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const handleClick = () => {
    if (animateOn === 'click') {
      setDecrypted(true);
    }
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const charVariants = {
    hidden: {
      opacity: [0.5, 1],
      scale: [0.9, 1.1],
      rotate: [-5, 5]
    },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.4,
        delay: sequential ? i * 0.03 : 0.1,
        ease: 'easeOut'
      }
    })
  };

  if (!text) return null;

  return (
    <div className={`inline-block ${parentClassName}`} onMouseLeave={handleMouseLeave}>
      <motion.div
        className={encryptedClassName}
        initial={false}
        animate={decrypted ? 'visible' : 'hidden'}
        onMouseEnter={handleMouseEnter}
        onClick={handleClick}
        whileHover={{ scale: decrypted ? 1.05 : 1 }}
      >
        {decrypted ? (
          <motion.span
            className={className}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {text}
          </motion.span>
        ) : (
          displayText.split('').map((char, i) => (
            <motion.span
              key={`${iteration}-${i}`}
              variants={charVariants}
              custom={i}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))
        )}
      </motion.div>

      {!decrypted && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.7, scale: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 pointer-events-none bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded blur-sm"
          />
        </AnimatePresence>
      )}
    </div>
  );
};

export default DecryptedText;


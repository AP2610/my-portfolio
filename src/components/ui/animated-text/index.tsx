'use client';

import { motion } from 'framer-motion';

type AnimatedTextProps = {
  text: string;
  className?: string;
  delay?: number;
  onComplete?: () => void;
};

export const AnimatedText = ({ text, className, delay = 0, onComplete }: AnimatedTextProps) => {
  // Create an array of letters
  const letters = Array.from(text);

  // Container animation
  const container = {
    hidden: { opacity: 0 },
    visible: () => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: delay },
    }),
  };

  // Letter animation
  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  return (
    <motion.span className={className} variants={container} initial="hidden" animate="visible" onAnimationComplete={onComplete}>
      {letters.map((letter, index) => (
        <motion.span variants={child} key={index}>
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

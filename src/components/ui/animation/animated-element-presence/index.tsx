'use client';

import { motion } from 'framer-motion';

type AnimatedElementPresenceProps = {
  children: React.ReactNode;
  animationProperty: 'opacity' | 'position';
  entryAnimationDelay?: number;
  exitAnimationDelay?: number;
  className?: string;
};

// Animates element position or opacity
export const AnimatedElementPresence = ({
  children,
  animationProperty,
  className,
  entryAnimationDelay = 0,
  exitAnimationDelay = 0,
}: AnimatedElementPresenceProps) => {
  const animationTypes = {
    position: {
      initial: { opacity: 0, y: 100 },
      animate: { opacity: 1, y: 0 },
      transition: {
        delay: entryAnimationDelay,
        duration: 0.8,
        type: 'spring',
        stiffness: 100,
        damping: 20,
      },
      exit: {
        opacity: 0,
        y: 50,
        transition: { delay: exitAnimationDelay, duration: 3, type: 'easeInOut' },
      },
    },
    opacity: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { delay: entryAnimationDelay, duration: 0.5, type: 'easeInOut' },
      exit: { opacity: 0, transition: { delay: exitAnimationDelay, duration: 0.5, type: 'easeInOut' } },
    },
  };

  const animateProps = animationTypes[animationProperty];

  return (
    <motion.div className={className} {...animateProps}>
      {children}
    </motion.div>
  );
};

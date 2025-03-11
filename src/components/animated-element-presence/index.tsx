'use client';

import { AnimatePresence, motion } from 'framer-motion';

type AnimatedElementPresenceProps = {
  children: React.ReactNode;
  exitCondition?: boolean;
  entryAnimationDelay: number;
  animationProperty: 'opacity' | 'position';
  exitAnimationDelay?: number;
  className?: string;
};

// Animates element position or opacity
export const AnimatedElementPresence = ({
  children,
  exitCondition,
  entryAnimationDelay,
  exitAnimationDelay,
  className,
  animationProperty,
}: AnimatedElementPresenceProps) => {
  const animationTypes = {
    position: {
      initial: { y: 50 },
      animate: { y: -15 },
      transition: {
        delay: entryAnimationDelay,
        duration: 0.8,
        type: 'spring',
        stiffness: 100,
        damping: 20,
      },
      exit: {
        opacity: 0,
        y: -100,
        transition: { delay: exitAnimationDelay, duration: 0.5, type: 'easeInOut' },
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

  const commonJsx = (
    <motion.div className={className} {...animateProps}>
      {children}
    </motion.div>
  );

  return (
    <AnimatePresence mode="wait">
      {exitCondition && commonJsx}
      {/* For now, all opacity based animations do not have an exit option */}
      {animationProperty === 'opacity' && commonJsx}
    </AnimatePresence>
  );
};

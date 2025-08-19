'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

type MarginValue = `${number}${'px' | '%'}`;

type AnimatedElementPresenceProps = {
  children: React.ReactNode;
  animationProperty: 'opacity' | 'position';
  entryAnimationDelay?: number;
  exitAnimationDelay?: number;
  className?: string;
  shouldUseInView?: boolean;
  useInViewMargin?: MarginValue | undefined;
};

// Animates element position or opacity
export const AnimatedElementPresence = ({
  children,
  animationProperty,
  className,
  entryAnimationDelay = 0,
  exitAnimationDelay = 0,
  useInViewMargin = '0px',
  shouldUseInView = false,
}: AnimatedElementPresenceProps) => {
  /* 
  In some cases, the element is called inside another animated element, such as a section
  with animateOnScroll. If that element is below the fold, then the aniimatedElementPresence might
  run before the element is in view. To prevent this, we can use the shouldUseInView prop to prevent
  the animation from running until the element is in view.
  */
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: useInViewMargin });
  const isInViewValue = shouldUseInView ? isInView : true;

  const animationTypes = {
    position: {
      initial: { opacity: 0, y: 100 },
      animate: isInViewValue ? { opacity: 1, y: 0 } : undefined,
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
      animate: isInViewValue ? { opacity: 1 } : undefined,
      transition: { delay: entryAnimationDelay, duration: 0.5, type: 'easeInOut' },
      exit: { opacity: 0, transition: { delay: exitAnimationDelay, duration: 0.5, type: 'easeInOut' } },
    },
  };

  const animateProps = animationTypes[animationProperty];

  return (
    <motion.div ref={ref} className={className} {...animateProps}>
      {children}
    </motion.div>
  );
};

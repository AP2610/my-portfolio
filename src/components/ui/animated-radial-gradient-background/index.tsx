'use client';

import { motion } from 'framer-motion';

export const AnimatedRadialGradientBackground = () => {
  return (
    <motion.div
      initial={{ scale: 0.3, opacity: 0 }}
      animate={{
        scale: 1,
        opacity: 0.8,
      }}
      transition={{
        scale: {
          duration: 2,
          ease: 'easeInOut',
        },
        opacity: {
          duration: 4,
          ease: 'easeIn',
        },
      }}
      className="radial-background-gradient absolute bottom-0 left-0 right-0 top-[40px] -z-10"
    ></motion.div>
  );
};

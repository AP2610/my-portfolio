'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

type PaddingSizes = 'small' | 'medium' | 'large';

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  isFullWidth?: boolean;
  hasHeaderPaddingTop?: boolean;
  paddingTop?: PaddingSizes;
  paddingBottom?: PaddingSizes;
  animateOnScroll?: boolean;
};

export const Section = ({
  children,
  className,
  id,
  paddingTop,
  paddingBottom,
  isFullWidth = false,
  hasHeaderPaddingTop = false,
  animateOnScroll = false,
}: SectionProps) => {
  // Get rid of isFullWidth styling
  const sectionClasses = clsx(
    {
      container: !isFullWidth,
      'w-full': isFullWidth,
      'pt-16': paddingTop === 'medium',
      'pb-16': paddingBottom === 'medium',
      'pt-8': paddingTop === 'small',
      'pt-24': paddingTop === 'large',
      'pb-8': paddingBottom === 'small',
      'pb-24': paddingBottom === 'large',
      'pt-header-height': hasHeaderPaddingTop,
    },
    className
  );

  const motionProps = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { duration: 1, delay: 0.5 },
    viewport: { once: true, margin: '-100px' },
  };

  const sectionProps = {
    id,
    className: sectionClasses,
    ...(animateOnScroll ? motionProps : {}),
  };

  return (
    <>
      {animateOnScroll ? (
        <motion.section {...sectionProps}>{children}</motion.section>
      ) : (
        <section {...sectionProps}>{children}</section>
      )}
    </>
  );
};

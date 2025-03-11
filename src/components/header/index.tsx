'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { AnimatedElementPresence } from '../animated-element-presence';
import { Logo } from '../logo';
import { NavigationMenu } from '../navigation';

export const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const pathname = usePathname();

  // Reference to the hero section for scroll-based animations
  const heroRef = useRef<HTMLElement | null>(null);

  // Get reference to hero section after mount
  useEffect(() => {
    heroRef.current = document.getElementById('hero');
  }, []);

  // Track scroll progress through the hero section
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end end'],
    layoutEffect: false,
  });

  const initialBackground = 'transparent';

  // Dynamic background transformation based on scroll progress
  // As user scrolls from 20% to 40% through the hero section:
  // Transitions to frosted black
  const backgroundStyle = useTransform(
    scrollYProgress,
    [0.2, 0.4],
    [
      initialBackground,
      'rgba(10, 10, 26, 0.6)', // frosted black
    ]
  );

  // Adds blur effect as user scrolls
  const blurStyle = useTransform(scrollYProgress, [0.5, 1], ['blur(0px)', 'blur(10px)']);

  return (
    <>
      <motion.header
        key={pathname}
        className="fixed top-0 left-0 right-0 z-10  h-[var(--header-height)]"
        // The initial styles solve the issue where useTransform is not reset on page navigation.
        initial={{
          background: 'initialBackground',
          backdropFilter: 'blur(0px)',
        }}
        style={{
          background: backgroundStyle,
          backdropFilter: blurStyle,
        }}
      >
        <div className="max-w-[1400px] h-full mx-auto p-4 sm:p-6 lg:p-8 flex justify-between items-center relative">
          <AnimatedElementPresence entryAnimationDelay={0.2} animationProperty="opacity">
            <Logo isNavOpen={isNavOpen} />
          </AnimatedElementPresence>

          <AnimatedElementPresence entryAnimationDelay={0.2} animationProperty="opacity">
            <NavigationMenu isOpen={isNavOpen} setIsOpen={setIsNavOpen} />
          </AnimatedElementPresence>
        </div>
      </motion.header>
    </>
  );
};

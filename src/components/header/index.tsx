'use client';

import { AnimatedElementPresence } from '@/components/animated-element-presence';
import { Logo } from '@/components/logo';
import { NavigationMenu } from '@/components/navigation';
import { ThemeSwitcher } from '@/components/theme-switcher';
import { motion, useScroll, useTransform } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

const SOLID_BACKGROUND_PATHS = ['/cv', '/projects'];

// TODO: Create a switch for light mode or darkmode
export const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [hasSolidBackground, setHasSolidBackground] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setHasSolidBackground(SOLID_BACKGROUND_PATHS.includes(pathname) && pathname !== '/');
  }, [pathname]);

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

  const frostedBlackBackgroundColor = 'rgba(var(--background), 0.5)';
  const initialBackgroundColor = hasSolidBackground ? frostedBlackBackgroundColor : 'transparent';

  // Dynamic background transformation based on scroll progress
  // As user scrolls from 20% to 40% through the hero section:
  // Transitions to frosted black
  const backgroundStyle = useTransform(
    scrollYProgress,
    [0.2, 0.4],
    [
      initialBackgroundColor,
      frostedBlackBackgroundColor, // frosted black
    ]
  );

  const initialBackdropFilter = hasSolidBackground ? 'blur(10px)' : 'blur(0px)';

  // Adds blur effect as user scrolls, but only when there isn't a solid background
  const blurStyle = useTransform(
    scrollYProgress,
    [0.2, 0.6],
    hasSolidBackground
      ? ['blur(10px)', 'blur(10px)'] // Keep constant blur when solid background
      : ['blur(0px)', 'blur(10px)'] // Transform blur based on scroll when transparent
  );

  return (
    <>
      <motion.header
        key={pathname}
        className="fixed left-0 right-0 top-0 z-10 h-[var(--header-height)] print:hidden"
        // The initial styles solve the issue where useTransform is not reset on page navigation.
        initial={{
          background: initialBackgroundColor,
          backdropFilter: initialBackdropFilter,
          WebkitBackdropFilter: initialBackdropFilter,
        }}
        style={{
          background: backgroundStyle,
          backdropFilter: blurStyle,
          WebkitBackdropFilter: blurStyle,
        }}
      >
        <div className="container relative mx-auto flex h-full items-center justify-between p-4 sm:p-6 lg:p-8">
          <AnimatedElementPresence entryAnimationDelay={0.2} animationProperty="opacity">
            <Logo isNavOpen={isNavOpen} />
          </AnimatedElementPresence>

          <AnimatedElementPresence
            className="flex items-center gap-6 md:gap-10"
            entryAnimationDelay={0.2}
            animationProperty="opacity"
          >
            <ThemeSwitcher />

            <NavigationMenu isOpen={isNavOpen} setIsOpen={setIsNavOpen} />
          </AnimatedElementPresence>
        </div>
      </motion.header>
    </>
  );
};

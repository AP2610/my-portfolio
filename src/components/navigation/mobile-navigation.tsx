'use client';

import { motion, MotionConfig } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { NavLink } from './nav-link';
import { NAVIGATION_LINKS } from './nav-links';

type MobileNavigationProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  className?: string;
};

export const MobileNavigation = ({ isOpen, setIsOpen, className }: MobileNavigationProps) => {
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  const motionSpanCommonClasses = `absolute h-[2px] rounded-md transition-[background-color] duration-200`;

  // Use blue background when menu is open, otherwise use scroll-based color
  const backgroundColor = isOpen ? 'var(--blue)' : 'var(--lime)';

  return (
    <nav className={className}>
      <MotionConfig
        transition={{
          duration: 0.2,
          ease: 'easeInOut',
        }}
      >
        {/* Hamburger button that transforms into close icon */}
        <motion.button
          className="relative z-20 h-14 w-14 rounded-full"
          initial={false} // Prevents animation from triggering on page load.
          onClick={() => setIsOpen(!isOpen)}
          animate={isOpen ? 'open' : 'closed'}
          aria-label="Hamburger navigation menu button"
        >
          {/* Top line of hamburger */}
          <motion.span
            className={`${motionSpanCommonClasses} w-8`}
            initial={{ rotate: '0deg' }}
            style={{
              top: '30%',
              left: '50%',
              x: '-50%',
              y: '-50%',
              backgroundColor: backgroundColor,
            }}
            variants={{
              open: {
                rotate: ['0deg', '0deg', '45deg'],
                top: ['30%', '50%'],
              },
              closed: {
                rotate: ['45deg', '0deg'],
              },
            }}
          ></motion.span>

          {/* Middle line of hamburger */}
          <motion.span
            className={`${motionSpanCommonClasses} w-8`}
            initial={{ rotate: '0deg' }}
            style={{
              top: '50%',
              left: '50%',
              x: '-50%',
              y: '-50%',
              backgroundColor: backgroundColor,
            }}
            variants={{
              open: {
                rotate: ['0deg', '0deg', '-45deg'],
              },
              closed: {
                rotate: ['-45deg', '0deg'],
              },
            }}
          ></motion.span>

          {/* Bottom line of hamburger */}
          <motion.span
            className={`${motionSpanCommonClasses} w-4`}
            initial={{ rotate: '0deg' }}
            style={{
              bottom: '30%',
              left: 'calc(50% + 8px)',
              x: '-50%',
              y: '50%',
              backgroundColor: backgroundColor,
            }}
            variants={{
              open: {
                rotate: ['0deg', '0deg', '45deg'],
                bottom: ['30%', '43%'],
                left: ['calc(50% + 10px)', '57%'],
              },
              closed: {
                rotate: ['45deg', '0deg'],
              },
            }}
          ></motion.span>
        </motion.button>
      </MotionConfig>

      {/* Full-screen overlay menu */}
      <motion.div
        className="custom-background-blue absolute h-svh w-full p-4"
        style={{
          top: 0,
          left: '50%',
          x: '-50%',
        }}
        initial={{
          clipPath: 'circle(0% at calc(100% - 2.5rem) 2.5rem)', // Start as a small circle at hamburger button position
          opacity: 0,
        }}
        animate={{
          // Expand/contract circle based on menu state
          clipPath: isOpen ? 'circle(150% at calc(100% - 2.5rem) 2.5rem)' : 'circle(0% at calc(100% - 2.5rem) 2.5rem)',
          opacity: isOpen ? 1 : 0,
        }}
        transition={{
          duration: 0.6,
          ease: [0.3, 0, 0.2, 1], // Custom easing for smooth animation
        }}
      >
        {/* Navigation links container */}
        <nav className="flex h-full flex-col">
          <ul className="flex h-full flex-col justify-center gap-16 text-center">
            {NAVIGATION_LINKS.map((link) => (
              <li key={link.href}>
                <NavLink
                  setIsOpen={setIsOpen}
                  className={`${pathname === link.href ? 'text-lavender-700' : 'text-lavender-600'} hover:text-blue-600`}
                  href={link.href}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </nav>
  );
};

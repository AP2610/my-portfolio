'use client';

import { useEffect, useState } from 'react';

export type Breakpoints = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

const twBreakpoints: Record<Breakpoints, string> = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// TODO: can be updated to accept additional media queries like color scheme, reduced motion, and orientation.

/**
 * // Returns true when viewport width >= 768px (md)
 * const isMediumScreenOrLarger = useMediaQuery('md');
 */
export const useMediaQuery = (breakpoint: 'sm' | 'md' | 'lg' | 'xl' | '2xl') => {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(min-width: ${twBreakpoints[breakpoint]})`);

    // Set the matches state initially
    setMatches(mediaQuery.matches);

    // Update the matches state when the media query changes when crossing a specific breakpoint
    const handleMediaQueryChange = () => {
      setMatches(mediaQuery.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, [breakpoint]);

  return matches;
};

'use client';

import { AnimatedElementPresence } from '@/components/ui/animated-element-presence';
import { Logo } from '@/components/ui/logo';
import { ThemeSwitcher } from '@/components/ui/theme-switcher';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { MobileNavigation } from '../navigation/mobile-navigation';

type HeaderProps = {
  className?: string;
};

// Header is only shown upto the md breakpoint, then the sidebar takes over. hidden class is added in the layout for a better overview.
export const Header = ({ className }: HeaderProps) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const pathname = usePathname();

  const headerClasses = clsx(
    'fixed left-0 right-0 top-0 z-10 h-[var(--header-height)] bg-background/50 backdrop-blur-[10px]',
    className
  );

  return (
    <header key={pathname} className={headerClasses}>
      <AnimatedElementPresence
        entryAnimationDelay={0.2}
        animationProperty="opacity"
        className="container relative mx-auto flex h-full items-center justify-between"
      >
        <Logo isNavOpen={isNavOpen} />

        <div className="flex items-center gap-6 md:gap-10">
          <ThemeSwitcher />

          <MobileNavigation isOpen={isNavOpen} setIsOpen={setIsNavOpen} />
        </div>
      </AnimatedElementPresence>
    </header>
  );
};

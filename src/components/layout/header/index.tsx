'use client';

import { AnimatedElementPresence } from '@/components/ui/animated-element-presence';
import { Logo } from '@/components/ui/logo';
import { NavigationMenu } from '@/components/layout/navigation';
import { ThemeSwitcher } from '@/components/ui/theme-switcher';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header
      key={pathname}
      className="fixed left-0 right-0 top-0 z-10 h-[var(--header-height)] bg-background/50 backdrop-blur-[10px] md:hidden print:hidden"
    >
      <AnimatedElementPresence
        entryAnimationDelay={0.2}
        animationProperty="opacity"
        className="container relative mx-auto flex h-full items-center justify-between"
      >
        <Logo isNavOpen={isNavOpen} />

        <div className="flex items-center gap-6 md:gap-10">
          <ThemeSwitcher />

          <NavigationMenu isOpen={isNavOpen} setIsOpen={setIsNavOpen} />
        </div>
      </AnimatedElementPresence>
    </header>
  );
};

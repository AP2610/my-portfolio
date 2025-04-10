'use client';

import { MyImage } from '@/components/ui/image';
import { Logo } from '@/components/ui/logo';
import { ThemeSwitcher } from '@/components/ui/theme-switcher';
import clsx from 'clsx';
import { DesktopNavigation } from '../navigation/desktop-navigation';
import { AnimatedText } from '@/components/ui/animated-text';
import { useState } from 'react';

type SidebarProps = {
  className?: string;
};

export const Sidebar = ({ className }: SidebarProps) => {
  const [showRole, setShowRole] = useState(false);

  // Flex class is applied where the component is used for a better overview
  const asideClasses = clsx(
    'bg-sidebar-bg sticky top-0 h-screen w-[300px] flex-col items-center gap-14 py-16 text-foreground shadow-md',
    className
  );

  return (
    <aside className={asideClasses}>
      <div className="flex flex-col items-center gap-8">
        <div className="flex items-center gap-6">
          <Logo isNavOpen={false} />
          <ThemeSwitcher />
        </div>

        <div className="flex flex-col items-center gap-4 px-6">
          <MyImage
            src="/cv/headshot.webp"
            alt="Arjun Puri"
            priority
            sizes="50vw"
            containerClasses="w-32 h-32 rounded-full overflow-hidden border-2 border-accent-lime hover:scale-105 transition-transform duration-300"
          />

          <div className="space-y-1 text-center">
            <h2 className="text-2xl">
              <AnimatedText text="Arjun Puri" delay={0.4} onComplete={() => setShowRole(true)} />
            </h2>

            <p className="relative text-lg">
              {/* This is a hack to avoid layout shift when the AnimatedText enters the DOM */}
              {!showRole && (
                <span className="text-sidebar-bg" aria-hidden="true">
                  Frontend Engineer
                </span>
              )}

              {showRole && <AnimatedText text="Frontend Engineer" />}
            </p>
          </div>
        </div>
      </div>

      <nav className="w-full">
        <DesktopNavigation />
      </nav>
    </aside>
  );
};

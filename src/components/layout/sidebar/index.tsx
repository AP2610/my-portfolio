'use client';

import { AnimatedText } from '@/components/ui/animated-text';
import { Button } from '@/components/ui/button';
import { Headshot } from '@/components/ui/headshot';
import { Logo } from '@/components/ui/logo';
import { ThemeSwitcher } from '@/components/ui/theme-switcher';
import clsx from 'clsx';
import { useState } from 'react';
import { GoSidebarCollapse } from 'react-icons/go';
import { DesktopNavigation } from '../navigation/desktop-navigation';

type SidebarProps = {
  className?: string;
};

export const Sidebar = ({ className }: SidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [showRole, setShowRole] = useState(false);

  // Flex class is applied where the component is used for a better overview
  const asideClasses = clsx(
    'relative bg-sidebar-bg sticky top-0 h-screen flex-col items-center py-8 gap-14 text-foreground shadow-md transition-all duration-300',
    {
      'w-18': isCollapsed,
      'w-[250px]': !isCollapsed,
    },
    className
  );

  const collapseButtonClasses = clsx(
    'text-sidebar-collapse-button-color hover:text-sidebar-collapse-button-color-hover hover:scale-110 active:scale-100 absolute bottom-0 transition-all duration-300',
    {
      'rotate-180 left-0': !isCollapsed,
      'rotate-0 left-1/2 -translate-x-1/2': isCollapsed,
    }
  );

  return (
    <aside className={asideClasses}>
      <Button variant="icon-button" className={collapseButtonClasses} onClick={() => setIsCollapsed(!isCollapsed)}>
        <GoSidebarCollapse className="h-6 w-6" />
      </Button>

      <ThemeSwitcher
        className={clsx('absolute mb-[2px]', {
          'bottom-4 right-4': !isCollapsed,
          'bottom-16 right-1/2 translate-x-1/2 scale-[0.8]': isCollapsed,
        })}
      />

      <div className="flex flex-col items-center gap-8">
        <Logo
          className={clsx({
            'text-lg': isCollapsed,
          })}
          isNavOpen={false}
          isCollapsed={isCollapsed}
        />

        <div className="flex flex-col items-center gap-4 px-6">
          <Headshot size={isCollapsed ? 'xs' : 'small'} />

          {!isCollapsed && (
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
          )}
        </div>
      </div>

      <nav className="w-full">
        <DesktopNavigation isCollapsed={isCollapsed} />
      </nav>
    </aside>
  );
};

'use client';

import { AnimatedText } from '@/components/ui/animated-text';
import { Button } from '@/components/ui/button';
import { ContrastSwitcher } from '@/components/ui/contrast-switcher';
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
    'text-setting-button-color hover:text-setting-button-color-hover hover:scale-110 active:scale-100 transition-all duration-300',
    {
      'rotate-180': !isCollapsed,
      'rotate-0': isCollapsed,
    }
  );

  return (
    <aside className={asideClasses}>
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
            <h2 className="text-2xl font-medium">
              <AnimatedText text="Arjun Puri" delay={0.4} />
            </h2>
          )}
        </div>
      </div>

      <nav className="w-full">
        <DesktopNavigation isCollapsed={isCollapsed} />
      </nav>

      <div
        className={clsx('mt-auto flex w-full items-center justify-between', {
          'flex-col-reverse justify-center': isCollapsed,
        })}
      >
        <Button
          aria-label="Collapse sidebar"
          variant="icon-button"
          className={collapseButtonClasses}
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <span className="sr-only">Collapse sidebar</span>
          <GoSidebarCollapse className="h-6 w-6" />
        </Button>

        <ContrastSwitcher />

        <div className="p-4">
          <ThemeSwitcher />
        </div>
      </div>
    </aside>
  );
};

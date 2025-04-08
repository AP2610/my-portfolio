'use client';

import { usePathname } from 'next/navigation';
import { NavLink } from './nav-link';
import { NAVIGATION_LINKS } from './nav-links';
import clsx from 'clsx';

type DesktopNavigationProps = {
  className?: string;
  isVertical?: boolean;
};

export const DesktopNavigation = ({ className, isVertical }: DesktopNavigationProps) => {
  const pathname = usePathname();

  const navclasses = clsx(
    {
      'w-full flex justify-center': isVertical,
    },
    className
  );

  const listClasses = clsx('flex gap-12', {
    'flex-col items-center w-full': isVertical,
  });

  const getNavLinkClasses = (href: string) => {
    const isActiveLink = (href !== '/' && pathname.startsWith(href)) || pathname === href;

    const navLinkClasses = clsx('hover:text-accent-lime', {
      'font-semibold text-accent-lime': isActiveLink,
      'font-medium text-foreground': !isActiveLink,
      'border-l-4 border-accent-lime': isVertical && isActiveLink,
      'w-full text-center': isVertical,
    });

    return navLinkClasses;
  };

  return (
    <nav className={navclasses}>
      <ul className={listClasses} role="Navigation list">
        {NAVIGATION_LINKS.map((link, index) => (
          <NavLink key={`${index}-${link.href}`} href={link.href} className={getNavLinkClasses(link.href)}>
            {link.label}
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};

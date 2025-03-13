'use client';

import { usePathname } from 'next/navigation';
import { NavLink } from './nav-link';
import { NAVIGATION_LINKS } from './nav-links';

type DesktopNavigationProps = {
  className?: string;
};

export const DesktopNavigation = ({ className }: DesktopNavigationProps) => {
  const pathname = usePathname();

  return (
    <nav className={className}>
      <ul className="flex gap-12" role="Navigation list">
        {NAVIGATION_LINKS.map((link, index) => (
          <NavLink
            key={`${index}-${link.href}`}
            href={link.href}
            className={`${pathname === link.href ? 'text-lime' : 'text-white'} font-medium hover:text-lime-600`}
          >
            {link.label}
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};

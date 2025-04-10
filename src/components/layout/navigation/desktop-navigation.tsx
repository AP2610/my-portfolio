import { NavLink } from './nav-link';
import { NAVIGATION_LINKS } from './nav-links';
import clsx from 'clsx';

type DesktopNavigationProps = {
  className?: string;
};

export const DesktopNavigation = ({ className }: DesktopNavigationProps) => {
  const navclasses = clsx('w-full flex justify-center', className);

  return (
    <nav className={navclasses}>
      <ul className="flex w-full flex-col items-center gap-12" role="Navigation list">
        {NAVIGATION_LINKS.map((link, index) => (
          <NavLink key={`${index}-${link.href}`} href={link.href} fontSize="small">
            {link.label}
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};

import clsx from 'clsx';
import { HiOutlineCodeBracketSquare } from 'react-icons/hi2';
import { TbFileCv, TbHome } from 'react-icons/tb';
import { NavLink } from './nav-link';
import { NAVIGATION_LINKS } from './nav-links';

type DesktopNavigationProps = {
  isCollapsed: boolean;
  className?: string;
};

const iconProps = {
  strokeWidth: 1.2,
  className: 'h-6 w-6 mx-auto',
};

const COLLAPSED_NAV_LINKS = [
  {
    href: '/',
    label: <TbHome {...iconProps} />,
  },
  {
    href: '/cv',
    label: <TbFileCv {...iconProps} />,
  },
  {
    href: '/projects',
    label: <HiOutlineCodeBracketSquare {...iconProps} />,
  },
] as const;

export const DesktopNavigation = ({ isCollapsed, className }: DesktopNavigationProps) => {
  const navclasses = clsx('w-full flex justify-center', className);

  return (
    <nav className={navclasses}>
      <ul className="flex w-full flex-col items-center gap-12">
        {(isCollapsed ? COLLAPSED_NAV_LINKS : NAVIGATION_LINKS).map((link) => (
          <li key={link.href} className="flex w-full text-center">
            <NavLink href={link.href} fontSize="small">
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  setIsOpen?: (isOpen: boolean) => void;
  fontSize?: 'default' | 'small';
};

export const NavLink = ({ href, children, className, setIsOpen, fontSize = 'default' }: NavLinkProps) => {
  const pathname = usePathname();

  const getNavLinkClasses = () => {
    const isActiveLink = (href !== '/' && pathname.startsWith(href)) || pathname === href;

    const navLinkClasses = clsx(
      'hover:text-accent-lime w-full text-center transition-colors duration-300 font-sans',
      {
        'font-bold text-accent-lime border-l-4 border-accent-lime border-r-4 border-r-transparent': isActiveLink,
        'font-normal text-foreground': !isActiveLink,
        'text-4xl md:text-xl': fontSize === 'default',
        'text-base': fontSize === 'small',
      },
      className
    );

    return navLinkClasses;
  };

  // This is needed to ensure the menu closes when a link is clicked.
  const handleClick = () => setIsOpen?.(false);

  return (
    <Link className={getNavLinkClasses()} href={href} onClick={handleClick}>
      {children}
    </Link>
  );
};

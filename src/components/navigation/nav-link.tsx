'use client';

import clsx from 'clsx';
import Link from 'next/link';

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  setIsOpen?: (isOpen: boolean) => void;
};

export const NavLink = ({ href, children, className, setIsOpen }: NavLinkProps) => {
  const classes = clsx('text-4xl md:text-xl font-light hover:text-blue-600 transition-colors duration-300 font-sans', className);

  // This is needed to ensure the menu closes when a link is clicked.
  const handleClick = () => setIsOpen?.(false);

  return (
    <Link className={classes} href={href} onClick={handleClick}>
      {children}
    </Link>
  );
};

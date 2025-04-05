'use client';

import clsx from 'clsx';
import Link from 'next/link';

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  setIsOpen?: (isOpen: boolean) => void;
  fontSize?: 'default' | 'small';
};

export const NavLink = ({ href, children, className, setIsOpen, fontSize = 'default' }: NavLinkProps) => {
  const classes = clsx(
    'font-light transition-colors duration-300 font-sans',
    {
      'text-4xl md:text-xl': fontSize === 'default',
      'text-base': fontSize === 'small',
    },
    className
  );

  // This is needed to ensure the menu closes when a link is clicked.
  const handleClick = () => setIsOpen?.(false);

  return (
    <Link className={classes} href={href} onClick={handleClick}>
      {children}
    </Link>
  );
};

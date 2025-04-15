'use client';

import { ContrastContext } from '@/context/contrast-context';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useContext } from 'react';

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  setIsOpen?: (isOpen: boolean) => void;
  fontSize?: 'default' | 'small';
  showBorder?: boolean;
  textAlign?: 'center' | 'left';
  isInFooter?: boolean;
};

export const NavLink = ({
  href,
  children,
  className,
  setIsOpen,
  fontSize = 'default',
  showBorder = true,
  textAlign = 'center',
  isInFooter = false,
}: NavLinkProps) => {
  const pathname = usePathname();
  const { isHighContrast } = useContext(ContrastContext);

  const getNavLinkClasses = () => {
    const isActiveLink = (href !== '/' && pathname.startsWith(href)) || pathname === href;

    const navLinkClasses = clsx(
      'hover:text-accent-lime w-full inline-block transition-colors duration-300 font-sans py-2',
      {
        'font-bold text-accent-lime': isActiveLink,
        'border-l-4 border-accent-lime border-r-4 border-r-transparent': isActiveLink && showBorder,
        'font-normal text-foreground': !isActiveLink,
        'text-4xl': fontSize === 'default',
        'text-base': fontSize === 'small',
        'md:!text-xl': isHighContrast && !isInFooter,
        'text-left': textAlign === 'left',
        'text-center': textAlign === 'center',
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

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
  showBorder?: boolean;
  textAlign?: 'center' | 'left';
};

export const NavLink = ({
  href,
  children,
  className,
  setIsOpen,
  fontSize = 'default',
  showBorder = true,
  textAlign = 'center',
}: NavLinkProps) => {
  const pathname = usePathname();

  const getNavLinkClasses = () => {
    const isActiveLink = (href !== '/' && pathname.startsWith(href)) || pathname === href;

    const navLinkClasses = clsx(
      'hover:text-accent-lime-foreground w-full inline-block transition-colors duration-300 font-sans',
      {
        'font-bold text-accent-lime-foreground': isActiveLink,
        'border-l-4 border-accent-lime-foreground border-r-4 border-r-transparent': isActiveLink && showBorder,
        'font-normal text-foreground': !isActiveLink,
        'text-4xl md:text-xl': fontSize === 'default',
        'text-base': fontSize === 'small',
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

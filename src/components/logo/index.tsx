import clsx from 'clsx';
import Link from 'next/link';

type LogoProps = {
  isNavOpen: boolean;
};

export const Logo = ({ isNavOpen }: LogoProps) => {
  const linkLogoClasses = clsx('text-3xl z-20 relative font-sans font-rich-black transition-colors duration-300', {
    'text-accent-electric-blue hover:text-electric-blue-700': isNavOpen,
    'text-accent-lime hover:text-lime-700': !isNavOpen,
  });

  return (
    <Link href="/" className={linkLogoClasses}>
      AP.DEV
    </Link>
  );
};

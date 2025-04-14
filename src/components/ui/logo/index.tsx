import clsx from 'clsx';
import Link from 'next/link';

type LogoProps = {
  isNavOpen: boolean;
  isCollapsed?: boolean;
  className?: string;
};

export const Logo = ({ isNavOpen, isCollapsed = false, className }: LogoProps) => {
  const linkLogoClasses = clsx(
    'text-3xl z-20 relative font-sans font-black transition-all duration-300',
    {
      'text-accent-electric-blue hover:text-electric-blue-700': isNavOpen, // Only for small screens
      'text-accent-lime hover:scale-110 dark:text-accent-lime': !isNavOpen,
    },
    className
  );

  return (
    <Link href="/" className={linkLogoClasses}>
      {isCollapsed ? (
        <span className="flex flex-col">
          <span>AP.</span>
          <span>DEV</span>
        </span>
      ) : (
        'AP.DEV'
      )}
    </Link>
  );
};

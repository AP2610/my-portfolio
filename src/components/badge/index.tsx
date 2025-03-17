import clsx from 'clsx';
import { FaExternalLinkAlt } from 'react-icons/fa';

type BadgeColor = 'blue' | 'blue-700' | 'lime' | 'violet';

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
  hasLink?: boolean;
  onClick?: () => void;
  color?: BadgeColor;
};

export const Badge = ({ children, className, hasLink = false, onClick, color = 'blue' }: BadgeProps) => {
  const classes = clsx(
    'inline-block px-3 py-1 font-sans rounded-full text-[14px] flex items-center gap-2',
    {
      // Base styles without hover
      'bg-blue/10 text-accent-blue border border-accent-blue/20': color === 'blue',
      'bg-blue-700/10 text-blue-700 border border-blue-700/40': color === 'blue-700',
      'bg-accent-lime/10 text-accent-lime border border-accent-lime/20': color === 'lime',
      'bg-accent-violet/15 text-accent-violet-400 border border-accent-violet/40': color === 'violet',

      // Hover styles only applied when hasLink is true
      'hover:bg-accent-blue/20': hasLink && color === 'blue',
      'hover:bg-blue-700/20': hasLink && color === 'blue-700',
      'hover:bg-accent-lime/20': hasLink && color === 'lime',
      'hover:bg-accent-violet/20': hasLink && color === 'violet',
      'transition-colors duration-300': hasLink,
    },
    className
  );

  return (
    <span className={classes} onClick={onClick} role={onClick ? 'button' : undefined}>
      {children}
      {hasLink && <FaExternalLinkAlt size={12} />}
    </span>
  );
};

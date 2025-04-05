import clsx from 'clsx';
import { FaExternalLinkAlt } from 'react-icons/fa';

type BadgeColor = 'electric-blue' | 'electric-blue-700' | 'lime' | 'violet';

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
  hasLink?: boolean;
  onClick?: () => void;
  color?: BadgeColor;
};

export const Badge = ({ children, className, hasLink = false, onClick, color = 'electric-blue' }: BadgeProps) => {
  const classes = clsx(
    'inline-block px-3 py-1 font-sans rounded-full text-[14px] flex items-center gap-2',
    {
      // Base styles without hover
      'bg-electric-blue/10 text-accent-electric-blue border border-accent-electric-blue/20': color === 'electric-blue',
      'bg-electric-blue-700/10 text-electric-blue-700 border border-electric-blue-700/40': color === 'electric-blue-700',
      'bg-accent-lime/10 text-accent-lime border border-accent-lime/20': color === 'lime',
      'bg-accent-violet/15 text-accent-violet border border-accent-violet/40': color === 'violet',

      // Hover styles only applied when hasLink is true
      'hover:bg-accent-electric-blue/20': hasLink && color === 'electric-blue',
      'hover:bg-electric-blue-700/20': hasLink && color === 'electric-blue-700',
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

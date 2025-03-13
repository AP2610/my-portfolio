import clsx from 'clsx';

type BadgeColor = 'blue' | 'blue-700' | 'lime' | 'violet' | 'white';

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
  hasHover?: boolean;
  onClick?: () => void;
  color?: BadgeColor;
};

export const Badge = ({ children, className, hasHover = false, onClick, color = 'blue' }: BadgeProps) => {
  const classes = clsx(
    'inline-block px-3 py-1 font-sans rounded-full text-[14px]',
    {
      // Base styles without hover
      'bg-blue/10 text-blue border border-blue/20': color === 'blue',
      'bg-blue-700/10 text-blue-700 border border-blue-700/40': color === 'blue-700',
      'bg-lime/10 text-lime border border-lime/20': color === 'lime',
      'bg-violet/10 text-violet border border-violet/20': color === 'violet',
      'bg-white/10 text-white border border-white/20': color === 'white',

      // Hover styles only applied when hasHover is true
      'hover:bg-blue/20': hasHover && color === 'blue',
      'hover:bg-blue-700/20': hasHover && color === 'blue-700',
      'hover:bg-lime/20': hasHover && color === 'lime',
      'hover:bg-violet/20': hasHover && color === 'violet',
      'hover:bg-white/20': hasHover && color === 'white',
      'transition-colors duration-300': hasHover,
    },
    className
  );

  return (
    <span className={classes} onClick={onClick} role={onClick ? 'button' : undefined}>
      {children}
    </span>
  );
};

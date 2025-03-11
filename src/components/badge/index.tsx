import clsx from 'clsx';

type BadgeColor = 'blue' | 'lime' | 'violet' | 'white';

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
  hasHover?: boolean;
  onClick?: () => void;
  color?: BadgeColor;
};

export const Badge = ({ children, className, hasHover = false, onClick, color = 'blue' }: BadgeProps) => {
  const classes = clsx(
    'inline-block px-3 py-1 font-sans text-sm rounded-full',
    {
      'bg-blue/10 text-blue border border-blue/20 hover:bg-blue/20': color === 'blue',
      'bg-lime/10 text-lime border border-lime/20 hover:bg-lime/20': color === 'lime',
      'bg-violet/10 text-violet border border-violet/20 hover:bg-violet/20': color === 'violet',
      'bg-white/10 text-white border border-white/20 hover:bg-white/20': color === 'white',
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

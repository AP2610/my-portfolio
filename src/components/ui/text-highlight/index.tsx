import clsx from 'clsx';

type HighlightColor = 'electric-blue' | 'lime' | 'violet' | 'cosmic-latte';

type TextHighlightProps = {
  children: React.ReactNode;
  color?: HighlightColor;
  className?: string;
};

export const TextHighlight = ({ children, color = 'electric-blue', className }: TextHighlightProps) => {
  const classes = clsx(
    'inline px-1.5 py-0.5 rounded text-cosmic-latte',
    {
      'bg-electric-blue/10': color === 'electric-blue',
      'bg-lime/10': color === 'lime',
      'bg-violet/10': color === 'violet',
      'bg-cosmic-latte/10': color === 'cosmic-latte',
    },
    className
  );

  return <span className={classes}>{children}</span>;
};

import clsx from 'clsx';

type HighlightColor = 'blue' | 'lime' | 'violet' | 'cosmic-latte';

type TextHighlightProps = {
  children: React.ReactNode;
  color?: HighlightColor;
  className?: string;
};

export const TextHighlight = ({ children, color = 'blue', className }: TextHighlightProps) => {
  const classes = clsx(
    'inline px-1.5 py-0.5 rounded text-cosmic-latte',
    {
      'bg-blue/10': color === 'blue',
      'bg-lime/10': color === 'lime',
      'bg-violet/10': color === 'violet',
      'bg-cosmic-latte/10': color === 'cosmic-latte',
    },
    className
  );

  return <span className={classes}>{children}</span>;
};

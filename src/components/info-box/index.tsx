import { FaInfoCircle } from 'react-icons/fa';
import clsx from 'clsx';

type InfoBoxColor = 'blue' | 'lime' | 'violet' | 'cosmic-latte';

type InfoBoxProps = {
  children: React.ReactNode;
  color?: InfoBoxColor;
  className?: string;
};

export const InfoBox = ({ children, color = 'blue', className }: InfoBoxProps) => {
  const classes = clsx(
    'p-6 rounded-lg flex flex-col md:flex-row items-start md:items-center gap-4',
    {
      'bg-blue/20 border border-blue/40': color === 'blue',
      'bg-lime/20 border border-lime/40': color === 'lime',
      'bg-violet/20 border border-violet/40': color === 'violet',
      'bg-cosmic-latte/20 border border-cosmic-latte/40': color === 'cosmic-latte',
    },
    className
  );

  const iconClasses = clsx('w-12 h-12', {
    'text-blue': color === 'blue',
    'text-lime': color === 'lime',
    'text-violet': color === 'violet',
    'text-cosmic-latte': color === 'cosmic-latte',
  });

  return (
    <div className={classes}>
      <FaInfoCircle className={iconClasses} />
      <div className="space-y-4">{children}</div>
    </div>
  );
};

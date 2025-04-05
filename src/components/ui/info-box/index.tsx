import { FaInfoCircle } from 'react-icons/fa';
import clsx from 'clsx';

type InfoBoxColor = 'electric-blue' | 'lime' | 'violet' | 'cosmic-latte';

type InfoBoxProps = {
  children: React.ReactNode;
  color?: InfoBoxColor;
  className?: string;
};

export const InfoBox = ({ children, color = 'electric-blue', className }: InfoBoxProps) => {
  const classes = clsx(
    'p-6 rounded-lg flex flex-col md:flex-row items-start md:items-center gap-4',
    {
      'bg-electric-blue/20 border border-electric-blue/40': color === 'electric-blue',
      'bg-lime/20 border border-lime/40': color === 'lime',
      'bg-violet/20 border border-violet/40': color === 'violet',
      'bg-cosmic-latte/20 border border-cosmic-latte/40': color === 'cosmic-latte',
    },
    className
  );

  const iconClasses = clsx('w-12 h-12', {
    'text-electric-blue': color === 'electric-blue',
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

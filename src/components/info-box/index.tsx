import { FaInfoCircle } from 'react-icons/fa';
import clsx from 'clsx';

type InfoBoxColor = 'blue' | 'lime' | 'violet' | 'white';

type InfoBoxProps = {
  children: React.ReactNode;
  color?: InfoBoxColor;
  className?: string;
};

export const InfoBox = ({ children, color = 'blue', className }: InfoBoxProps) => {
  const classes = clsx(
    'p-6 rounded-lg flex flex-col items-center gap-4',
    {
      'bg-blue/5 border border-blue/10': color === 'blue',
      'bg-lime/5 border border-lime/10': color === 'lime',
      'bg-violet/5 border border-violet/10': color === 'violet',
      'bg-white/5 border border-white/10': color === 'white',
    },
    className
  );

  const iconClasses = clsx('w-12 h-12', {
    'text-blue': color === 'blue',
    'text-lime': color === 'lime',
    'text-violet': color === 'violet',
    'text-white': color === 'white',
  });

  return (
    <div className={classes}>
      <FaInfoCircle className={iconClasses} />
      <div className="space-y-4 text-center">{children}</div>
    </div>
  );
};

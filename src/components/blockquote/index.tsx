import { FaQuoteLeft } from 'react-icons/fa';
import clsx from 'clsx';

type BlockquoteColor = 'blue' | 'lime' | 'violet';

type BlockquoteProps = {
  children: React.ReactNode;
  color?: BlockquoteColor;
  className?: string;
};

export const Blockquote = ({ children, color = 'blue', className }: BlockquoteProps) => {
  const classes = clsx(
    'flex flex-col items-center gap-4 text-center italic font-medium',
    {
      'text-accent-blue': color === 'blue',
      'text-accent-lime': color === 'lime',
      'text-accent-violet': color === 'violet',
    },
    className
  );

  const iconClasses = clsx('w-8 h-8', {
    'text-accent-blue/50': color === 'blue',
    'text-accent-lime/50': color === 'lime',
    'text-accent-violet/50': color === 'violet',
  });

  return (
    <blockquote className={classes}>
      <FaQuoteLeft className={iconClasses} />
      <p>{children}</p>
    </blockquote>
  );
};

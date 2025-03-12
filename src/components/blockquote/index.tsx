import { FaQuoteLeft } from 'react-icons/fa';
import clsx from 'clsx';

type BlockquoteColor = 'blue' | 'lime' | 'violet' | 'white';

type BlockquoteProps = {
  children: React.ReactNode;
  color?: BlockquoteColor;
  className?: string;
};

export const Blockquote = ({ children, color = 'blue', className }: BlockquoteProps) => {
  const classes = clsx(
    'flex flex-col items-center gap-4 text-center italic font-medium',
    {
      'text-blue': color === 'blue',
      'text-lime': color === 'lime',
      'text-violet': color === 'violet',
      'text-white': color === 'white',
    },
    className
  );

  const iconClasses = clsx('w-8 h-8', {
    'text-blue/50': color === 'blue',
    'text-lime/50': color === 'lime',
    'text-violet/50': color === 'violet',
    'text-white/50': color === 'white',
  });

  return (
    <blockquote className={classes}>
      <FaQuoteLeft className={iconClasses} />
      <p>{children}</p>
    </blockquote>
  );
};

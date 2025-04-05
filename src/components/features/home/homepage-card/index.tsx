import clsx from 'clsx';

type HomepageCardProps = {
  children: React.ReactNode;
  className?: string;
  textAlign?: 'center' | 'left';
  alignItems?: 'center' | 'start';
  flexDirection?: 'column' | 'row';
};

export const HomepageCard = ({
  children,
  className,
  textAlign = 'center',
  alignItems = 'center',
  flexDirection = 'column',
}: HomepageCardProps) => {
  const cardClasses = clsx(
    'flex justify-center rounded-md bg-homepage-card-bg p-6 text-foreground shadow-md transition-all duration-300 hover:scale-105 hover:shadow-2xl',
    {
      'text-center': textAlign === 'center',
      'text-left': textAlign === 'left',
      'items-center': alignItems === 'center',
      'items-start': alignItems === 'start',
      'flex-col': flexDirection === 'column',
      'flex-row': flexDirection === 'row',
    },
    className
  );

  return <div className={cardClasses}>{children}</div>;
};

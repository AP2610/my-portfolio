import clsx from 'clsx';

type HomepageCardProps = {
  children: React.ReactNode;
  className?: string;
  textAlign?: 'center' | 'left';
  alignItems?: 'center' | 'start';
  flexDirection?: 'column' | 'row';
  shouldWrap?: boolean;
};

export const HomepageCard = ({
  children,
  className,
  textAlign = 'center',
  alignItems = 'center',
  flexDirection = 'column',
  shouldWrap = false,
}: HomepageCardProps) => {
  const cardClasses = clsx(
    'flex justify-center rounded-md bg-homepage-card-bg p-6 text-foreground shadow-md',
    {
      'text-center': textAlign === 'center',
      'text-left': textAlign === 'left',
      'items-center': alignItems === 'center',
      'items-start': alignItems === 'start',
      'flex-col': flexDirection === 'column',
      'flex-row': flexDirection === 'row',
      'flex-wrap': shouldWrap,
    },
    className
  );

  return <div className={cardClasses}>{children}</div>;
};

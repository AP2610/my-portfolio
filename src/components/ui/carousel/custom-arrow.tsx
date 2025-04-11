'use client';

import { Button } from '@/components/ui/button';
import clsx from 'clsx';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
import { ArrowProps } from 'react-multi-carousel';

type CustomArrowProps = {
  orientation: 'left' | 'right';
  isHiddenOnMobile: boolean;
} & ArrowProps;

export const CustomArrow = ({ onClick, orientation, isHiddenOnMobile }: CustomArrowProps) => {
  if (!onClick) return null;

  const buttonClasses = clsx(
    'absolute top-1/2 z-10 -translate-y-1/2 !rounded-full bg-lime/90 p-3 hover:bg-lime-600/90 active:bg-lime-700',
    {
      'right-[4%]': orientation === 'right',
      'left-[4%]': orientation === 'left',
      'hidden md:block': isHiddenOnMobile,
    }
  );

  const iconClasses = 'h-6 w-6 text-isabelline';

  return (
    <Button variant="icon-button" className={buttonClasses} onClick={() => onClick()}>
      {orientation === 'right' ? <GoChevronRight className={iconClasses} /> : <GoChevronLeft className={iconClasses} />}
    </Button>
  );
};

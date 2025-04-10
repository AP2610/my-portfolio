'use client';

import { scrollToElement } from '@/utils/scroll-to-element';
import clsx from 'clsx';
import { ButtonHTMLAttributes } from 'react';
import { buttonStyles } from './styles';
import { ButtonVariants } from './types';
import { useMediaQuery } from '@/hooks/use-media-query';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  className?: string;
  variant?: ButtonVariants;
  isRounded?: boolean;
  scrollTo?: string;
  disabled?: boolean;
};

// TODO: Check for accessibility
export const Button = ({ children, scrollTo, className, variant = 'primary', isRounded = true, ...props }: ButtonProps) => {
  const isMdOrLargerScreen = useMediaQuery('md');

  const classes = clsx(
    {
      [buttonStyles.variants[variant]]: true,
      [buttonStyles.nonIconButtonStyles]: variant !== 'icon-button',
      'rounded-md': isRounded,
      'cursor-not-allowed opacity-50': 'disabled' in props && props.disabled,
    },
    className
  );

  const handleClick = () => {
    if (!scrollTo) return;

    const includeHeaderHeight = !isMdOrLargerScreen;
    scrollToElement(scrollTo as string, includeHeaderHeight);
  };

  return (
    <button className={classes} onClick={handleClick} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
};

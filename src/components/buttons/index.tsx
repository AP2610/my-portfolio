'use client';

import { scrollToElement } from '@/utils/scroll-to-element';
import clsx from 'clsx';
import Link from 'next/link';
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import { buttonStyles } from './styles';
import { ButtonVariants } from './types';

type BaseProps = {
  children: React.ReactNode;
  className?: string;
  href?: string;
  variant?: ButtonVariants;
  isRounded?: boolean;
};

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    isLinkButton?: false;
    scrollTo?: string;
    disabled?: boolean;
    target?: never;
  };

type ButtonAsLink = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    isLinkButton: true;
    href: string;
    scrollTo?: never;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

// TODO: Check for accessibility
export const Button = ({
  children,
  scrollTo,
  className,
  href,
  variant = 'primary',
  isLinkButton = false,
  isRounded = true,
  target,
  ...props
}: ButtonProps) => {
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

    scrollToElement(scrollTo as string);
  };

  return (
    <>
      {isLinkButton ? (
        <Link
          href={href as string}
          className={classes}
          target={target}
          rel={target === '_blank' ? 'noopener noreferrer' : undefined}
          {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </Link>
      ) : (
        <button className={classes} onClick={handleClick} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
          {children}
        </button>
      )}
    </>
  );
};

'use client';

import { scrollToElement } from '@/utils/scroll-to-element';
import clsx from 'clsx';
import Link from 'next/link';
import { AnchorHTMLAttributes } from 'react';
import { ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'icon-button';

type BaseProps = {
  children: React.ReactNode;
  className?: string;
  href?: string;
  variant?: ButtonVariant;
  isRounded?: boolean;
};

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    isLinkButton?: false;
    scrollTo?: string;
    disabled?: boolean;
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
  ...props
}: ButtonProps) => {
  const classes = clsx(className, {
    'w-[fit-content] p-4': variant === 'icon-button',
    'bg-white text-black hover:bg-white-400': variant === 'primary',
    'border-2 border-lime text-lime hover:bg-lime/10': variant === 'secondary',
    // For all other variants except icon button
    'px-4 py-2 min-w-[160px] font-sans text-center text-base transition-all duration-300 flex items-center justify-center':
      variant !== 'icon-button',
    'rounded-md': isRounded,
    'cursor-not-allowed opacity-50': 'disabled' in props && props.disabled,
  });

  const handleClick = () => {
    if (!scrollTo) return;

    scrollToElement(scrollTo as string);
  };

  return (
    <>
      {isLinkButton ? (
        // ...props need to be explicitly casted to AnchorHTMLAttributes<HTMLAnchorElement>.
        <Link href={href as string} className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
          {children}
        </Link>
      ) : (
        // ...props need to be explicitly casted to ButtonHTMLAttributes<HTMLButtonElement>.
        <button className={classes} onClick={handleClick} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
          {children}
        </button>
      )}
    </>
  );
};

'use client';

import { buttonStyles } from '@/components/ui/button/styles';
import { ButtonVariants } from '@/components/ui/button/types';
import clsx from 'clsx';
import Link from 'next/link';
import { AnchorHTMLAttributes } from 'react';
import { CgExternal, CgInternal } from 'react-icons/cg';

type LinkVariants = ButtonVariants | 'inline';

const LinkStyles = {
  ...buttonStyles,
};

type MyLinkProps = {
  children: React.ReactNode;
  href: string;
  type: 'internal' | 'external';
  className?: string;
  variant?: LinkVariants;
  showIcon?: boolean;
  isRounded?: boolean;
  hasHover?: boolean;
  target?: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export const MyLink = ({
  children,
  href,
  className,
  type,
  target,
  variant = 'inline',
  showIcon = false,
  isRounded = true,
  hasHover = true,
  ...props
}: MyLinkProps) => {
  const isInlineVariant = variant === 'inline';
  const isInternal = type === 'internal';

  const classes = clsx(
    {
      [LinkStyles.variants[variant]]: hasHover && true,
      [LinkStyles.nonIconButtonStyles]: !isInlineVariant && variant !== 'icon-button',
      'rounded-md': isRounded && !isInlineVariant,
    },
    className
  );

  const isMailTo = href.startsWith('mailto:');

  return isInternal ? (
    <Link href={href as string} className={classes} target={target || '_self'} {...props}>
      {children}
      {showIcon && <CgInternal className="tilt-shaking ml-2" />}
    </Link>
  ) : (
    <a
      href={href}
      className={classes}
      {...(!isMailTo && {
        target: '_blank',
        rel: 'noopener noreferrer',
      })}
      {...props}
    >
      {children}
      {showIcon && !isInlineVariant && !isMailTo && <CgExternal className="tilt-shaking ml-2" />}
    </a>
  );
};

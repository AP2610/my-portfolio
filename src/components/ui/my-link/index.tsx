'use client';

import clsx from 'clsx';
import { ButtonVariants } from '@/components/ui/button/types';
import { buttonStyles } from '@/components/ui/button/styles';
import Link from 'next/link';
import { CgExternal, CgInternal } from 'react-icons/cg';

type LinkVariants = ButtonVariants | 'inline';

const LinkStyles = {
  ...buttonStyles,
  variants: {
    ...buttonStyles.variants,
    inline:
      'inline-flex items-center font-sans text-accent-electric-blue relative cursor-pointer after:content-[""] after:absolute after:h-[1px] after:w-0 after:bg-accent-electric-blue after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300',
  },
};

type ExternalLinkProps = {
  children: React.ReactNode;
  href: string;
  type: 'internal' | 'external';
  className?: string;
  variant?: LinkVariants;
  showIcon?: boolean;
  isRounded?: boolean;
  hasHover?: boolean;
};

export const MyLink = ({
  children,
  href,
  className,
  type,
  variant = 'inline',
  showIcon = false,
  isRounded = true,
  hasHover = true,
}: ExternalLinkProps) => {
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
    <Link href={href as string} className={classes} target="_self">
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
    >
      {children}
      {showIcon && !isInlineVariant && !isMailTo && <CgExternal className="tilt-shaking ml-2" />}
    </a>
  );
};

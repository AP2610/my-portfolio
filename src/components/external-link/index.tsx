'use client';

import clsx from 'clsx';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { ButtonVariants } from '@/components/buttons/types';
import { buttonStyles } from '@/components/buttons/styles';

type LinkVariants = ButtonVariants | 'inline';

type ExternalLinkProps = {
  children: React.ReactNode;
  href: string;
  className?: string;
  variant?: LinkVariants;
  showIcon?: boolean;
  isRounded?: boolean;
  noHover?: boolean;
};

export const ExternalLink = ({
  children,
  href,
  className,
  variant = 'inline',
  showIcon = false,
  isRounded = true,
  noHover = false,
}: ExternalLinkProps) => {
  const isInlineVariant = variant === 'inline';

  const classes = clsx(
    {
      // Use shared button styles when not inline
      [buttonStyles.variants[variant as ButtonVariants]]: !isInlineVariant,
      [buttonStyles.nonIconButtonStyles]: !isInlineVariant && variant !== 'icon-button',
      'rounded-md': isRounded && !isInlineVariant,

      // Inline link styles
      'text-accent-electric-blue inline-flex items-center gap-1': isInlineVariant,
      'hover:text-electric-blue-600 hover:underline': isInlineVariant && !noHover,
    },
    className
  );

  const isMailTo = href.startsWith('mailto:');

  return (
    <a
      href={href}
      className={classes}
      {...(!isMailTo && {
        target: '_blank',
        rel: 'noopener noreferrer',
      })}
    >
      {children}
      {showIcon && !isInlineVariant && !isMailTo && <FaExternalLinkAlt className="tilt-shaking ml-2" />}
    </a>
  );
};

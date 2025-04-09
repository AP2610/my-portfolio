import clsx from 'clsx';

type PaddingSizes = 'small' | 'medium' | 'large';

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  isFullWidth?: boolean;
  hasBottomPadding?: boolean;
  hasTopPadding?: boolean;
  hasHeaderPaddingTop?: boolean;
  paddingTop?: PaddingSizes;
  paddingBottom?: PaddingSizes;
};

export const Section = ({
  children,
  className,
  id,
  paddingTop,
  paddingBottom,
  isFullWidth = false,
  hasBottomPadding = false,
  hasTopPadding = false,
  hasHeaderPaddingTop = false,
}: SectionProps) => {
  const sectionClasses = clsx(
    {
      container: !isFullWidth,
      'w-full': isFullWidth,
      // TODO: Remove hasTopPadding and hasBottomPadding, once they have all been removed
      'pt-16': hasTopPadding || paddingTop === 'medium',
      'pb-16': hasBottomPadding || paddingBottom === 'medium',
      'pt-header-height': hasHeaderPaddingTop,
      'pt-8': paddingTop === 'small',
      'pt-24': paddingTop === 'large',
      'pb-8': paddingBottom === 'small',
      'pb-24': paddingBottom === 'large',
    },
    className
  );

  return (
    <section id={id} className={sectionClasses}>
      {children}
    </section>
  );
};

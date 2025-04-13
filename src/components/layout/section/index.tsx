import clsx from 'clsx';

type PaddingSizes = 'small' | 'medium' | 'large';

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  isFullWidth?: boolean;
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
  hasHeaderPaddingTop = false,
}: SectionProps) => {
  const sectionClasses = clsx(
    {
      container: !isFullWidth,
      'w-full': isFullWidth,
      'pt-16': paddingTop === 'medium',
      'pb-16': paddingBottom === 'medium',
      'pt-8': paddingTop === 'small',
      'pt-24': paddingTop === 'large',
      'pb-8': paddingBottom === 'small',
      'pb-24': paddingBottom === 'large',
      'pt-header-height': hasHeaderPaddingTop,
    },
    className
  );

  return (
    <section id={id} className={sectionClasses}>
      {children}
    </section>
  );
};

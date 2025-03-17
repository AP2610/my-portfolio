import clsx from 'clsx';

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  isFullWidth?: boolean;
  hasBottomPadding?: boolean;
  hasTopPadding?: boolean;
};

export const Section = ({
  children,
  className,
  id,
  isFullWidth = false,
  hasBottomPadding = false,
  hasTopPadding = false,
}: SectionProps) => {
  const sectionClasses = clsx(
    {
      'w-full': isFullWidth,
      container: !isFullWidth,
      'pt-16': hasTopPadding,
      'pb-16': hasBottomPadding,
    },
    className
  );

  return (
    <section id={id} className={sectionClasses}>
      {children}
    </section>
  );
};

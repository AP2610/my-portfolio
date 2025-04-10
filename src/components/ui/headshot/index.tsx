import { MyImage } from '@/components/ui/image';
import HeadshotImage from '@/public/cv-images/headshot.webp';
import clsx from 'clsx';

type HeadshotProps = {
  size: 'small' | 'medium' | 'large';
  className?: string;
};

export const Headshot = ({ size, className }: HeadshotProps) => {
  const containerClasses = clsx(
    'rounded-full overflow-hidden flex-shrink-0 border-2 border-accent-lime hover:scale-105 transition-transform duration-300',
    {
      'w-32 h-32': size === 'small',
      'w-48 h-48': size === 'medium',
      'w-64 h-64': size === 'large',
    },
    className
  );
  return <MyImage src={HeadshotImage} alt="Arjun Puri" priority sizes="50vw" containerClasses={containerClasses} />;
};

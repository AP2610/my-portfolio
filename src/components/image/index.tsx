import clsx from 'clsx';
import Image from 'next/image';

type MyImageProps = {
  src: string;
  alt: string;
  quality?: number;
  priority?: boolean;
  sizes?: string;
  imageClasses?: string;
  containerClasses?: string;
} & Omit<React.ComponentProps<typeof Image>, 'src' | 'alt' | 'width' | 'height' | 'quality' | 'priority' | 'sizes'>;

export const MyImage = ({
  src,
  alt,
  imageClasses,
  containerClasses,
  quality = 75,
  priority = false,
  sizes = '100vw',
  ...props
}: MyImageProps) => {
  const containerClassNames = clsx('relative', containerClasses);
  const imageClassNames = clsx('object-cover object-center w-full h-full', imageClasses);

  return (
    <div className={containerClassNames}>
      <Image
        src={src}
        alt={alt}
        fill
        quality={quality}
        priority={priority}
        loading={priority ? 'eager' : 'lazy'}
        sizes={sizes}
        className={imageClassNames}
        {...props}
      />
    </div>
  );
};

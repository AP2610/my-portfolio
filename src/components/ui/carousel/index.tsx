'use client';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { CustomArrow } from './custom-arrow';

const responsiveDefaults = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    slidesToSlide: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

type CarouselWrapperProps = {
  children: React.ReactNode;
  responsiveOverride?: Partial<typeof responsiveDefaults>;
  hideArrrowsOnMobile?: boolean;
} & Omit<React.ComponentProps<typeof Carousel>, 'responsive'>;

export const MyCarousel = ({ children, responsiveOverride, hideArrrowsOnMobile = false, ...props }: CarouselWrapperProps) => {
  return (
    <Carousel
      responsive={{ ...responsiveDefaults, ...responsiveOverride }}
      customRightArrow={<CustomArrow isHiddenOnMobile={hideArrrowsOnMobile} orientation="right" />}
      customLeftArrow={<CustomArrow isHiddenOnMobile={hideArrrowsOnMobile} orientation="left" />}
      {...props}
    >
      {children}
    </Carousel>
  );
};

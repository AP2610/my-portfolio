'use client';

import { useMediaQuery } from '@/hooks/use-media-query';
import { scrollToElement } from '@/utils/scroll-to-element';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import { AccordionContent, IdType, TitleSize } from './types';

type AccordionItemProps = {
  id: IdType;
  title: string;
  titleSize?: TitleSize;
  content: AccordionContent;
  isOpen: boolean;
  onToggle: () => void;
  className: string;
};

export const AccordionItem = ({ id, title, titleSize, content, isOpen, onToggle, className }: AccordionItemProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLElement>(null);
  const isMdOrLargerScreen = useMediaQuery('md');

  // Need to do some hacky workarounds to compensate for the scroll when an accoridon is collapsed and another is opened
  useEffect(() => {
    if (!isOpen) return;

    const accordionWrapper = scrollRef.current?.closest('#accordion-wrapper');
    if (!accordionWrapper) return;

    const includeHeaderHeight = !isMdOrLargerScreen;
    const headerHeight = includeHeaderHeight
      ? parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height')) || 0
      : 0;

    const wrapperRect = accordionWrapper.getBoundingClientRect();

    // Get the wrappers absolute position to the top of the page
    const wrapperTopPosition = wrapperRect.top + window.scrollY;

    // Only scroll to the top of the scrollRef if we're scrolled past the top of the wrapper (accounting for header)
    if (window.scrollY > wrapperTopPosition - headerHeight) {
      const timeoutId = setTimeout(() => {
        scrollToElement(scrollRef.current?.id as string, includeHeaderHeight);
      }, 400);

      return () => clearTimeout(timeoutId);
    }
  }, [isOpen]);

  let accordionContent;
  // Check if content is an array of strings to make sure its not JSX wrapped in a fragment
  if (Array.isArray(content) && content.every((item) => typeof item === 'string')) {
    accordionContent = content.map((item, index) => (
      <p key={index} className="text-foreground">
        {item}
      </p>
    ));
  } else if (typeof content === 'string') {
    accordionContent = <p className="text-foreground">{content}</p>;
  } else {
    // react node/children
    accordionContent = <>{content}</>;
  }

  const wrapperClasses = clsx('overflow-hidden', className);
  const commonSpanButtonClasses = 'absolute rounded-md bg-accent-lime';
  const commonSpanButtonStyles = {
    left: '50%',
    top: '50%',
    x: '-50%',
    y: '-50%',
  };

  const titleClasses = clsx('text-left font-normal group-hover:font-semibold transition-all duration-300', {
    'text-base': titleSize === 'default',
    'text-sm': titleSize === 'small',
    'text-lg': titleSize === 'medium',
    'text-xl': titleSize === 'large',
    'text-2xl': titleSize === 'xl',
    'font-semibold': isOpen,
  });

  // Only add space between paragraphs if content is an array
  const accordionContentClasses = clsx('p-4', {
    'space-y-4': Array.isArray(content),
  });

  return (
    <article id={id.toString()} className={wrapperClasses} ref={scrollRef}>
      <div className="border-b border-foreground">
        <button
          className="group flex w-full items-center justify-between gap-6 p-4 text-foreground transition-all duration-300 hover:bg-foreground/10 active:bg-foreground/20"
          onClick={onToggle}
          aria-expanded={isOpen}
        >
          <h3 className={titleClasses}>{title}</h3>

          <span className="relative block h-3 w-3 transition-all duration-300 group-hover:scale-125 group-active:scale-100">
            <motion.span className={`${commonSpanButtonClasses} h-[2px] w-3`} style={commonSpanButtonStyles}></motion.span>

            <motion.span
              className={`${commonSpanButtonClasses} h-3 w-[2px]`}
              style={commonSpanButtonStyles}
              initial={{ rotate: 0 }}
              animate={isOpen ? 'open' : 'closed'}
              variants={{
                open: { rotate: 90 },
                closed: { rotate: 0 },
              }}
              transition={{ duration: 0.3, type: 'spring' }}
            ></motion.span>
          </span>
        </button>
      </div>

      <motion.div
        ref={contentRef}
        initial={{ height: 0, opacity: 0, scaleY: 0 }}
        animate={isOpen ? 'open' : 'closed'}
        variants={{
          open: {
            height: contentRef.current?.scrollHeight,
            opacity: 1,
            scaleY: 1,
          },
          closed: { height: 0, opacity: 0, scaleY: 0 },
        }}
        transition={{
          duration: 0.4,
          ease: 'easeInOut',
        }}
        className="origin-top overflow-hidden"
      >
        <div className={accordionContentClasses}>{accordionContent}</div>
      </motion.div>
    </article>
  );
};

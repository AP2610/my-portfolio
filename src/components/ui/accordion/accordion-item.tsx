'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { AccordionContent } from './index';

type AccordionItemProps = {
  title: string;
  content: AccordionContent;
  isOpen: boolean;
  onToggle: () => void;
  className: string;
};

export const AccordionItem = ({ title, content, isOpen, onToggle, className }: AccordionItemProps) => {
  const contentRef = useRef<HTMLDivElement>(null);

  let accordionContent;

  if (Array.isArray(content)) {
    accordionContent = content.map((item, index) => (
      <p key={index} className="text-foreground">
        {item}
      </p>
    ));
  } else if (typeof content === 'string') {
    accordionContent = <p className="text-foreground">{content}</p>;
  } else {
    // react node
    accordionContent = <>{content}</>;
  }

  const wrapperClasses = clsx('overflow-hidden', className);
  const commonSpanButtonClasses = 'absolute rounded-md bg-accent-lime-foreground';
  const commonSpanButtonStyles = {
    left: '50%',
    top: '50%',
    x: '-50%',
    y: '-50%',
  };

  return (
    <div className={wrapperClasses}>
      <div className="border-b border-foreground">
        <button
          className="group flex w-full items-center justify-between p-4 text-foreground transition-all duration-300 hover:bg-foreground/10 active:bg-foreground/20"
          onClick={onToggle}
        >
          <h3>{title}</h3>

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
        initial={{ height: 0, maxHeight: 0, opacity: 0, scaleY: 0 }}
        animate={isOpen ? 'open' : 'closed'}
        variants={{
          open: {
            height: contentRef.current?.scrollHeight || 'auto',
            maxHeight: contentRef.current?.scrollHeight,
            opacity: 1,
            scaleY: 1,
          },
          closed: { height: 0, maxHeight: 0, opacity: 0, scaleY: 0 },
        }}
        transition={{
          height: {
            duration: 0.5,
          },
          opacity: {
            duration: 0.4,
          },
          scaleY: {
            duration: 0.3,
          },
          ease: 'easeInOut',
        }}
        className="origin-top overflow-hidden"
      >
        <div className="space-y-4 p-4">{accordionContent}</div>
      </motion.div>
    </div>
  );
};

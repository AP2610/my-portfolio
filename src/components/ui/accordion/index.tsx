'use client';

import clsx from 'clsx';
import { useState } from 'react';
import { AccordionItem } from './accordion-item';

export type AccordionContent = string | string[] | React.ReactNode;

type AccordionData = {
  id: string;
  title: string;
  content: AccordionContent;
};

type AccordionProps = {
  data: AccordionData[];
  className?: string;
  itemClassName?: string;
};

export const Accordion = ({ data, className, itemClassName }: AccordionProps) => {
  const [activeId, setActiveId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setActiveId((prevId) => (prevId === id ? null : id));
  };

  const accordionClasses = clsx(className);

  return (
    <div className={accordionClasses}>
      {data.map((item) => (
        <AccordionItem
          key={item.id}
          title={item.title}
          content={item.content}
          onToggle={() => handleToggle(item.id)}
          isOpen={activeId === item.id}
          className={itemClassName as string}
        />
      ))}
    </div>
  );
};

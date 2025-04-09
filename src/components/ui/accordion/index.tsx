'use client';

import { AccordionContext } from '@/context/accordion-context';
import clsx from 'clsx';
import { useContext } from 'react';
import { AccordionItem } from './accordion-item';
import { AccordionContent, IdType, TitleSize } from './types';

type AccordionData = {
  id: IdType;
  title: string;
  titleSize?: TitleSize;
  content: AccordionContent;
};

type AccordionProps = {
  data: AccordionData[];
  className?: string;
  itemClassName?: string;
};

export const Accordion = ({ data, className, itemClassName }: AccordionProps) => {
  const { activeId, setOpenAccordionIds } = useContext(AccordionContext);

  const handleToggle = (id: IdType) => {
    setOpenAccordionIds(id);
  };

  const accordionClasses = clsx(className);

  return (
    <section className={accordionClasses}>
      {data.map((item) => (
        <AccordionItem
          key={item.id}
          title={item.title}
          content={item.content}
          onToggle={() => handleToggle(item.id)}
          isOpen={activeId === item.id}
          className={itemClassName as string}
          titleSize={item.titleSize}
        />
      ))}
    </section>
  );
};

'use client';

import { AccordionContext } from '@/context/accordion-context';
import clsx from 'clsx';
import { useContext } from 'react';
import { AccordionItem } from './accordion-item';
import { AccordionContent, IdType } from './types';

type Column = 'left' | 'right';

export type AccordionData = {
  id: IdType;
  title: string;
  column?: Column;
  content: AccordionContent;
};

type AccordionProps = {
  data: AccordionData[];
  className?: string;
  itemClassName?: string;
  isTwoColumns?: boolean;
};

export const Accordion = ({ data, className, itemClassName, isTwoColumns = false }: AccordionProps) => {
  const { activeId, setOpenAccordionIds } = useContext(AccordionContext);

  const handleToggle = (id: IdType) => {
    setOpenAccordionIds(id);
  };

  const accordionClasses = clsx(className);

  if (isTwoColumns) {
    const leftColumnData = data.filter((item) => item.column === 'left');
    const rightColumnData = data.filter((item) => item.column === 'right');

    return (
      <section
        id="accordion-wrapper"
        className={clsx('grid auto-rows-auto grid-cols-1 lg:grid-cols-2 lg:gap-6', accordionClasses)}
      >
        <div>
          {leftColumnData.map((item) => (
            <AccordionItem
              id={item.id}
              key={item.id}
              title={item.title}
              content={item.content}
              onToggle={() => handleToggle(item.id)}
              isOpen={activeId === item.id}
              className={itemClassName as string}
            />
          ))}
        </div>

        <div>
          {rightColumnData.map((item) => (
            <AccordionItem
              id={item.id}
              key={item.id}
              title={item.title}
              content={item.content}
              onToggle={() => handleToggle(item.id)}
              isOpen={activeId === item.id}
              className={itemClassName as string}
            />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section id="accordion-wrapper" className={accordionClasses}>
      {data.map((item) => (
        <AccordionItem
          id={item.id}
          key={item.id}
          title={item.title}
          content={item.content}
          onToggle={() => handleToggle(item.id)}
          isOpen={activeId === item.id}
          className={itemClassName as string}
        />
      ))}
    </section>
  );
};

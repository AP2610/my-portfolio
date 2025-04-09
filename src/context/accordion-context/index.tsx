'use client';

import { IdType } from '@/components/ui/accordion/types';
import { createContext, useEffect, useState } from 'react';

type AccordionContextType = {
  activeId: IdType | null;
  setOpenAccordionIds: (id: IdType) => void;
};

export const AccordionContext = createContext<AccordionContextType>({
  activeId: null,
  setOpenAccordionIds: () => {},
});

type AccordionProviderProps = {
  children: React.ReactNode;
};

export const AccordionProvider = ({ children }: AccordionProviderProps) => {
  const [activeId, setActiveIds] = useState<IdType | null>(null);

  useEffect(() => {
    console.log('activeIds:', activeId);
  }, [activeId]);

  const setOpenAccordionIds = (id: IdType) => {
    setActiveIds((prevId) => (prevId === id ? null : id));
  };

  const contextValue = {
    activeId,
    setOpenAccordionIds,
  };

  return <AccordionContext.Provider value={contextValue}>{children}</AccordionContext.Provider>;
};

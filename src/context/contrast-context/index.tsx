'use client';

import { createContext, useEffect, useState } from 'react';

type ContrastContextType = {
  isHighContrast: boolean;
  handleContrastToggle: () => void;
};

export const ContrastContext = createContext<ContrastContextType>({
  isHighContrast: false,
  handleContrastToggle: () => {},
});

type ContrastProviderProps = {
  children: React.ReactNode;
};

export const ContrastProvider = ({ children }: ContrastProviderProps) => {
  const [isHighContrast, setIsHighContrast] = useState(false);

  useEffect(() => {
    if (isHighContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
  }, [isHighContrast]);

  const handleContrastToggle = () => {
    setIsHighContrast((prevValue) => !prevValue);
  };

  const contextValue = {
    isHighContrast,
    handleContrastToggle,
  };

  return <ContrastContext.Provider value={contextValue}>{children}</ContrastContext.Provider>;
};

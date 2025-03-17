'use client';

import { createContext, useEffect, useState } from 'react';

type ThemeType = 'light' | 'dark';

type ThemeContextType = {
  theme: ThemeType;
  handleThemeToggle: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark',
  handleThemeToggle: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<ThemeType>('dark');

  const handleThemeToggle = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    const preferredTheme =
      (localStorage.getItem('theme') ?? window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
    setTheme(preferredTheme);
  }, []);

  useEffect(() => {
    if (theme) localStorage.setItem('theme', theme);

    if (theme === 'dark') {
      document.body.classList.remove('light');
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
      document.body.classList.add('light');
    }
  }, [theme]);

  const contextValue = { theme, handleThemeToggle };

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
};

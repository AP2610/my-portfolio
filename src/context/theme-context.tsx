'use client';

import { createContext, useEffect, useState } from 'react';

type ThemeType = 'light' | 'dark' | null;

type ThemeContextType = {
  theme: ThemeType;
  handleThemeToggle: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: null,
  handleThemeToggle: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<ThemeType>(null);

  const handleThemeToggle = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    // Cant use lazy initial state as next.js intially renders on the server, even with use client.
    const storedTheme = localStorage.getItem('theme');

    // Match media ternary needs to be wrapped in () for ?? to take precedence over ternary.
    const preferredTheme = storedTheme ?? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

    setTheme(preferredTheme as ThemeType);
  }, []);

  useEffect(() => {
    if (!theme) return;

    localStorage.setItem('theme', theme);

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

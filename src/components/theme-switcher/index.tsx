'use client';

import { ThemeContext } from '@/context/theme-context';
import { useContext } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { Button } from '../buttons';

export const ThemeSwitcher = () => {
  const { theme, handleThemeToggle } = useContext(ThemeContext);

  return (
    <Button variant="icon-button" onClick={handleThemeToggle}>
      {theme === 'dark' ? <FaSun /> : <FaMoon />}
    </Button>
  );
};

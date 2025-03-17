'use client';

import { ThemeContext } from '@/context/theme-context';
import { useContext } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { Button } from '../buttons';
import clsx from 'clsx';

export const ThemeSwitcher = ({ className }: { className?: string }) => {
  const { theme, handleThemeToggle } = useContext(ThemeContext);
  const classes = clsx('text-accent-violet hover:text-violet-700 dark:text-accent-violet dark:hover:text-violet-600', className);

  return (
    <Button variant="icon-button" onClick={handleThemeToggle} className={classes}>
      {theme === 'dark' ? <FaSun /> : <FaMoon />}
    </Button>
  );
};

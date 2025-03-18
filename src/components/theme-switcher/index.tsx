'use client';

import { ThemeContext } from '@/context/theme-context';
import { useContext } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import clsx from 'clsx';
import styles from './styles.module.css';

export const ThemeSwitcher = ({ className }: { className?: string }) => {
  const { theme, handleThemeToggle } = useContext(ThemeContext);
  const classes = clsx(
    'flex w-[var(--switchWidth)] cursor-pointer items-center rounded-full bg-white-600/30 outline outline-2 outline-white-600 dark:bg-black-400/30 dark:outline-black-400 hover:bg-white-600/60 dark:hover:bg-black-400/60 transition-colors duration-300',
    styles['themeSwitcher'],
    className
  );
  const iconClasses = 'w-3 h-3 text-foreground';

  return (
    <label className={classes}>
      <input type="checkbox" className="peer hidden" checked={theme === 'dark'} onChange={handleThemeToggle} />

      <span className="p-1 transition-all duration-300 peer-checked:translate-x-[calc(var(--switchWidth)-100%)]">
        {theme === 'dark' ? <FaSun className={iconClasses} /> : <FaMoon className={iconClasses} />}
      </span>
    </label>
  );
};

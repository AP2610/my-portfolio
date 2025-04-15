'use client';

import { ThemeContext } from '@/context/theme-context';
import { useContext } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import clsx from 'clsx';
import styles from './styles.module.scss';

export const ThemeSwitcher = ({ className }: { className?: string }) => {
  const { theme, handleThemeToggle } = useContext(ThemeContext);
  const classes = clsx(
    'flex w-[var(--switchWidth)] h-5 cursor-pointer items-center rounded-full bg-setting-button-color/30 outline outline-2 outline-setting-button-color hover:bg-setting-button-color/60 transition-all duration-300 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-setting-button-color',
    styles['themeSwitcher'],
    className
  );

  const iconClasses = 'w-3 h-3 text-foreground';

  return (
    <label htmlFor="themeSwitcher" className={classes}>
      <input
        type="checkbox"
        id="themeSwitcher"
        aria-label="Toggle theme"
        className="peer sr-only"
        checked={theme === 'dark'}
        onChange={handleThemeToggle}
      />
      <span className="sr-only">Theme switcher</span>

      <span className="p-1 transition-all duration-300 peer-checked:translate-x-[calc(var(--switchWidth)-100%)]">
        {theme === 'dark' ? <FaSun className={iconClasses} /> : <FaMoon className={iconClasses} />}
      </span>
    </label>
  );
};

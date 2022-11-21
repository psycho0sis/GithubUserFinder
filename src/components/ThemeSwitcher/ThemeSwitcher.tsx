/* eslint-disable no-console */
import { useLayoutEffect, useState } from 'react';

import { ReactComponent as MoonIcon } from 'assets/icon-moon.svg';
import { ReactComponent as SunIcon } from 'assets/icon-sun.svg';

import styles from './ThemeSwitcher.module.scss';

export const ThemeSwitcher = () => {
  const [isDark, setIsDark] = useState(() => {
    const theme = window.localStorage.getItem('theme');
    const initialValue = theme === 'light' ? false : true;
    return initialValue;
  });

  const themeText = isDark ? 'Light' : 'Dark';
  const ThemeIcon = isDark ? MoonIcon : SunIcon;

  useLayoutEffect(() => {
    document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
    window.localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <div className={styles.switcher} onClick={() => setIsDark((prev) => !prev)}>
      <span>{themeText}</span>
      <ThemeIcon className={styles.icon} />
    </div>
  );
};

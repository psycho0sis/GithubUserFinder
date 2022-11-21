import { useEffect, useState } from 'react';

import { ReactComponent as MoonIcon } from 'assets/icon-moon.svg';
import { ReactComponent as SunIcon } from 'assets/icon-sun.svg';

import styles from './ThemeSwitcher.module.scss';

export const ThemeSwitcher = () => {
  const [isDark, setIsDark] = useState(false);
  const themeText = isDark ? 'Light' : 'Dark';
  const ThemeIcon = isDark ? MoonIcon : SunIcon;

  useEffect(() => {
    document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <div className={styles.switcher} onClick={() => setIsDark((prev) => !prev)}>
      <span>{themeText}</span>
      <ThemeIcon className={styles.icon} />
    </div>
  );
};

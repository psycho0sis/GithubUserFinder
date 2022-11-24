import { useLayoutEffect, useState } from 'react';

import { ReactComponent as MoonIcon } from 'assets/icon-moon.svg';
import { ReactComponent as SunIcon } from 'assets/icon-sun.svg';

export const useTheme = (): [
  string,
  React.FC<React.SVGProps<SVGSVGElement>>,
  React.Dispatch<React.SetStateAction<boolean>>
] => {
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

  return [themeText, ThemeIcon, setIsDark];
};

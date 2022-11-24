import { useTheme } from './use-theme';

import styles from './ThemeSwitcher.module.scss';

export const ThemeSwitcher = () => {
  const [themeText, ThemeIcon, setIsDark] = useTheme();

  return (
    <div className={styles.switcher} onClick={() => setIsDark((prev) => !prev)}>
      <span>{themeText}</span>
      <ThemeIcon className={styles.icon} />
    </div>
  );
};

import { useRef } from 'react';

import { Button } from 'components/Button';
import { ReactComponent as IconSearch } from 'assets/icon-search.svg';

import styles from './Search.module.scss';

interface SearchProps {
  hasError: boolean;
  onSubmit: (text: string) => void;
}

export const Search = ({ hasError, onSubmit }: SearchProps) => {
  const searchRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const text = searchRef.current?.value || '';

    if (text) {
      onSubmit(text);
      if (searchRef.current) searchRef.current.value = '';
    }
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <div className={styles.search}>
        <label htmlFor="search" className={styles.label}>
          <IconSearch />
        </label>
        <input
          className={styles.textField}
          id="search"
          name="username"
          ref={searchRef}
          type="text"
          placeholder="Search GitHub username..."
        />
        {hasError && <div className={styles.error}>No result...</div>}
        <Button>Search</Button>
      </div>
    </form>
  );
};

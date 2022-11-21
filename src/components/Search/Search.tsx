import { Button } from 'components/Button';
import { ReactComponent as IconSearch } from 'assets/icon-search.svg';

import styles from './Search.module.scss';

interface SearchProps {
  hasError: boolean;
  onSubmit: (text: string) => void;
}

type FormField = {
  username: HTMLInputElement;
};

export const Search = ({ hasError, onSubmit }: SearchProps) => {
  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement & FormField>
  ) => {
    event.preventDefault();

    const text = event.currentTarget.username.value;

    if (text) {
      onSubmit(text);
    }

    event.currentTarget.reset();
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
          type="text"
          placeholder="Search GitHub username..."
        />
        {hasError && <div className={styles.error}>No result...</div>}
        <Button>Search</Button>
      </div>
    </form>
  );
};

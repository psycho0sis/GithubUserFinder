import { ReactComponent as IconSearch } from 'assets/icon-search.svg';
import { Button } from 'components/Button';

import { useSearch } from './use-search';

import styles from './Search.module.scss';

export const Search = () => {
  const handleSubmit = useSearch();

  return (
    <form autoComplete='off' onSubmit={handleSubmit}>
      <div className={styles.search}>
        <label htmlFor='search' className={styles.label}>
          <IconSearch />
        </label>
        <input
          className={styles.textField}
          id='search'
          name='username'
          type='text'
          placeholder='Search GitHub username...'
        />
        <Button>Search</Button>
      </div>
    </form>
  );
};

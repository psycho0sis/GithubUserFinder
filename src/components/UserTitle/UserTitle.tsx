import { LocalGithubUser } from 'types';

import styles from './UserTitle.module.scss';

type UserTitleProps = Pick<LocalGithubUser, 'login' | 'name' | 'created'>;

const localDate = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
});

export const UserTitle = ({ login, name, created }: UserTitleProps) => {
  return (
    <div className={styles.userTitle}>
      <h2>{name}</h2>
      <h3>{login}</h3>
      <span>{localDate.format(new Date(created))}</span>
    </div>
  );
};

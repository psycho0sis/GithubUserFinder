import { LocalGithubUser } from 'types';

import { UserStatItem } from './UserStatItem';

import styles from './UserStat.module.scss';

export type UserStatProps = Pick<LocalGithubUser, 'repos' | 'followers' | 'following'>;

type Items<T> = {
  content: T;
  label: string;
};

export const UserStat = ({ repos, followers, following }: UserStatProps) => {
  const items: Items<typeof repos | typeof followers | typeof following>[] = [
    { content: repos, label: 'Repos' },
    { content: followers, label: 'Followers' },
    { content: following, label: 'Following' },
  ];

  return (
    <div className={styles.userStat}>
      {items.map((item) => (
        <UserStatItem {...item} />
      ))}
    </div>
  );
};

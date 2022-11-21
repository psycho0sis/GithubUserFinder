import { LocalGithubUser } from 'types';

import { UserStatItem } from './UserStatItem';

import styles from './UserStat.module.scss';

export type UserStatProps = Pick<LocalGithubUser, 'repos' | 'followers' | 'following'>;

type Items<T> = {
  id: number;
  content: T;
  label: string;
};

export const UserStat = ({ repos, followers, following }: UserStatProps) => {
  const items: Items<typeof repos | typeof followers | typeof following>[] = [
    { id: 1, content: repos, label: 'Repos' },
    { id: 2, content: followers, label: 'Followers' },
    { id: 3, content: following, label: 'Following' },
  ];

  return (
    <div className={styles.userStat}>
      {items.map((item) => (
        <UserStatItem {...item} key={item.id} />
      ))}
    </div>
  );
};

import { LocalGithubUser } from 'types';

import { UserStatItem } from './UserStatItem';

import styles from './UserStat.module.scss';

export type UserStatProps = Pick<LocalGithubUser, 'repos' | 'followers' | 'following'>;

export const UserStat = ({ repos, followers, following }: UserStatProps) => (
  <div className={styles.userStat}>
    <UserStatItem content={repos} label='Repos' />
    <UserStatItem content={followers} label='Followers' />
    <UserStatItem content={following} label='Following' />
  </div>
);

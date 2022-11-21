import { UserInfo } from 'components/UserInfo';
import { UserStat } from 'components/UserStat';
import { UserTitle } from 'components/UserTitle';
import { LocalGithubUser } from 'types';

import styles from './UserCard.module.scss';

type UserCardProps = LocalGithubUser;

export const UserCard = (props: UserCardProps) => {
  const {
    avatar,
    bio,
    blog,
    company,
    created,
    login,
    location,
    name,
    twitter,
    repos,
    followers,
    following,
  } = props;

  return (
    <div className={styles.userCard}>
      <img src={avatar} alt={login} className={styles.avatar} />
      <UserTitle login={login} name={name} created={created} />
      <p className={`${styles.bio}${bio ? '' : ` ${styles.empty}`}`}>
        {bio || 'This profile has no bio'}
      </p>
      <UserStat repos={repos} followers={followers} following={following} />
      <UserInfo blog={blog} company={company} location={location} twitter={twitter} />
    </div>
  );
};

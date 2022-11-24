import { UserInfo } from 'components/UserInfo';
import { UserStat } from 'components/UserStat';
import { UserTitle } from 'components/UserTitle';
import { GithubError, GithubUser } from 'types';
import { extractLocalUser } from 'utils/extract-local-user';
import { isGitHubUser } from 'utils/typeguards';

import styles from './UserCard.module.scss';

type UserProps = {
  user: GithubUser | GithubError;
};

export const UserCard = ({ user }: UserProps) => {
  if (isGitHubUser(user)) {
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
    } = extractLocalUser(user);

    return (
      <>
        {Object.values(user).length !== 0 && (
          <>
            <img src={avatar} alt={login} className={styles.avatar} />
            <UserTitle login={login} name={name} created={created} />
            <p className={`${styles.bio}${bio ? '' : ` ${styles.empty}`}`}>
              {bio || 'This profile has no bio'}
            </p>
            <UserStat repos={repos} followers={followers} following={following} />
            <UserInfo blog={blog} company={company} location={location} twitter={twitter} />
          </>
        )}
      </>
    );
  }

  return <div className={styles.error}>{user.message}</div>;
};

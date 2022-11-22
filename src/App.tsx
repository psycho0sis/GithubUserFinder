import { useState } from 'react';

import { Container } from 'components/Container';
import { Search } from 'components/Search';
import { TheHeader } from 'components/TheHeader';
import { UserCard } from 'components/UserCard';
import { defaultUser } from 'mock';
import { GithubError, GithubUser, LocalGithubUser } from 'types';
import { extractLocalUser } from 'utils/extract-local-user';
import { isGitHubUser } from 'utils/typeguards';

import { BASE_URL } from './constants';

export const App = () => {
  const [user, setUser] = useState<LocalGithubUser | null>(() => {
    const user = window.localStorage.getItem('user');
    const initialValue: GithubUser = user && JSON.parse(user);
    return extractLocalUser(initialValue) || defaultUser;
  });

  const fetchUser = async (username: string) => {
    const url = `${BASE_URL}${username}`;

    const res = await fetch(url);
    const user = (await res.json()) as GithubUser | GithubError;

    if (isGitHubUser(user)) {
      setUser(extractLocalUser(user));
    } else {
      setUser(null);
    }

    window.localStorage.setItem('user', JSON.stringify(user));
  };

  return (
    <Container>
      <TheHeader />
      <Search hasError={!user} onSubmit={fetchUser} />
      {user && <UserCard {...user} />}
    </Container>
  );
};

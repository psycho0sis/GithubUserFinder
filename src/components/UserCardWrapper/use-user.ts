import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppSelector } from 'redux-hooks';

import { selectAsyncStatus, selectAsyncUser } from 'features/AsyncUser/async-user-selectors';
import { GithubError, GithubUser } from 'types';
import { Status } from 'types/status';
import { isGitHubUser } from 'utils/typeguards';

export const useUser = (): [GithubUser | GithubError | null, GithubUser | GithubError, Status] => {
  const [currentUser, setCurrentUser] = useState<GithubUser | GithubError | null>(null);
  const asyncUser = useSelector(selectAsyncUser);
  const status = useAppSelector(selectAsyncStatus);

  useEffect(() => {
    const currentUser = window.localStorage.getItem('user');

    if (currentUser) {
      const res = JSON.parse(currentUser) as GithubUser | GithubError;

      if (isGitHubUser(res)) {
        setCurrentUser(res);
      } else {
        setCurrentUser(res);
      }
    } else {
      setCurrentUser(null);
    }
  }, []);

  return [currentUser, asyncUser, status];
};

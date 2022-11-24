import { createAsyncThunk } from '@reduxjs/toolkit';

import { GithubError, GithubUser } from 'types';

import { BASE_URL } from '../../constants';

import { AsyncUserSlice } from './async-user-slice';

export const fetchUser = createAsyncThunk<
  GithubUser | GithubError,
  string,
  {
    state: { asyncUser: AsyncUserSlice };
  }
>(
  'user/fetchUser',
  async (username: string) => {
    const url = `${BASE_URL}${username}`;

    const res = await fetch(url);
    const user = await res.json();

    window.localStorage.setItem('user', JSON.stringify(user));

    return user;
  },
  {
    condition: (arg, { getState }) => {
      const { status } = getState().asyncUser;

      if (status === 'loading') return false;
    },
  }
);

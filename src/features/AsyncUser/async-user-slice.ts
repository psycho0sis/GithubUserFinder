import { createSlice } from '@reduxjs/toolkit';

import { GithubError, GithubUser } from 'types';
import { Status } from 'types/status';

import { fetchUser } from './async-user-action';

export interface AsyncUserSlice {
  status: Status;
  asyncUser: GithubUser | GithubError;
}

const initialState: AsyncUserSlice = {
  status: 'idle',
  asyncUser: {} as GithubUser | GithubError,
};

export const asyncUserSlice = createSlice({
  name: 'asyncUser',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = 'finishing';
        state.asyncUser = action.payload;
      })
      .addCase(fetchUser.rejected, (state) => {
        state.status = 'error';
      });
  },
});

export default asyncUserSlice.reducer;

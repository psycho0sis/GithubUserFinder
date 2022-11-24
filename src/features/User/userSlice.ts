import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { GithubUser } from 'types';

const initialState: GithubUser = {} as GithubUser;

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUser: (state, action: PayloadAction<GithubUser>) => {
      const user = action.payload;
      return { ...state, ...user };
    },
  },
});

export const { getUser } = userSlice.actions;

export default userSlice.reducer;

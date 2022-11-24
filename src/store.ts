import { combineReducers, configureStore } from '@reduxjs/toolkit';

import asyncUserSlice from 'features/AsyncUser/async-user-slice';

const rootReducer = combineReducers({ asyncUser: asyncUserSlice });

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

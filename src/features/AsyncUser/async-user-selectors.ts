import type { RootState } from 'store';

export const selectAsyncUser = (state: RootState) => state.asyncUser.asyncUser;
export const selectAsyncStatus = (state: RootState) => state.asyncUser.status;

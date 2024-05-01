import { createSlice } from '@reduxjs/toolkit';

import { getUser } from 'src/shared/api/user';

import type { TUser } from 'src/shared/api/user/dtos';


interface IUserState {
  user: TUser | null;
  isLoading: boolean;
  error: string | null | unknown;
}

const initialState: IUserState = {
  user: null,
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    removeUser: state => {
      state.user = null;
      localStorage.removeItem('token');
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const { removeUser } = userSlice.actions;
export const selectUser = (state: { user: IUserState }) => state.user;

export default userSlice.reducer;

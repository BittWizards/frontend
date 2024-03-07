import { createSlice } from '@reduxjs/toolkit';
import { getNewAmbassadors } from 'src/shared/api/ambassadors';
import { getNewContent } from 'src/shared/api/content';

interface NotificationsState {
    ambassadorsNewCount: number;
    contentNewCount: number;
    merchNewCount: number;
  }


const initialState: NotificationsState = {
    ambassadorsNewCount: 0,
    contentNewCount: 0,
    merchNewCount: 0,
  };

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getNewAmbassadors.fulfilled, (state, action) => {
        state.ambassadorsNewCount = action.payload.length;
      })
      .addCase(getNewContent.fulfilled, (state, action) => {
        state.contentNewCount = action.payload.length;
      })
  },
});

export const selectNotifications = (state: { notifications: NotificationsState }) =>
  state.notifications;

export default notificationsSlice.reducer;
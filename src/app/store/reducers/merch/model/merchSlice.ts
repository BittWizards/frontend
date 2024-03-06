import { createSlice } from '@reduxjs/toolkit';
import type {
  TAmbassadorMerchHistory,
  TMerchItem,
} from 'src/shared/api/merch/dtos';

import {
  getMerchAmbassadorsHistory,
  getMerchTypes,
} from 'src/shared/api/merch';

interface IMerchState {
  merchHistory: TAmbassadorMerchHistory[];
  merch: Object;
  merchType: TMerchItem[];
  isLoading: boolean;
  error: string | unknown | null;
}

const initialState: IMerchState = {
  merchHistory: [],
  merch: {},
  merchType: [],
  isLoading: false,
  error: null,
};

const merchSlice = createSlice({
  name: 'merch',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getMerchAmbassadorsHistory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.merchHistory = action.payload;
      })
      .addCase(getMerchAmbassadorsHistory.pending, state => {
        state.isLoading = true;
      })
      .addCase(getMerchAmbassadorsHistory.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getMerchTypes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.merchType = action.payload;
      })
      .addCase(getMerchTypes.pending, state => {
        state.isLoading = true;
      })
      .addCase(getMerchTypes.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const selectMerch = (state: { merch: IMerchState }) => state.merch;

export default merchSlice.reducer;

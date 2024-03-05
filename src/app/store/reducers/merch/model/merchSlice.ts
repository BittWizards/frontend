import { createSlice } from '@reduxjs/toolkit';
import { IMerch } from 'src/shared/api/merch/dtos';

import { getMerch, getMerchById } from 'src/shared/api/merch';

interface MerchState {
  merchList: IMerch[];
  merch: Object;
  isLoading: boolean;
  error: string | unknown | null;
}

const initialState: MerchState = {
  merchList: [],
  merch: {},
  isLoading: false,
  error: null,
};

const merchSlice = createSlice({
  name: 'merch',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getMerch.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.merchList = action.payload;
      })
      .addCase(getMerch.pending, state => {
        state.isLoading = true;
      })
      .addCase(getMerch.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(getMerchById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.merch = action.payload;
      })
      .addCase(getMerchById.pending, state => {
        state.isLoading = true;
      })
      .addCase(getMerchById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const selectMerch = (state: { merch: MerchState }) => state.merch;
export default merchSlice.reducer;

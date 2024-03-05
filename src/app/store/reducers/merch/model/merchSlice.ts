import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IMerch } from 'src/shared/api/merch/dtos';

import { getMerch } from 'src/shared/api/merch';

interface MerchState {
  merch: IMerch[];
  isLoading: boolean;
  error: string | unknown;
}

const initialState: MerchState = {
  merch: [],
  isLoading: false,
  error: '',
};

const merchSlice = createSlice({
  name: 'merch',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getMerch.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = '';
        state.merch = action.payload;
      })
      .addCase(getMerch.pending, state => {
        state.isLoading = true;
      })
      .addCase(getMerch.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const selectMerch = (state: { merch: MerchState }) => state.merch;
export default merchSlice.reducer;

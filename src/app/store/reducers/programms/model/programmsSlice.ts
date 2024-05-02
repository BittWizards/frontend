import { createSlice } from '@reduxjs/toolkit';

import {
  getMerchAmbassadorsHistory,
  getMerchTypes,
} from 'src/shared/api/merch';
import { getProgramms } from 'src/shared/api/programms';
import { TProgramm } from 'src/shared/api/programms/dtos';

interface IProgrammsState {
  programms: TProgramm[];
  isLoading: boolean;
  error: string | unknown | null;
}

const initialState: IProgrammsState = {
  programms: [],
  isLoading: false,
  error: null,
};

const programmsSlice = createSlice({
  name: 'programms',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getProgramms.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.programms = action.payload;
      })
      .addCase(getProgramms.pending, state => {
        state.isLoading = true;
      })
      .addCase(getProgramms.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const selectProgramms = (state: { programms: IProgrammsState }) =>
  state.programms;

export default programmsSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

import {
  getAllAmbassadors,
  getAmbassadorById,
} from 'src/shared/api/ambassadors';

import { initialAmbassador } from './constants';

import type { IAmbassador, IAmbassadorById } from 'src/shared/api/ambassadors/dtos';

interface AmbassadorsState {
  ambassadors: IAmbassador[];
  ambassador: IAmbassadorById;
  isLoading: boolean;
  error: string | null | unknown;
}

const initialState: AmbassadorsState = {
  ambassadors: [],
  ambassador: initialAmbassador,
  isLoading: false,
  error: null,
};

const ambassadorsSlice = createSlice({
  name: 'ambassadors',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getAllAmbassadors.pending, state => {
        state.isLoading = true;
      })
      .addCase(getAllAmbassadors.fulfilled, (state, action) => {
        state.isLoading = false;
        state.ambassadors = action.payload;
        state.error = null;
      })
      .addCase(getAllAmbassadors.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })

      .addCase(getAmbassadorById.pending, state => {
        state.isLoading = true;
      })
      .addCase(getAmbassadorById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.ambassador = action.payload;
        state.error = null;
      })
      .addCase(getAmbassadorById.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const selectAmbassadors = (state: { ambassadors: AmbassadorsState }) =>
  state.ambassadors;

export default ambassadorsSlice.reducer;

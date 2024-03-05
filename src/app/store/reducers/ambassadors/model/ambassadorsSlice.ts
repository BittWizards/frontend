import { createSlice } from '@reduxjs/toolkit';
import type { IAmbassador } from 'src/shared/api/ambassadors/dtos';
import { getAllAmbassadors } from 'src/shared/api/ambassadors';

interface AmbassadorsState {
  ambassadors: IAmbassador[];
  isLoading: boolean;
  error: string | null | unknown;
}

const initialState: AmbassadorsState = {
  ambassadors: [],
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
      });
  },
});

export const selectAmbassadors = (state: { ambassadors: AmbassadorsState }) =>
  state.ambassadors;

export default ambassadorsSlice.reducer;
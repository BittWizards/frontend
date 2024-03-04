import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAmbassador, ResultWithErrors } from 'src/shared/api/ambassadors/dtos';
import { getAllAmbassadors } from 'src/shared/api/ambassadors';

interface AmbassadorsState {
  ambassadors: IAmbassador[];
  loading: boolean;
  error: {
    message: string;
    code: string;
  } | null;
}

const initialState: AmbassadorsState = {
  ambassadors: [],
  loading: false,
  error: null,
};

const ambassadorsSlice = createSlice({
  name: 'ambassadors',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getAllAmbassadors.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        getAllAmbassadors.fulfilled,
        (state, action: PayloadAction<ResultWithErrors<IAmbassador[]>>) => {
          state.loading = false;
          state.ambassadors = action.payload.data || [];
          state.error = null;
        }
      )
      .addCase(getAllAmbassadors.rejected, (state, action) => {
        const payload = action.payload as
          | ResultWithErrors<IAmbassador[]>
          | undefined;
        state.loading = false;
        state.error = payload
          ? { ...(payload as any) }
          : { message: 'Unknown error', code: 'UNKNOWN' };
      });
  },
});

export const selectAmbassadors = (state: { ambassadors: AmbassadorsState }) =>
  state.ambassadors;

export default ambassadorsSlice.reducer;

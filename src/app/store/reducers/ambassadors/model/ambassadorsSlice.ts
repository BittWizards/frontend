import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type {
  IAmbassador,
  ResultWithErrors,
} from 'src/shared/api/ambassadors/dtos';
import { getAllAmbassadors } from 'src/shared/api/ambassadors';

type AppError = { message: string; code: number };

interface AmbassadorsState {
  id: any;
  ambassadors: IAmbassador[];
  isLoading: boolean;
  isError: boolean;
  error: AppError;
}

const initialState: AmbassadorsState = {
  ambassadors: [],
  isLoading: false,
  isError: false,
  error: {
    message: '',
    code: 0,
  },
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
      .addCase(
        getAllAmbassadors.fulfilled,
        (state, action: PayloadAction<ResultWithErrors<IAmbassador[]>>) => {
          state.isLoading = false;
          state.ambassadors = action.payload.data || [];
          state.isError = false;
          state.error = { message: '', code: 0 };
        }
      )
      .addCase(
        getAllAmbassadors.rejected,
        (state, action: PayloadAction<any>) => {
          state.error = action.payload.message;
          state.isLoading = false;
          state.isError = true;
        }
      );
  },
});

export const selectAmbassadors = (state: { ambassadors: AmbassadorsState }) =>
  state.ambassadors;

export default ambassadorsSlice.reducer;

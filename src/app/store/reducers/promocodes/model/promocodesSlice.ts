import { createSlice } from '@reduxjs/toolkit';
import type {
  IPromocode,
  TAmbassadorPromocodesData,
} from 'src/shared/api/promocodes/dtos';
import {
  getAllPromocodes,
  getAmbassadorsPromocodesById,
} from 'src/shared/api/promocodes';
import { emptyAmbassadorPromocode } from './cont';

interface PromocodesState {
  promocodes: IPromocode[];
  ambassadorPromocode: TAmbassadorPromocodesData;
  isLoading: boolean;
  error: string | null | unknown;
}

const initialState: PromocodesState = {
  promocodes: [],
  ambassadorPromocode: emptyAmbassadorPromocode,
  isLoading: false,
  error: null,
};

const promocodesSlice = createSlice({
  name: 'promocodes',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getAllPromocodes.pending, state => {
        state.isLoading = true;
      })
      .addCase(getAllPromocodes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.promocodes = action.payload;
        state.error = null;
      })
      .addCase(getAllPromocodes.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })

      .addCase(getAmbassadorsPromocodesById.pending, state => {
        state.isLoading = true;
      })
      .addCase(getAmbassadorsPromocodesById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.ambassadorPromocode = action.payload;
        state.error = null;
      })
      .addCase(getAmbassadorsPromocodesById.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const selectPromocodes = (state: { promocodes: PromocodesState }) =>
  state.promocodes;

export default promocodesSlice.reducer;

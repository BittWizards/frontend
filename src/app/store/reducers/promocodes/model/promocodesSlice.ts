import { createSlice } from '@reduxjs/toolkit';
import type { IPromocode } from 'src/shared/api/promocodes/dtos';
import { getAllPromocodes } from 'src/shared/api/promocodes';

interface PromocodesState {
  promocodes: IPromocode[];
  isLoading: boolean;
  error: string | null | unknown;
}

const initialState: PromocodesState = {
  promocodes: [],
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
      });
  },
});

export const selectPromocodes = (state: { promocodes: PromocodesState }) =>
  state.promocodes;

export default promocodesSlice.reducer;

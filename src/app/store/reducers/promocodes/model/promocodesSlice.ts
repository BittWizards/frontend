import { createSlice } from '@reduxjs/toolkit';

import {
  createAmbassadorsPromocode,
  deleteAmbassadorsPromocodeById,
  getAllPromocodes,
  getAmbassadorsPromocodesById,
} from 'src/shared/api/promocodes';

import { emptyAmbassadorPromocode } from './cont';

import type {
  IPromocode,
  TAmbassadorPromocodesData,
} from 'src/shared/api/promocodes/dtos';

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
      })

      .addCase(deleteAmbassadorsPromocodeById.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteAmbassadorsPromocodeById.fulfilled, (state, action) => {
        state.isLoading = false;
        // После успешного удаления обновить стейт
        const deletedPromoId = action.meta.arg; // Используем id, переданный в payload при вызове deleteAmbassadorsPromocodeById
        state.promocodes = state.promocodes.filter(
          promo => promo.id !== deletedPromoId
        );
        state.error = null;
      })
      .addCase(deleteAmbassadorsPromocodeById.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })

      .addCase(createAmbassadorsPromocode.pending, state => {
        state.isLoading = true;
      })
      .addCase(createAmbassadorsPromocode.fulfilled, (state, action) => {
        state.isLoading = false;
        // После успешного создания промокода обновить стейт
        const newPromo: IPromocode = {
          id: action.payload.id,
          promocode: action.payload.promocode,
          is_active: action.payload.is_active,
          created_at: action.payload.created_at,
          ambassador: action.payload.ambassador,
        };
        state.promocodes = [newPromo, ...state.promocodes];
        state.error = null;
      })
      .addCase(createAmbassadorsPromocode.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const selectPromocodes = (state: { promocodes: PromocodesState }) =>
  state.promocodes;

export default promocodesSlice.reducer;

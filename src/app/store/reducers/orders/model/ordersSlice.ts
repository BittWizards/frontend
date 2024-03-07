import { createSlice } from '@reduxjs/toolkit';
import type { TAmbassadorsOrders, TOrder } from 'src/shared/api/orders/dtos';

import { getAmbassadorsOrdersById, getOrders } from 'src/shared/api/orders';
import { initialAmbassadorOrders } from './const';

interface IOrdersState {
  orders: TOrder[];
  ambassadorOrders: TAmbassadorsOrders;
  isLoading: boolean;
  error: string | unknown | null;
}

const initialState: IOrdersState = {
  orders: [],
  ambassadorOrders: initialAmbassadorOrders,
  isLoading: false,
  error: null,
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getOrders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.orders = action.payload;
      })
      .addCase(getOrders.pending, state => {
        state.isLoading = true;
      })
      .addCase(getOrders.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(getAmbassadorsOrdersById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.ambassadorOrders = action.payload;
      })
      .addCase(getAmbassadorsOrdersById.pending, state => {
        state.isLoading = true;
      })
      .addCase(getAmbassadorsOrdersById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const selectOrders = (state: { orders: IOrdersState }) => state.orders;

export default ordersSlice.reducer;

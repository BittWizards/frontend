import { createSlice } from '@reduxjs/toolkit';
import type { TOrder } from 'src/shared/api/orders/dtos';

import { getOrders } from 'src/shared/api/orders';

interface IOrdersState {
  orders: TOrder[];
  isLoading: boolean;
  error: string | unknown | null;
}

const initialState: IOrdersState = {
  orders: [],
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
      });
  },
});

export const selectOrders = (state: { orders: IOrdersState }) => state.orders;

export default ordersSlice.reducer;

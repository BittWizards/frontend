import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { BASE_URL } from 'src/utils/constants/api';

import type { TAmbassadorsOrders, TNewOrder, TOrder } from './dtos';

const getOrders = createAsyncThunk(
  'order/getOrders',
  async (_, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { data } = await axios.get<TOrder[]>(`${BASE_URL}/api/v1/orders/`);
      return data;
    } catch (e: any) {
      return rejectWithValue(e.message);
    }
  }
);

const getAmbassadorsOrdersById = createAsyncThunk(
  'order/getAmbassadorsOrdersById',
  async (id: number, { rejectWithValue }) => {
    try {
      const { data } = await axios.get<TAmbassadorsOrders>(
        `${BASE_URL}/api/v1/ambassadors/${id}/orders/`
      );

      return data;
    } catch (e: any) {
      return rejectWithValue(e.message);
    }
  }
);

export const postNewOrder = createAsyncThunk(
  'ambassadors/postNewAmbassador',
  async ({ body }: { body: TNewOrder }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post<TNewOrder>(
        `${BASE_URL}/api/v1/orders/`,
        body
      );
      return data;
    } catch (e: any) {
      return rejectWithValue(e.message);
    }
  }
);

export { getOrders, getAmbassadorsOrdersById };

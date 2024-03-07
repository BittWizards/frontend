import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { BASE_URL } from 'src/utils/constants/api';
import type { TAmbassadorsOrders, TOrder } from './dtos';

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
      console.error(`Другая ошибка при запросе getAmbassadorsOrdersById: ${e}`);
      return rejectWithValue(e.message);
    }
  }
);

export { getOrders, getAmbassadorsOrdersById };

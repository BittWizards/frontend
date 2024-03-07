import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { BASE_URL } from 'src/utils/constants/api';
import type { TOrder } from './dtos';

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

export { getOrders };

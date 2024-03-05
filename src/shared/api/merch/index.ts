import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { IMerch } from './dtos';
import { BASE_URL } from 'src/utils/constants/api';

export const getMerch = createAsyncThunk(
  'merch/getMerch',
  async (_, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { data } = await axios.get<IMerch[]>(`${BASE_URL}/api/v1/merch/`);
      return data;
    } catch (e: any) {
      return rejectWithValue(e.message);
    }
  }
);

export const getMerchById = createAsyncThunk(
  'merch/getMerchById',
  async (id: number, { rejectWithValue }) => {
    try {
      const { data } = await axios.get<IMerch[]>(`${BASE_URL}/api/v1/merch/${id}`);
      return data;
    } catch (e: any) {
      return rejectWithValue(e.message);
    }
  }
);

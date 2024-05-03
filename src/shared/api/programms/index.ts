import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { BASE_URL } from 'src/utils/constants/api';
import type { TProgramm } from './dtos';

const getProgramms = createAsyncThunk(
  'programms/getProgramms',
  async (_, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { data } = await axios.get<TProgramm[]>(
        `${BASE_URL}/api/v1/yandexprogramms/`
      );
      return data;
    } catch (e: any) {
      return rejectWithValue(e.message);
    }
  }
);

export { getProgramms };

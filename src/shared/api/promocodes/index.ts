import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { BASE_URL } from 'src/utils/constants/api';
import type { IPromocode } from './dtos';

export const getAllPromocodes = createAsyncThunk(
  'promocodes/getAllPromocodes',
  async (_, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { data } = await axios.get<IPromocode[]>(
        `${BASE_URL}/api/v1/promocodes/`
      );

      return data;
    } catch (e: any) {
      console.error(`Другая ошибка при запросе getAllPromocodes: ${e}`);
      return rejectWithValue(e.message);
    }
  }
);

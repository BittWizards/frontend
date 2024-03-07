import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { BASE_URL } from 'src/utils/constants/api';
import type { IAmbassador } from './dtos';

export const getAllAmbassadors = createAsyncThunk(
  'ambassadors/getAllAmbassadors',
  async (_, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { data } = await axios.get<IAmbassador[]>(
        `${BASE_URL}/api/v1/ambassadors/`
      );

      return data;
    } catch (e: any) {
      console.error(`Другая ошибка при запросе getAllAmbassadors: ${e}`);
      return rejectWithValue(e.message);
    }
  }
);

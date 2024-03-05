import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { BASE_URL } from 'src/utils/constants/api';
import type { INewContentCardData } from './dtos';

export const getNewContent = createAsyncThunk(
  'content/getNewContent',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get<INewContentCardData[]>(
        `${BASE_URL}/api/v1/allcontent/new/`
      );
      return data;
    } catch (e: any) {
      return rejectWithValue(e.message);
    }
  }
);

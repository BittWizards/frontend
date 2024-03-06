import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { BASE_URL } from 'src/utils/constants/api';
import type { IAllContent, INewContentCardData } from './dtos';

const getNewContent = createAsyncThunk(
  'content/getNewContent',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get<INewContentCardData[]>(
        `${BASE_URL}/api/v1/content/new/`
      );
      return data;
    } catch (e: any) {
      return rejectWithValue(e.message);
    }
  }
);

const getAllContent = createAsyncThunk(
  'content/getAllContent',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get<IAllContent[]>(
        `${BASE_URL}/api/v1/allcontent/`
      );
      return data;
    } catch (e: any) {
      return rejectWithValue(e.message);
    }
  }
);

export { getNewContent, getAllContent };

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { BASE_URL } from 'src/utils/constants/api';
import type {
  IAllContent,
  INewContentCardData,
  TAmbassadorContentData,
} from './dtos';

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

const getAmbassadorsContentById = createAsyncThunk(
  'content/getAmbassadorsContentById',
  async (id: number, { rejectWithValue }) => {
    try {
      const { data } = await axios.get<TAmbassadorContentData>(
        `${BASE_URL}/api/v1/ambassadors/${id}/content/`
      );

      return data;
    } catch (e: any) {
      console.error(
        `Другая ошибка при запросе getAmbassadorsContentById: ${e}`
      );
      return rejectWithValue(e.message);
    }
  }
);

export { getNewContent, getAllContent, getAmbassadorsContentById };

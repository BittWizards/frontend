import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { BASE_URL } from 'src/utils/constants/api';
import type { IAmbassador, IAmbassadorById } from './dtos';

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

export const getAmbassadorById = createAsyncThunk(
  'ambassadors/getAmbassadorById',
  async (id: number, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { data } = await axios.get<IAmbassadorById>(
        `${BASE_URL}/api/v1/ambassadors/${id}`
      );

      return data;
    } catch (e: any) {
      console.error(`Другая ошибка при запросе getAmbassadorById: ${e}`);
      return rejectWithValue(e.message);
    }
  }
);

export const getNewAmbassadors = createAsyncThunk(
  'ambassadors/getNewAmbassadors',
  async (_, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { data } = await axios.get<IAmbassador[]>(
        `${BASE_URL}/api/v1/ambassadors/?status=Clarify`
      );

      return data;
    } catch (e: any) {
      console.error(`Другая ошибка при запросе getNewAmbassadors: ${e}`);
      return rejectWithValue(e.message);
    }
  }
);

const body = { status: 'Active' };

export const patchConfirmCandidate = createAsyncThunk(
  'ambassadors/patchConfirmCandidate',
  async (
    { id, status }: { id: number; status: string },
    { fulfillWithValue, rejectWithValue }
  ) => {
    try {
      const { data } = await axios.patch<IAmbassador[]>(
        `${BASE_URL}/api/v1/ambassadors/${id}/`,
        { status }
      );
      return data;
    } catch (e: any) {
      console.error(`Другая ошибка при запросе patchConfirmCandidate: ${e}`);
      return rejectWithValue(e.message);
    }
  }
);

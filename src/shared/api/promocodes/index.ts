import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { BASE_URL } from 'src/utils/constants/api';
import type { IPromocode, TAmbassadorPromocodesData } from './dtos';

const getAllPromocodes = createAsyncThunk(
  'promocodes/getAllPromocodes',
  async (_, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { data } = await axios.get<IPromocode[]>(
        `${BASE_URL}/api/v1/promocodes/`
      );

      return data;
    } catch (e: any) {
      return rejectWithValue(e.message);
    }
  }
);

const getAmbassadorsPromocodesById = createAsyncThunk(
  'promocodes/getAmbassadorsPromocodesById',
  async (id: number, { rejectWithValue }) => {
    try {
      const { data } = await axios.get<TAmbassadorPromocodesData>(
        `${BASE_URL}/api/v1/ambassadors/${id}/promocodes/`
      );

      return data;
    } catch (e: any) {
      return rejectWithValue(e.message);
    }
  }
);

const deleteAmbassadorsPromocodeById = createAsyncThunk(
  'promocodes/deleteAmbassadorsPromocodeById',
  async (id: number, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete<TAmbassadorPromocodesData>(
        `${BASE_URL}/api/v1/promocodes/${id}`
      );

      return data;
    } catch (e: any) {
      return rejectWithValue(e.message);
    }
  }
);

const createAmbassadorsPromocode = createAsyncThunk(
  'promocodes/createAmbassadorsPromocode',
  async (
    { ambassador, promocode }: { ambassador: number; promocode: string },
    { rejectWithValue }
  ) => {
    try {
      const { data } = await axios.post<IPromocode>(
        `${BASE_URL}/api/v1/promocodes/`,
        { promocode, ambassador }
      );

      return data;
    } catch (e: any) {
      return rejectWithValue(e.message);
    }
  }
);

export {
  getAllPromocodes,
  getAmbassadorsPromocodesById,
  deleteAmbassadorsPromocodeById,
  createAmbassadorsPromocode,
};

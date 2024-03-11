import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { BASE_URL } from 'src/utils/constants/api';
import type { IAmbassador, IAmbassadorById, IAmbassadorChange } from './dtos';

export const getAllAmbassadors = createAsyncThunk(
  'ambassadors/getAllAmbassadors',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get<IAmbassador[]>(
        `${BASE_URL}/api/v1/ambassadors/`
      );

      return data;
    } catch (e: any) {
      return rejectWithValue(e.message);
    }
  }
);

export const getAmbassadorById = createAsyncThunk(
  'ambassadors/getAmbassadorById',
  async (id: number, { rejectWithValue }) => {
    try {
      const { data } = await axios.get<IAmbassadorById>(
        `${BASE_URL}/api/v1/ambassadors/${id}`
      );

      return data;
    } catch (e: any) {
      return rejectWithValue(e.message);
    }
  }
);

export const getNewAmbassadors = createAsyncThunk(
  'ambassadors/getNewAmbassadors',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get<IAmbassador[]>(
        `${BASE_URL}/api/v1/ambassadors/?status=Clarify`
      );

      return data;
    } catch (e: any) {
      return rejectWithValue(e.message);
    }
  }
);

export const patchConfirmCandidate = createAsyncThunk(
  'ambassadors/patchConfirmCandidate',
  async (
    { id, status }: { id: number; status: string },
    { rejectWithValue }
  ) => {
    try {
      const { data } = await axios.patch<IAmbassador[]>(
        `${BASE_URL}/api/v1/ambassadors/${id}/`,
        { status }
      );
      return data;
    } catch (e: any) {
      return rejectWithValue(e.message);
    }
  }
);

export const patchChangeAmbassador = createAsyncThunk(
  'ambassadors/patchChangeAmbassador',
  async (
    { id, body }: { id: number; body: IAmbassadorChange },
    { rejectWithValue }
  ) => {
    try {
      const { data } = await axios.patch<IAmbassador[]>(
        `${BASE_URL}/api/v1/ambassadors/${id}/`,
        {
          gender: body.gender,
          middle_name: body.middle_name,
          first_name: body.first_name,
          last_name: body.last_name,
          address: {
            country: body.country,
            city: body.city,
            street_home: body.street_home,
            post_index: body.post_index,
          },
          size: {
            clothes_size: body.clothes_size,
            foot_size: body.foot_size,
          },
          ya_programm: body.ya_programm,
          purpose: body.purpose,
          education: body.education,
          work: body.work,
          tg_acc: body.tg_acc,
          email: body.email,
          phone: body.phone,
        }
      );
      return data;
    } catch (e: any) {
      return rejectWithValue(e.message);
    }
  }
);

export const postNewAmbassador = createAsyncThunk(
  'ambassadors/postNewAmbassador',
  async ({ body }: { body: IAmbassadorChange }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post<IAmbassador[]>(
        `${BASE_URL}/api/v1/ambassadors/`,
        {
          gender: body.gender,
          middle_name: body.middle_name,
          first_name: body.first_name,
          last_name: body.last_name,
          address: {
            country: body.country,
            city: body.city,
            street_home: body.street_home,
            post_index: body.post_index,
          },
          size: {
            clothes_size: body.clothes_size,
            foot_size: body.foot_size,
          },
          ya_programm: body.ya_programm,
          purpose: body.purpose,
          education: body.education,
          work: body.work,
          tg_acc: body.tg_acc,
          email: body.email,
          phone: body.phone,
          actions: [],
        }
      );
      return data;
    } catch (e: any) {
      return rejectWithValue(e.message);
    }
  }
);

export const deleteAmbassador = createAsyncThunk(
  'ambassadors/deleteAmbassador',
  async (id: number, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete<IAmbassadorById>(
        `${BASE_URL}/api/v1/ambassadors/${id}`
      );

      return data;
    } catch (e: any) {
      return rejectWithValue(e.message);
    }
  }
);

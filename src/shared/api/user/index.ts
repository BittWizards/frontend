import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { TUser } from './dtos';
import { BASE_URL } from 'src/utils/constants/api';
import { TToken } from 'src/pages/LoginPage/types/types';

const getUserToken = createAsyncThunk(
  'user/getToken',
  async (token: TToken, { rejectWithValue }) => {
    console.log(token);
    try {
      const { data } = await axios.get<string>(
        'https://login.yandex.ru/info?format=jwt',
        {
          headers: { Authorization: `OAuth ${token.access_token}` },
        }
      );
      localStorage.setItem('token', data);
      return data;
    } catch (e: any) {
      return rejectWithValue(e.message);
    }
  }
);

const getUser = createAsyncThunk(
  'user/getUser',
  async (_, { rejectWithValue }) => {
    const token = localStorage.getItem('token');

    try {
      const { data } = await axios.get<TUser>(`${BASE_URL}/api/login/`, {
        headers: { Authorization: `Token ${token}` },
      });
      return data;
    } catch (e: any) {
      return rejectWithValue(e.message);
    }
  }
);

export { getUserToken, getUser };

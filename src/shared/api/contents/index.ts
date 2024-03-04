import type { AsyncThunk } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { BASE_URL } from 'src/utils/constants/api';
import type { ResultWithErrors } from 'src/shared/api/ambassadors/dtos';
import type { TNewContentCardData } from './dtos';

export const getNewContent: AsyncThunk<
  ResultWithErrors<TNewContentCardData[]>,
  void,
  {}
> = createAsyncThunk('ambassadors/getAllAmbassadors', async (_, thunkApi) => {
  try {
    const response = await axios.get<TNewContentCardData[]>(
      `${BASE_URL}/api/v1/allcontents/new/`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    return { data: response.data } as ResultWithErrors<TNewContentCardData[]>;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error(
        `Ошибка при запросе getNewContent: ${err.code}:${err.message}`
      );
      return thunkApi.rejectWithValue({ message: err.message, code: err.code });
    } 
    console.error(`Другая ошибка при запросе getNewContent: ${err}`);
    return thunkApi.rejectWithValue({
      message: 'Unknown error',
      code: 'UNKNOWN',
    });
    
  }
});

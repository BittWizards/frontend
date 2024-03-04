import type { AsyncThunk } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { BASE_URL } from 'src/utils/constants/api';
import type { IAmbassador, ResultWithErrors } from './dtos';

export const getAllAmbassadors: AsyncThunk<
  ResultWithErrors<IAmbassador[]>,
  void,
  {}
> = createAsyncThunk('ambassadors/getAllAmbassadors', async (_, thunkApi) => {
  try {
    const response = await axios.get<IAmbassador[]>(
      `${BASE_URL}/api/v1/ambassadors/`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    return { data: response.data } as ResultWithErrors<IAmbassador[]>;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error(
        `Ошибка при запросе getAllAmbassadors: ${err.code}:${err.message}`
      );
      return thunkApi.rejectWithValue({ message: err.message, code: err.code });
    } 
    console.error(`Другая ошибка при запросе getAllAmbassadors: ${err}`);
    return thunkApi.rejectWithValue({
      message: 'Unknown error',
      code: 'UNKNOWN',
    });
    
  }
});

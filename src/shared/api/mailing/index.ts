import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { BASE_URL } from 'src/utils/constants/api';
import type { TMail, TMailPost } from './dtos';

const postMail = createAsyncThunk(
  'mailing/postMail',
  async ({ body }: { body: TMailPost }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post<TMail>(
        `${BASE_URL}/api/v1/mailing/`,
        body
      );
      return data;
    } catch (e: any) {
      return rejectWithValue(e.message);
    }
  }
);

export { postMail };

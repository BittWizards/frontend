import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from 'src/app/store/store';

import type { RequestState } from 'src/app/store/type';

import type { ResultWithErrors } from 'src/shared/api/ambassadors/dtos';
import type { TNewContentCardData } from 'src/shared/api/contents/dtos';

import { createSlice } from '@reduxjs/toolkit';
import { fetchContent } from 'src/shared/api/contents';

type TContentState = {
  data: TNewContentCardData[];
  loading: boolean;
  status: RequestState | undefined;
  error: {
    message: string;
    code: string;
  } | null;
};

const initialState: TContentState = {
  data: [],
  loading: false,
  error: null,
  status: undefined,
};

const contentSlice = createSlice({
  name: 'contents',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchContent.pending, (state, action) => {
        state.status = 'pending';
        state.data = [];
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchContent.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.data = action.payload.data || [];
        state.loading = false;
        state.data = action.payload.data || [];
        state.error = null;
      })
      .addCase(fetchContent.rejected, (state, action) => {
        state.status = 'rejected';

        const payload = action.payload as
          | ResultWithErrors<TContentState[]>
          | undefined;

        state.loading = false;
        state.error = payload
          ? { ...(payload as any) }
          : { message: 'Unknown error', code: 'UNKNOWN' };
      });
  },
});

const getContentStatus = (state: RootState) => state.content.status;

export { getContentStatus };

export default contentSlice.reducer;

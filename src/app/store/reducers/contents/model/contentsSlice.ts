import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { ResultWithErrors } from 'src/shared/api/ambassadors/dtos';
import type { TNewContentCardData } from 'src/shared/api/contents/dtos';
import { getNewContent } from 'src/shared/api/contents';

type TContentsState = {
  contents: TNewContentCardData[];
  loading: boolean;
  error: {
    message: string;
    code: string;
  } | null;
};

const initialState: TContentsState = {
  contents: [],
  loading: false,
  error: null,
};

const contentsSlice = createSlice({
  name: 'contents',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getNewContent.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        getNewContent.fulfilled.type,
        (
          state,
          action: PayloadAction<ResultWithErrors<TNewContentCardData[]>>
        ) => {
          state.loading = false;
          state.contents = action.payload.data || [];
          state.error = null;
        }
      )
      .addCase(getNewContent.rejected, (state, action) => {
        const payload = action.payload as
          | ResultWithErrors<TContentsState[]>
          | undefined;
        state.loading = false;
        state.error = payload
          ? { ...(payload as any) }
          : { message: 'Unknown error', code: 'UNKNOWN' };
      });
  },
});

export const selectNewContents = (state: { contents: TContentsState }) =>
  state.contents;

export default contentsSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import { getAllContent, getNewContent } from 'src/shared/api/content';
import type {
  IAllContent,
  INewContentCardData,
} from 'src/shared/api/content/dtos';

interface IContentsState {
  newContent: INewContentCardData[];
  allContent: IAllContent[];
  isLoading: boolean;
  error: string | null | unknown;
}

const initialState: IContentsState = {
  newContent: [],
  allContent: [],
  isLoading: false,
  error: null,
};

const contentSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getNewContent.pending, state => {
        state.isLoading = true;
      })
      .addCase(getNewContent.fulfilled, (state, action) => {
        state.isLoading = false;
        state.newContent = action.payload;
        state.error = null;
      })
      .addCase(getNewContent.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(getAllContent.pending, state => {
        state.isLoading = true;
      })
      .addCase(getAllContent.fulfilled, (state, action) => {
        state.isLoading = false;
        state.allContent = action.payload;
        state.error = null;
      })
      .addCase(getAllContent.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const selectContent = (state: { content: IContentsState }) =>
  state.content;

export default contentSlice.reducer;

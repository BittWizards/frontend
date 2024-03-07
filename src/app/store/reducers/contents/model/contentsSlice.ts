import { createSlice } from '@reduxjs/toolkit';
import {
  getAllContent,
  getNewContent,
  getAmbassadorsContentById,
  getContentDetailById,
} from 'src/shared/api/content';
import type {
  IAllContent,
  INewContentCardData,
  TAmbassadorContentData,
  TContentDetail,
} from 'src/shared/api/content/dtos';
import {
  initialAmbassadorContentData,
  initialAmbassadorContentDetail,
} from './const';

interface IContentsState {
  newContent: INewContentCardData[];
  allContent: IAllContent[];
  ambassadorContent: TAmbassadorContentData;
  contentDetail: TContentDetail;
  isLoading: boolean;
  error: string | null | unknown;
}

const initialState: IContentsState = {
  newContent: [],
  allContent: [],
  ambassadorContent: initialAmbassadorContentData,
  contentDetail: initialAmbassadorContentDetail,
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
      })

      .addCase(getAmbassadorsContentById.pending, state => {
        state.isLoading = true;
      })
      .addCase(getAmbassadorsContentById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.ambassadorContent = action.payload;
        state.error = null;
      })
      .addCase(getAmbassadorsContentById.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })

      .addCase(getContentDetailById.pending, state => {
        state.isLoading = true;
      })
      .addCase(getContentDetailById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contentDetail = action.payload;
        state.error = null;
      })
      .addCase(getContentDetailById.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const selectContent = (state: { content: IContentsState }) =>
  state.content;

export default contentSlice.reducer;

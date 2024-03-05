import { configureStore } from '@reduxjs/toolkit';
import { ambassadorsReducer } from './reducers/ambassadors';
import { contentsReducer } from './reducers/contents';
import { merchReducer } from './reducers/merch';

export const store = configureStore({
  reducer: {
    ambassadors: ambassadorsReducer,
    contents: contentsReducer,
    merch: merchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

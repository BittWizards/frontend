import { configureStore } from '@reduxjs/toolkit';
import { ambassadorsReducer } from './reducers/ambassadors';

export const store = configureStore({
  reducer: {
    ambassadors: ambassadorsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

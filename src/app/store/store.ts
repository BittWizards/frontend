import { configureStore } from '@reduxjs/toolkit';
import { ambassadorsReducer } from './reducers/ambassadors';
import { contentsReducer } from './reducers/contents';
import { merchReducer } from './reducers/merch';
import { promocodesReducer } from './reducers/promocodes';
import { ordersReducer } from './reducers/orders/imdex';

export const store = configureStore({
  reducer: {
    ambassadors: ambassadorsReducer,
    content: contentsReducer,
    merch: merchReducer,
    promocodes: promocodesReducer,
    orders: ordersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

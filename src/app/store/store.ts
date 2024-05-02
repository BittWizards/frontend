import { configureStore } from '@reduxjs/toolkit';
import { ambassadorsReducer } from './reducers/ambassadors';
import { contentsReducer } from './reducers/contents';
import { merchReducer } from './reducers/merch';
import { promocodesReducer } from './reducers/promocodes';
import { ordersReducer } from './reducers/orders';
import { questionnaireReducer } from './reducers/questionnaire';
import { notificationsReducer } from './reducers/notifications';
import { modalReducer } from './reducers/modal';
import { userReducer } from './reducers/user';
import { programmsReducer } from './reducers/programms';

export const store = configureStore({
  reducer: {
    notifications: notificationsReducer,
    ambassadors: ambassadorsReducer,
    content: contentsReducer,
    merch: merchReducer,
    promocodes: promocodesReducer,
    orders: ordersReducer,
    questionnaire: questionnaireReducer,
    modal: modalReducer,
    user: userReducer,
    programms: programmsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

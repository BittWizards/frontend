import { configureStore } from '@reduxjs/toolkit';
import { ambassadorsReducer } from './reducers/ambassadors';
import { contentsReducer } from './reducers/contents';
import { merchReducer } from './reducers/merch';
import { questionnaireReducer } from './reducers/questionnaire';

export const store = configureStore({
  reducer: {
    ambassadors: ambassadorsReducer,
    content: contentsReducer,
    merch: merchReducer,
    questionnaire: questionnaireReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

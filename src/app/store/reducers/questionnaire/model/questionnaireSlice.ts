import { createSlice } from '@reduxjs/toolkit';

interface QuestionnaireState {
  isEdit: boolean;
  isEditable: boolean;
}

const initialState: QuestionnaireState = {
  isEdit: false,
  isEditable: false,
};

const QuestionnaireSlice = createSlice({
  name: 'questionnaire',
  initialState,
  reducers: {
    setIsEdit: (state, action) => {
      state.isEdit = action.payload;
    },
    setIsEditable: (state, action) => {
      state.isEditable = action.payload;
    },
  },
});

export const { setIsEdit, setIsEditable } = QuestionnaireSlice.actions;
export const selectQuestionnaire = (state: {
  questionnaire: QuestionnaireState;
}) => state.questionnaire;
export default QuestionnaireSlice.reducer;

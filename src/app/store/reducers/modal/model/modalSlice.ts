import { createSlice } from '@reduxjs/toolkit';

interface IModalState {
  isOpen: boolean;
  isSecondaryOpen: boolean;
  isCancelOpen: boolean;
  isCancelSecondaryOpen: boolean;
  isRemoveOpen: boolean;
  isRemoveSecondaryOpen: boolean;
  requestData: Object;
}

const initialState: IModalState = {
  isOpen: false,
  isSecondaryOpen: false,
  isCancelOpen: false,
  isCancelSecondaryOpen: false,
  isRemoveOpen: false,
  isRemoveSecondaryOpen: false,
  requestData: {},
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setIsOpen: (state, action) => {
      state.isOpen = action.payload;
    },
    setIsSecondaryOpen: (state, action) => {
      state.isSecondaryOpen = action.payload;
    },
    setIsCancelOpen: (state, action) => {
      state.isCancelOpen = action.payload;
    },
    setIsCancelSecondaryOpen: (state, action) => {
      state.isCancelSecondaryOpen = action.payload;
    },
    setIsRemoveOpen: (state, action) => {
      state.isRemoveOpen = action.payload;
    },
    setIsRemoveSecondaryOpen: (state, action) => {
      state.isRemoveSecondaryOpen = action.payload;
    },
    setRequestData: (state, action) => {
      state.requestData = action.payload;
    },
  },
});

export const selectModal = (state: { modal: IModalState }) => state.modal;
export const {
  setIsOpen,
  setIsSecondaryOpen,
  setIsCancelOpen,
  setIsCancelSecondaryOpen,
  setIsRemoveOpen,
  setIsRemoveSecondaryOpen,
  setRequestData,
} = modalSlice.actions;
export default modalSlice.reducer;

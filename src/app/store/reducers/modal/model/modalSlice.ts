import { createSlice } from '@reduxjs/toolkit';

interface IModalState {
  isOpen: boolean;
  isSecondaryOpen: boolean;
  isCancelOpen: boolean;
  isCancelSecondaryOpen: boolean;
  requestData: Object;
}

const initialState: IModalState = {
  isOpen: false,
  isSecondaryOpen: false,
  isCancelOpen: false,
  isCancelSecondaryOpen: false,
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
    setIsCancelOpen : (state, action) => {
      state.isCancelOpen = action.payload
    },
    setIsCancelSecondaryOpen : (state, action) => {
      state.isCancelSecondaryOpen = action.payload
    },
    onConfirm: state => {
      state.isOpen = true;
    },
    onConfirmChanges: state => {
      state.isOpen = false;
      state.isSecondaryOpen = true;
    },
    onCancelChanges: state => {
      state.isOpen = false;
      state.requestData = {};
    },
    onCloseSecondaryModal: state => {
      state.isSecondaryOpen = false;
      state.requestData = {};
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
  onConfirm,
  onConfirmChanges,
  onCancelChanges,
  onCloseSecondaryModal,
  setIsCancelOpen,
  setIsCancelSecondaryOpen,
  setRequestData,
} = modalSlice.actions;
export default modalSlice.reducer;

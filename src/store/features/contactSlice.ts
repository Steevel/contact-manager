import { createSlice } from '@reduxjs/toolkit';
import { InitialState } from '../../types';

const initialState:InitialState = {
  contacts: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
  },
});

export const { addContact } = contactsSlice.actions;

export default contactsSlice.reducer;

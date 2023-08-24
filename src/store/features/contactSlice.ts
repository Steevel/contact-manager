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
    updateContact: (state, action) => {
      const { id, updatedContact } = action.payload;
      const contactIndex = state.contacts.findIndex(contact => contact.id === id);
      if (contactIndex !== -1) {
        state.contacts[contactIndex] = { ...state.contacts[contactIndex], ...updatedContact };
      }
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, updateContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;

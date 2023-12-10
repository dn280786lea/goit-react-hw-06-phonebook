import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = {
  contacts: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    addContactAction: {
      prepare(newContact) {
        return {
          payload: {
            ...newContact,
            id: nanoid(),
          },
        };
      },
      reducer(state, action) {
        return { ...state, contacts: [...state.contacts, action.payload] };
      },
    },
    removeContactAction(state, action) {
      state.contacts = state.contacts.filter(({ id }) => id !== action.payload);
    },
  },
});

export const { addContactAction, removeContactAction } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

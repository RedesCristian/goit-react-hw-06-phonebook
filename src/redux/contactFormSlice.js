import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  number: '',
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
};

const contactFormSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setNumber: (state, action) => {
      state.number = action.payload;
    },
    addContact: (state, action) => {
      const newContact = action.payload;

      const contactExists = state.contacts.some(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      );

      if (contactExists) {
        alert('The contact is already in the phonebook');
      } else {
        state.contacts.push(newContact);
      }

      state.name = '';
      state.number = '';
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const { setName, setNumber, addContact, deleteContact } =
  contactFormSlice.actions;
export default contactFormSlice.reducer;

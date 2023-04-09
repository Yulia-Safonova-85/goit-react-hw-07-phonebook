import { createSlice } from "@reduxjs/toolkit";

import {fetchContacts, addContact, deleteContact} from './Operations';

const InitialContactsState = {
items: [],
isLoading: false,
error: null
}

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactSlice = createSlice({
  name:'contacts',
  initialState:InitialContactsState,
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state,action){
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,

    [addContact.pending]: handlePending,
    [addContact.fulfilled](state,action){
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContact.rejected]: handleRejected,

    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action){
      state.isLoading = false;
      state.error = null;
      state.items = state.items.filter(({ id }) => id !== action.payload);
    },
    [deleteContact.rejected]: handleRejected,
  }
})

export const contactsReducer = contactSlice.reducer;






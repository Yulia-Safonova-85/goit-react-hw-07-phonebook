import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const InitialContactsState = {
  items: [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
],
}

const contactSlice = createSlice({
  name:'contacts',
  initialState:InitialContactsState,
 reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },

      prepare({ name, number }) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,},
        };
      },
      },
      deleteContact(state, action) {
        state.items = state.items.filter(({ id }) => id !== action.payload);
      },
    }
});

export const {addContact, deleteContact} = contactSlice.actions;

export const getContacts = state => state.contacts.items;

const persistConfig = {
  key: 'contacts',
  storage,
};

export const persistedContactsReducer = persistReducer(persistConfig, contactSlice.reducer);


//  export const contactSlice = createSlice({
//     name: 'contacts',
//     initialState: {
//         contacts: [
//           { id: "id-1", name: "Rosie Simpson", number: 459-12-56 },
//           { id: "id-2", name: "Hermione Kline", number: 443-89-12},
//           { id: "id-3", name: "Eden Clements", number: 645-17-79 },
//           { id: "id-4", name: "Annie Copeland", number: 227-91-26 }
//     ],
//     filters: ''
//     },
//     reducers: {
//         addContact: {
//             reducer(state, action) {
//               state.contacts.push(action.payload);
//             },
//             prepare(name, number) {
//               return {
//                 payload: {
//                  name,
//                   number,
//                   id: nanoid(),
//                 },
//               };
//             },
//           },
            
//         deleteContact(state,action){
//             return state.contacts.filter(contact=> contact.id !== action.payload);
//         },
//         setFilter(state,action){
//           state.filters = action.payload;                                                                                                                                                                                                                                  
//         },
//     }
// });

// export const {addContact, deleteContact, setFilter}= contactSlice.actions;




import { createSlice } from "@reduxjs/toolkit";
import contactsOperations from "./operations";

const contactsInitialState = {
    items: [],
    isLoading: false,
    error: null,
};

const handlePending = state => {
    state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsInitialState,
    extraReducers: {
        [contactsOperations.fetchContacts.pending]: handlePending,
        [contactsOperations.addContact.pending]: handlePending,
        [contactsOperations.deleteContact.pending]: handlePending,
        [contactsOperations.fetchContacts.rejected]: handleRejected,
        [contactsOperations.addContact.rejected]: handleRejected,
        [contactsOperations.deleteContact.rejected]: handleRejected,
        [contactsOperations.fetchContacts.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
        },
        [contactsOperations.addContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items.push(action.payload);
        },
        [contactsOperations.deleteContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            const index = state.items.findIndex(
            contact => contact.id === action.payload.id
            );
            state.items.splice(index, 1);
        },
    },
});

export const contactsReducer = contactsSlice.reducer;

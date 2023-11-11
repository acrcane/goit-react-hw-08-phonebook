import { createSlice } from '@reduxjs/toolkit';
import {
    addContact,
    deleteContact,
    editContact,
    fetchContacts,
} from './operations';

// -- pending --
const handlePending = state => {
    state.isLoading = true;
};

//  -- rejected --
const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};


const initialState = {
    items: [],
    isLoading: false,
    error: null,
};

const contactsSlice = createSlice({

    name: 'contacts',

    initialState,

    extraReducers: {

        [fetchContacts.pending]: handlePending,
        [fetchContacts.fulfilled](state, action) {
        state.items = action.payload;
        state.isLoading = false;
        },
        [fetchContacts.rejected]: handleRejected,

        [addContact.pending]: handlePending,
        [addContact.fulfilled](state, action) {
        state.items.push(action.payload);
        state.isLoading = false;
        },
        [addContact.rejected]: handleRejected,

        [deleteContact.pending]: handlePending,
        [deleteContact.fulfilled](state, action) {
        state.items = state.items.filter(item => item.id !== action.payload.id);
        state.isLoading = false;
        },
        [deleteContact.rejected]: handleRejected,

        [editContact.pending]: handlePending,
        [editContact.fulfilled](state, action) {
        state.items = state.items.map(item => {
            if (item.id === action.payload.id) {
            return action.payload;
            }
            return item;
        });
        state.isLoading = false;
        },
        [editContact.rejected]: handleRejected,
    },
});


export const contactsReducer = contactsSlice.reducer;
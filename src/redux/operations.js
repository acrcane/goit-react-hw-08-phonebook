import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/'; 

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkAPI) => {
        try {
        const { data } = await axios.get('/contacts');
        return data;
        } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const addContact = createAsyncThunk(
    'contact/addContact',
    async (contact, thunkAPI) => {
        try {
        const { data } = await axios.post('/contacts', contact);
        return data;
        } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    'contact/deleteContact',
    async (id, thunkAPI) => {
        try {
        const { data } = await axios.delete(`/contacts/${id}`);
        return data;
        } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const editContact = createAsyncThunk(
    'contact/editContact',
    async ({ id, name, number }, thunkAPI) => {
        try {
        const { data } = await axios.patch(`/contacts/${id}`, { name, number });
        return data;
        } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
        }
    }
);
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';


axios.defaults.baseURL = 'https://connections-api.herokuapp.com/'; // 08


const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};


const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
};

//---------------------------


export const register = createAsyncThunk(
    'auth/register',
    async (credentials, thunkAPI) => {
        try {
        const res = await axios.post('/users/signup', credentials);
        setAuthHeader(res.data.token);
        return res.data;
        } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
        }
    }
);


export const logIn = createAsyncThunk(
    'auth/login',
    async (credentials, thunkAPI) => {
        try {
        const res = await axios.post('/users/login', credentials);
        setAuthHeader(res.data.token);
        return res.data;
        } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
        }
    }
);


export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    try {
        await axios.post('/users/logout');
        clearAuthHeader();
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});



export const refreshUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
        const { token } = thunkAPI.getState().auth;

        if (token === null) {
        return thunkAPI.rejectWithValue('No valid token');
        }

        try {
        setAuthHeader(token);
        const res = await axios.get('/users/current');

        return res.data;
        } catch (err) {
        return thunkAPI.rejectWithValue(err.message);
        }
    }
);
import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';

const initialState = {
    user: { name: null, email: null },
    token: null,
    isAuthError: false,
    isLoggedIn: false,
    isRefreshing: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,

    extraReducers: {
        [register.fulfilled](state, action) {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isAuthError = false;
        state.isRefreshing = false;
        },
        [register.rejected](state, _action) {
        state.isAuthError = true;
        state.isRefreshing = false;
        },
        //----------------
        [logIn.fulfilled](state, action) {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isAuthError = false;
        state.isRefreshing = false;
        },
        [logIn.rejected](state, _action) {
        state.isAuthError = true;
        state.isRefreshing = false;
        },
        //--------------
        [logOut.fulfilled](state) {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.isAuthError = false;
        },
        //----------------
        [refreshUser.pending](state) {
        state.isRefreshing = true;
        },
        [refreshUser.fulfilled](state, action) {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.isAuthError = false;
        },
        [refreshUser.rejected](state) {
        state.isRefreshing = false;
        state.isAuthError = true;
        },
    },
});

export const authReducer = authSlice.reducer;
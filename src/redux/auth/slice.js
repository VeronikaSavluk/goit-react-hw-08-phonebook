import { createSlice } from "@reduxjs/toolkit";
import authOperations from "./operations";

const initialState = {
    user: {name: null, email: null},
    token: null,
    isLoggedin: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: {
        [authOperations.register.fulfilled](state, action) {
            const { user, token } = action.payload;
            state.user = user;
            state.token = token;
            state.isLoggedin = true;
        },
        [authOperations.logIn.fulfilled](state, action) {
            const { user, token } = action.payload;
            state.user = user;
            state.token = token;
            state.isLoggedin = true;
        },
        [authOperations.logOut.fulfilled](state) {
            state.user = {name: null, email: null};
            state.token = null;
            state.isLoggedin = false;
        }
    },
});

export const authReducer = authSlice.reducer;
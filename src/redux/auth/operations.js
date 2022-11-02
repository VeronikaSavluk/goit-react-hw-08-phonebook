import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = token;
    },
    unset() {
        axios.defaults.headers.common.Authorization = "";
    }
};

const register = createAsyncThunk("auth/register", async (credential, thunkAPI) => {
    try {
        const { data } = await axios.post("/users/signup", credential);
        token.set(data.token);
        return data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});

const logIn = createAsyncThunk("auth/login", async (credential, thunkAPI) => {
    try {
        const { data } = await axios.post("/users/login", credential);
        token.set(data.token);
        return data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});

const logOut = createAsyncThunk("auth/logout", async (credential, thunkAPI) => {
    try {
        const { data } = await axios.post("/users/logout", credential);
        token.unset(data.token);
        return data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});

const authOperations = {
    register,
    logIn,
    logOut,
};

export default authOperations;
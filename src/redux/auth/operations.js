import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";

axios.defaults.baseURL = `https://connections-api.herokuapp.com`;

const register = createAsyncThunk("auth/register", async credential => {
    try {
        const { data } = await axios.post("user/signup", credential);
        return data;
    } catch (error) {
        console.log(error);
    }
});

const authOperations = {
register,
};

export default authOperations;
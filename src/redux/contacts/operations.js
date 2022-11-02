import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchContacts = createAsyncThunk(
  "/contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
    const {data} = await axios.get("/contacts");
    return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

const addContact = createAsyncThunk(
  "contacts/addContact",
  async ({name, number}, thunkAPI) => {
    try {
      const {data} = await axios.post("/contacts", { name, number });
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (itemId, thunkAPI) => {
    try {
      const {data} = await axios.delete(`/contacts/${itemId}`);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

const contactsOperations = {
  fetchContacts,
  addContact,
  deleteContact,
};

export default contactsOperations;
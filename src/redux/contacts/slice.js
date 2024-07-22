import { createSlice } from "@reduxjs/toolkit";
import { fetchContact, deleteContact, addContact } from "./operations";

const contactsInitialState = {
  contacts: {
    items: [],
    loading: false,
    error: null,
  },
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
  reducers: {},

  extraReducers: (builder) => {
    builder

      .addCase(fetchContact.pending, (state) => {
        state.isLoading = true;
        state.error = "";
      })
      .addCase(fetchContact.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchContact.rejected, (state) => {
        state.isLoading = false;
        state.error = "";
      })
      .addCase(addContact.pending, (state) => {
        state.loading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteContact.pending, (state) => {
        state.isLoading = true;
        state.error = "";
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.items = state.items.filter((el) => el.id !== payload.id);
        state.isLoading = false;
      })
      .addCase(deleteContact.rejected, (state, { error }) => {
        state.isLoading = false;
        state.error = error.message;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const clientSlice = createSlice({
  name: "client",
  initialState: {
    clients: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    getClientsStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getClientsSuccess: (state, action) => {
      state.isFetching = false;
      state.clients = action.payload;
    },
    getClientsFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    deleteClientsStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteClientsSuccess: (state, action) => {
      state.isFetching = false;
      state.clients.splice(
        state.clients.findIndex((item) => item._id === action.payload._id),
        1
      );
    },
    deleteClientsFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    updateClientsStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateClientsSuccess: (state, action) => {
      state.isFetching = false;
      state.clients[
        state.clients.findIndex((item) => item._id === action.payload._id)
      ] = action.payload.product;
    },
    updateClientsFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    createClientsStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    createClientsSuccess: (state, action) => {
      state.isFetching = false;
      state.clients.push(action.payload);
    },
    createClientsFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getClientsStart,
  getClientsSuccess,
  getClientsFailure,
  deleteClientsStart,
  deleteClientsSuccess,
  deleteClientsFailure,
  updateClientsStart,
  updateClientsSuccess,
  updateClientsFailure,
  createClientsStart,
  createClientsSuccess,
  createClientsFailure,
} = clientSlice.actions;

export default clientSlice.reducer;

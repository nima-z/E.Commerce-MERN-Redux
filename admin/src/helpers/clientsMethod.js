import {
  deleteClientsFailure,
  deleteClientsStart,
  deleteClientsSuccess,
  getClientsFailure,
  getClientsStart,
  getClientsSuccess,
  updateClientsFailure,
  updateClientsStart,
  updateClientsSuccess,
  createClientsFailure,
  createClientsStart,
  createClientsSuccess,
} from "../redux/clientRedux";

import { adminRequest } from "./requestMethod";
//==============================================

// fetch all users
export async function getClients(dispatch, token) {
  dispatch(getClientsStart());
  try {
    const res = await adminRequest(token).get("/users");
    dispatch(getClientsSuccess(res.data.users));
  } catch (err) {
    dispatch(getClientsFailure());
  }
}

// create a user
export async function createClients(dispatch, token, newClient) {
  dispatch(createClientsStart());
  try {
    const res = await adminRequest(token).post(`/auth/register`, {
      ...newClient,
    });
    dispatch(createClientsSuccess(res.data.user));
  } catch (err) {
    dispatch(createClientsFailure());
  }
}

// edit & update a users
export async function updateClients(dispatch, token, uId, updatedClient) {
  dispatch(updateClientsStart());
  try {
    const res = await adminRequest(token).patch(`/users/${uId}`, {
      ...updatedClient,
    });
    dispatch(updateClientsSuccess(res.data.users));
  } catch (err) {
    dispatch(updateClientsFailure());
  }
}

// delete a user
export async function deleteClients(dispatch, uId, token) {
  dispatch(deleteClientsStart());
  try {
    const res = await adminRequest(token).delete(`/users/${uId}`);
    dispatch(deleteClientsSuccess(res.data.user));
  } catch (err) {
    dispatch(deleteClientsFailure());
  }
}

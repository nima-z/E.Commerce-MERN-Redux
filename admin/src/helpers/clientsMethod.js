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

import { userRequest } from "./requestMethod";
//==============================================

// fetch all users
export async function getClients(dispatch) {
  dispatch(getClientsStart());
  try {
    const res = await userRequest.get("/users");
    dispatch(getClientsSuccess(res.data.users));
  } catch (err) {
    dispatch(getClientsFailure());
  }
}

// create a user
export async function createClients(dispatch, newClient) {
  dispatch(createClientsStart());
  try {
    const res = await userRequest.post(`/auth/register`, { ...newClient });
    dispatch(createClientsSuccess(res.data.user));
  } catch (err) {
    dispatch(createClientsFailure());
  }
}

// edit & update a users
export async function updateClients(dispatch, pId, updatedClient) {
  dispatch(updateClientsStart());
  try {
    const res = await userRequest.patch(`/users/${pId}`, { ...updatedClient });
    dispatch(updateClientsSuccess(res.data.users));
  } catch (err) {
    dispatch(updateClientsFailure());
  }
}

// delete a user
export async function deleteClients(dispatch, uId) {
  dispatch(deleteClientsStart());
  try {
    const res = await userRequest.delete(`/users/${uId}`);
    dispatch(deleteClientsSuccess(res.data.user));
  } catch (err) {
    dispatch(deleteClientsFailure());
  }
}

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

import { publicRequest, userRequest } from "./requestMethod";

export async function getClients(dispatch) {
  dispatch(getClientsStart());
  try {
    const res = await userRequest.get("/users");
    dispatch(getClientsSuccess(res.data.users));
  } catch (err) {
    dispatch(getClientsFailure());
  }
}

export async function deleteClients(dispatch, uId) {
  dispatch(deleteClientsStart());
  try {
    const res = await userRequest.delete(`/users/${uId}`);
    dispatch(deleteClientsSuccess(res.data.user));
  } catch (err) {
    dispatch(deleteClientsFailure());
  }
}

export async function updateClients(dispatch, pId, updatedClient) {
  dispatch(updateClientsStart());
  try {
    const res = await userRequest.patch(`/users/${pId}`, { ...updatedClient });
    dispatch(updateClientsSuccess(res.data.users));
  } catch (err) {
    dispatch(updateClientsFailure());
  }
}

export async function createClients(dispatch, newClient) {
  dispatch(createClientsStart());
  try {
    const res = await userRequest.post(`/users`, { ...newClient });
    dispatch(createClientsSuccess(res.data.user));
  } catch (err) {
    dispatch(createClientsFailure());
  }
}

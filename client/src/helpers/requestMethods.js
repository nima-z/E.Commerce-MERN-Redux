import axios from "axios";

const baseURL = "http://localhost:8000";

const token =
  localStorage.getItem("persist:root") &&
  JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
    .currentUser &&
  JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
    .user.accessToken;

export const publicRequest = axios.create({
  baseURL,
});

export const userRequest = axios.create({
  baseURL,
  headers: { token: `Bearer ${token}` },
});

export function requestWithSignal(controller, data, URL) {
  return axios.request({
    method: "POST",
    url: `/api/${URL}`,
    headers: { token: `Bearer ${token}` },
    signal: controller.signal,
    data: { ...data },
  });
}

export function arrayWithSignal(controller, data, URL, newToken) {
  return axios.request({
    method: "POST",
    url: `/api/${URL}`,
    headers: { token: `Bearer ${newToken}` },
    signal: controller.signal,
    data,
  });
}

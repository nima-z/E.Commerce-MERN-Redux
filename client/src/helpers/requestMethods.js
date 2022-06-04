import axios from "axios";

const baseURL = "http://localhost:5000/api/";

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

export function requestWithSignal(controller, cart, userId) {
  return axios.request({
    method: "POST",
    url: `http://localhost:5000/api/cart/${userId}`,
    headers: { token: `Bearer ${token}` },
    signal: controller.signal,
    data: { ...cart },
  });
}

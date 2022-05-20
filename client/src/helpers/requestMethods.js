import axios from "axios";

const baseURL = "http://localhost:5000/api/";

const token = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
  .currentUser.user.accessToken;

export const publicRequest = axios.create({
  baseURL,
});

export const userRequest = axios.create({
  baseURL,
  headers: { token: `Bearer ${token}` },
});

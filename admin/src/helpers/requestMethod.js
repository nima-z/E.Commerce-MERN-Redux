import axios from "axios";

const baseURL = "http://localhost:5000/api/";

const token =
  localStorage.getItem("persist:admin") &&
  JSON.parse(JSON.parse(localStorage.getItem("persist:admin")).user)
    .currentUser &&
  JSON.parse(JSON.parse(localStorage.getItem("persist:admin")).user).currentUser
    .user.accessToken;

export const publicRequest = axios.create({
  baseURL,
});

export const userRequest = axios.create({
  baseURL,
  headers: { token: `Bearer ${token}` },
});

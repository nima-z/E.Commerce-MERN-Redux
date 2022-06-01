import axios from "axios";
//==============================================

const baseURL = "http://localhost:5000/api/";

//==============================================

export const publicRequest = axios.create({
  baseURL,
});

export function adminRequest(token) {
  return axios.create({
    baseURL,
    headers: { token: `Bearer ${token}` },
  });
}

import axios from "axios";
//==============================================

const baseURL = "/api";

//==============================================

export function adminRequest(token) {
  return axios.create({
    baseURL,
    headers: { token: `Bearer ${token}` },
  });
}

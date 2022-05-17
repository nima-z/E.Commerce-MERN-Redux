import axios from "axios";

const baseURL = "http://localhost:5000/api/";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNWNmZGUxY2I3N2EyZWNlY2FhMDhiYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MTY0Nzg1OSwiZXhwIjoxNjUxODIwNjU5fQ.PywiMDuaRlN5DbLzb1iRpeaYlB3l0WSnWo2WfUwO70M";

export const publicRequest = axios.create({
  baseURL,
});

export const userRequest = axios.create({
  baseURL,
  header: { token: `Bearer ${token}` },
});

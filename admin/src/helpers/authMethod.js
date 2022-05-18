import { loginFailure, loginStart, loginSuccess } from "../redux/userRedux";
import { publicRequest } from "./requestMethod";

export async function loggingIn(dispatch, user) {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
}

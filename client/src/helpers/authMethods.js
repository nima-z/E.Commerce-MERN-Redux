import { loginFailure, loginStart, loginSuccess } from "../redux/UserRedux";
import { publicRequest } from "./requestMethods";

export async function loggingIn(dispatch, user) {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
}

import { loginFailure, loginStart, loginSuccess } from "../redux/adminRedux";
import axios from "axios";
//==============================================

export async function LoggingIn(dispatch, user) {
  dispatch(loginStart());
  try {
    const res = await axios.post("/api/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
}

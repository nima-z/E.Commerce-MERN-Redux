import { initiateCart } from "../redux/CartRedux";
import axios from "axios";
import {
  loginFailure,
  loginStart,
  loginSuccess,
  signupStart,
  signupSuccess,
  signupFailure,
} from "../redux/UserRedux";
import { initiateWishList } from "../redux/WishListRedux";

export async function loggingIn(dispatch, user) {
  dispatch(loginStart());
  try {
    const res = await axios.post("/api/auth/login", user);
    dispatch(loginSuccess(res.data));
    dispatch(initiateCart(res.data.user.cart));
    dispatch(initiateWishList(res.data.user.wishlist));
  } catch (err) {
    dispatch(loginFailure());
  }
}

export async function signingUp(dispatch, user) {
  dispatch(signupStart());
  try {
    const res = await axios.post("/api/auth/register", user);
    dispatch(signupSuccess(res.data));
    loggingIn(dispatch, {
      email: user.email,
      password: user.password,
    });
  } catch (err) {
    dispatch(signupFailure());
  }
}

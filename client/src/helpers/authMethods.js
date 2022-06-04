import { initiateCart } from "../redux/CartRedux";
import {
  loginFailure,
  loginStart,
  loginSuccess,
  signupStart,
  signupSuccess,
  signupFailure,
} from "../redux/UserRedux";
import { initiateWishList } from "../redux/WishListRedux";
import { publicRequest } from "./requestMethods";

export async function loggingIn(dispatch, user) {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("auth/login", user);
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
    const res = await publicRequest.post("auth/register", user);
    dispatch(signupSuccess(res.data));
    loggingIn(dispatch, {
      email: user.email,
      password: user.password,
    });
  } catch (err) {
    dispatch(signupFailure());
  }
}

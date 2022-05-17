import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartRedux";
import userReducer from "./UserRedux";

export default configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
  },
});

import { createSlice } from "@reduxjs/toolkit";

const wishSlice = createSlice({
  name: "wishList",
  initialState: {
    products: [],
    quantity: 0,
  },
  reducers: {
    likeProduct: (state, action) => {
      const existItem = state.products.find(
        (item) => item._id === action.payload._id
      );

      if (!existItem) {
        state.quantity += 1;
        state.products.push(action.payload);
      } else {
        state.quantity -= 1;
        state.products = state.products.filter(
          (item) => item._id !== action.payload._id
        );
      }
    },
    // unlikeProduct: (state, action) => {
    //   const existItem = state.products.find(
    //     (item) => item._id === action.payload._id
    //   );

    //   if (existItem) {
    //     state.quantity -= 1;
    //     state.products = state.products.filter(
    //       (item) => item._id === action.payload._id
    //     );
    //   }
    // },
    clearWishList: (state) => {
      state.products = [];
      state.quantity = 0;
    },
  },
});

export const { likeProduct, clearWishList } = wishSlice.actions;
export default wishSlice.reducer;

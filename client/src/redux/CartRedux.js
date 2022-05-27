import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      const existItem = state.products.find(
        (item) =>
          item._id === action.payload._id &&
          item.color === action.payload.color &&
          item.size === action.payload.size
      );

      state.quantity += action.payload.quantity;
      state.total = parseFloat(
        (
          state.total + +(action.payload.price * action.payload.quantity)
        ).toFixed(2)
      );

      if (existItem) {
        existItem.quantity += action.payload.quantity;
        existItem.totalPrice = parseFloat(
          (existItem.totalPrice + action.payload.totalPrice).toFixed(2)
        );
      } else {
        state.products.push(action.payload);
      }
    },
    removeProduct: (state, action) => {
      const existItem = state.products.find(
        (item) =>
          item._id === action.payload._id &&
          item.color === action.payload.color &&
          item.size === action.payload.size
      );
      state.quantity -= 1;
      state.total = parseFloat((state.total - existItem.price).toFixed(2));

      if (existItem.quantity > 1) {
        existItem.quantity -= 1;
        existItem.totalPrice = parseFloat(
          (existItem.price * existItem.quantity).toFixed(2)
        );
      } else {
        state.products = state.products.filter(
          (item) => item._id !== existItem._id
        );
      }
    },
    clearCart: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
  },
});

export const { addProduct, removeProduct, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

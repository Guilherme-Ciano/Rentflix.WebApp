import { createSlice } from "@reduxjs/toolkit";
import { cartInitialState } from "../../utils/const";

export const cartState = createSlice({
  name: "cartState",
  initialState: cartInitialState,
  reducers: {
    updateCartItems: (state, action) => {
      state.data.items = action.payload;
    },

    removeCartItem: (state, action) => {
      state.data.items = state.data.items.filter(
        (item) => item.id !== action.payload
      );
    },

    clearCartItems: (state) => {
      state.data.items = [];
    },
  },
});

export const { clearCartItems, removeCartItem, updateCartItems } =
  cartState.actions;
export default cartState.reducer;

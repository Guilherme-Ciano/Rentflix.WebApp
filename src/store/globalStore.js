import { configureStore } from "@reduxjs/toolkit";
import cartState from "./slices/cartState";
import mainState from "./slices/mainState";
import movieState from "./slices/moviesState";
import userState from "./slices/userState";

export const globalStore = configureStore({
  reducer: {
    mainState: mainState,
    userState: userState,
    cartState: cartState,
    movieState: movieState,
  },
});

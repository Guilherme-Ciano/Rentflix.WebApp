import { configureStore } from "@reduxjs/toolkit";
import mainState from "./slices/mainState";
import userState from "./slices/userState";

export const globalStore = configureStore({
  reducer: {
    mainState: mainState,
    userState: userState,
  },
});

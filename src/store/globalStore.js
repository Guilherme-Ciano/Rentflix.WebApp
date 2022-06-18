import { configureStore } from "@reduxjs/toolkit";
import mainState from "./slices/mainState";

export const globalStore = configureStore({
  reducer: {
    mainState: mainState,
  },
});

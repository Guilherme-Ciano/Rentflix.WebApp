import { createSlice } from "@reduxjs/toolkit";
import { mainInitialState } from "../../utils/const";

export const mainState = createSlice({
  name: "mainState",
  initialState: mainInitialState,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setIsLoading } = mainState.actions;
export default mainState.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
};

export const mainState = createSlice({
  name: "mainState",
  initialState,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setIsLoading } = mainState.actions;
export default mainState.reducer;

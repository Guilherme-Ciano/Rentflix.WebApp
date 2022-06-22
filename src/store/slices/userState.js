import { createSlice } from "@reduxjs/toolkit";
import { userInitialState } from "../../utils/const";

export const userState = createSlice({
  name: "userState",
  initialState: userInitialState,
  reducers: {
    updateUserStore: (state, action) => {
      state.data = { ...state.data, ...action.payload };
    },
    updateUserStoreMesages: (state, action) => {
      state.messages = { ...state.messages, ...action.payload };
    },
    clearUserState: () => userInitialState,
    clearUserMessages: (state) => (state.messages = {}),
  },
});

export const {
  updateUserStore,
  updateUserStoreMesages,
  clearUserState,
  clearUserMessages,
} = userState.actions;
export default userState.reducer;

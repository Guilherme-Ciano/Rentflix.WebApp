import { createSlice } from "@reduxjs/toolkit";
import { locacoesInitialState } from "../../utils/const";

export const locacoesState = createSlice({
  name: "locacoesState",
  initialState: locacoesInitialState,
  reducers: {
    updateLocacoesItems: (state, action) => {
      state.data.items = action.payload;
    },

    removeLocacoesItem: (state, action) => {
      state.data.items = state.data.items.filter(
        (item) => item.id !== action.payload
      );
    },

    clearLocacoesItems: (state) => {
      state.data.items = [];
    },
  },
});

export const { clearLocacoesItems, removeLocacoesItem, updateLocacoesItems } =
  locacoesState.actions;
export default locacoesState.reducer;

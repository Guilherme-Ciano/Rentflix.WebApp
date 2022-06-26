import { createSlice } from "@reduxjs/toolkit";
import { moviesInitialState } from "../../utils/const";

export const movieState = createSlice({
  name: "movieState",
  initialState: moviesInitialState,
  reducers: {
    updateMovieStore: (state, action) => {
      state.data = { ...state.data, ...action.payload };
    },
    updateMovieItems: (state, action) => {
      state.data.items = action.payload;
    },

    removeMovieItem: (state, action) => {
      state.data.items = state.data.items.filter(
        (item) => item.id !== action.payload
      );
    },

    clearMovieItems: (state) => {
      state.data.items = [];
    },
  },
});

export const {
  clearMovieItems,
  removeMovieItem,
  updateMovieItems,
  updateMovieStore,
} = movieState.actions;
export default movieState.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { theme } from "flowbite-react";

/**
 * Here we create a similar reducer slice for the theme lik ewe did for the user.
 * So after we created the themeSlice, we have to add it to our redux store.
 */

const initialState = {
  theme: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;

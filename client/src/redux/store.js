import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
/**
 * We import the reducer function from the userSlice.
 */
export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

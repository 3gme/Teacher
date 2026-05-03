import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/auth/userSlice";
import adminReducer from "../features/adminCourses/adminSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    admin: adminReducer,
  },
});

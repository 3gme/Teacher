import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   user: null,
// };
const initialState = {
  user: {
    name: "Teacher",
    role: "admin",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.user;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;

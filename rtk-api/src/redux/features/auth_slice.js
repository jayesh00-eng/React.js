import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      email: "",
      password: "",
    },
  },
  reducers: {
    signup: (state, action) => {
      state.user = action.payload;
    },
    signin: (state, action) => {
      state.user = action.payload;
    },
    signout: (state) => {
      state.user = { email: "", password: "" };
    },
  },
});

export default authSlice.reducer;
export const { signup, signin, signout } = authSlice.actions;


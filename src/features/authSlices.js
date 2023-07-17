import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "auth",
  initialState: {
    auth: null,
  },
  reducers: {
    auth(state, action) {
      state.auth = action.payload;
    },
    logOut(state) {
      state.auth = null;
    },
  },
});

export const { auth, logOut } = slice.actions;
export default slice.reducer;
export const getUser = (state) => state.auth.auth;

import { configureStore } from "@reduxjs/toolkit";
import authSlices from "./authSlices";

export default configureStore({
  reducer: {
    auth: authSlices,
  },
});

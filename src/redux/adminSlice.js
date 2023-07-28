import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    isLoggedIn: true,
  },
  reducers: {
    updateAdminLogin: (state, action) => {
      state.isLoggedIn = action.payload.isLoggedIn;
    },
  },
});

export const { updateAdminLogin } = adminSlice.actions;
export default adminSlice.reducer;
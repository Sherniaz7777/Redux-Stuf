import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import UserApi from "../../api/userApi";

export const loginUser = createAsyncThunk(
  "login/loginUser",
  async (data) => {
    const token = (await UserApi.loginUser(data)).data.access_token;
    localStorage.setItem("accessToken", token);
    return token;
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState: {
    accessToken: localStorage.getItem("accessToken") || null,
    isLoading: false,
    error: "",
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.accessToken = payload;
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export default loginSlice.reducer;

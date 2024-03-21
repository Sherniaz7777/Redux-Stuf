import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import UserApi from "../../api/userApi";

const loadStoredData = () => {
  const storedData = localStorage.getItem("SignUp");
  return storedData ? JSON.parse(storedData) : null;
};


export const postUser = createAsyncThunk("auth/postUser", 
async (data) => {
  return await UserApi.createUser(data);
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    dataUser: loadStoredData(),
    isLoading: false,
    error: "",
  },
  extraReducers: (builder) => {
    builder.addCase(postUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(postUser.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.dataUser = payload.data;
      localStorage.setItem("SignUp", JSON.stringify(payload));
    });
    builder.addCase(postUser.rejected, (state, {payload})=>{
        state.isLoading=false;
        state.error=payload
    })
  },
});

export default authSlice.reducer;

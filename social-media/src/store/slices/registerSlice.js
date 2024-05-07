import { API_ROUTES } from "../../api/apiConfig";
import { axiosInstance, BASE_URL } from "../../api/config";
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  registeredUser: "",
  status: "idle",
  error: null,
};

export const registerUser = createAsyncThunk(
  "register/registerUser",
  async (userData) => {
    try {
      console.log("baseurl:", BASE_URL);
      console.log("API_route:", API_ROUTES.register);
      console.log("baseregister:", BASE_URL.register);
      console.log("axir:", axiosInstance.defaults.baseURL);
      const response = await axiosInstance.post(API_ROUTES.register, userData);
      console.log("Response:", response); // Log the response
      return response.data;
    } catch (err) {
      console.error("Error:", err); // Log the error
      throw new Error(err.response.data.error);
    }
  }
);

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state, action) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.registeredUser = action.payload;
        state.status = "succeeded";
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectRegisteredUser = (state) => state.register.registeredUser;
export const selectRegisteredStatus = (state) => state.register.status;
export const selectRegisteredError = (state) => state.register.error;

export default registerSlice.reducer;

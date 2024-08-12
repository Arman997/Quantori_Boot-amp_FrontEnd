import { createSlice } from '@reduxjs/toolkit';

const initialState= {
  token: null,
  user: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.token = action.payload;
      state.isAuthenticated = true;
    },
    userLoaded: (state, action) => {
      state.user = action.payload;
    },
    loginFail: (state) => {
      state.token = null;
      state.user = null;
      state.isAuthenticated = false;
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { loginSuccess, userLoaded, loginFail, logout } = authSlice.actions;
export default authSlice.reducer;
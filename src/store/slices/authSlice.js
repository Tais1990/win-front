import { createSlice } from '@reduxjs/toolkit';
import { registerUser, login } from './ActionCreators.js'

const userToken = (typeof window !== 'undefined') && localStorage && localStorage.getItem('userToken')
  ? localStorage.getItem('userToken')
  : null

const initialState = {
  isLoad: false,
  error: null,
  userInfo: {}, 
  userToken,
  isSuccessful: false,
  result: {},
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
  },
  extraReducers: {
    [registerUser.fulfilled.type]: (state, action) => {
      state.isLoad = false;
      state.error = null;     
      state.isSuccessful = true;
    },
    [registerUser.pending.type]: (state) => {
      state.isLoad = true;
      state.isSuccessful = false;
    },
    [registerUser.rejected.type]: (state, action) => {
      state.isLoad = false;
      state.error = action.payload;
      state.isSuccessful = false;
    },

    [login.fulfilled.type]: (state, action) => {
      state.isLoad = false;
      state.error = null;
      state.userInfo = action.payload;
      state.userToken = action.payload.userToken;      
      state.isSuccessful = true;
    },
    [login.pending.type]: (state) => {
      state.isLoad = true;
      state.isSuccessful = false;
    },
    [login.rejected.type]: (state, action) => {
      state.isLoad = false;
      state.error = action.payload;
      state.isSuccessful = false;
    },
  }
});

export default authSlice.reducer;
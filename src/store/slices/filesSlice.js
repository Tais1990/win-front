import { createSlice } from '@reduxjs/toolkit';
import { uploadFiles } from './ActionCreators.js'

// Начальное значение
const initialState = {
  isLoad: false,
  error: null,
  isSuccessful: false,
  urlFiles: [],
};

const filesSlice = createSlice({
  name: 'files',
  initialState,
  reducers: {
  },
  extraReducers: {
    [uploadFiles.fulfilled.type]: (state, action) => {
      state.isLoad = false;
      state.error = null;
      state.urlFiles = action.payload;
      state.isSuccessful = true;
    },
    [uploadFiles.pending.type]: (state) => {
      state.isLoad = true;
      state.urlFiles = [];
      state.isSuccessful = false;
    },
    [uploadFiles.rejected.type]: (state, action) => {
      state.isLoad = false;
      state.error = action.payload;
      state.urlFiles = [];
      state.isSuccessful = false;
    }
  }
});

export default filesSlice.reducer;
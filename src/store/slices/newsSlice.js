import { createSlice } from '@reduxjs/toolkit';
import { fetchNews } from './ActionCreators.js'

// Начальное значение
const initialState = {
  isLoad: false,
  error: null,
  news: [],
  isSuccessful: false,
  result: {},
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
  },
  extraReducers: {
    [fetchNews.fulfilled.type]: (state, action) => {
      state.isLoad = false;
      state.error = null;
      state.news = action.payload;
      state.isSuccessful = true;
    },
    [fetchNews.pending.type]: (state, action) => {
      state.isLoad = true;
      state.news = []
    },
    [fetchNews.rejected.type]: (state, action) => {
      state.isLoad = false;
      state.error = action.payload;
      state.news = [];
    },
  }
});

export default newsSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';
import { fetchNews, createNews, updateNews, deleteNews, publishNews } from './ActionCreators.js'

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

    [createNews.fulfilled.type]: (state, action) => {
      state.isLoad = false;
      state.error = null;
      state.result = action.payload;
      state.isSuccessful = true;
    },
    [createNews.pending.type]: (state) => {
      state.isLoad = true;
      state.result = {};
      state.isSuccessful = false;
    },
    [createNews.rejected.type]: (state, action) => {
      state.isLoad = false;
      state.error = action.payload;
      state.result = {};
      state.isSuccessful = false;
    },

    [updateNews.fulfilled.type]: (state, action) => {
      state.isLoad = false;
      state.error = null;
      state.result = action.payload;
      state.isSuccessful = true;
    },
    [updateNews.pending.type]: (state) => {
      state.isLoad = true;
      state.result = {};
      state.isSuccessful = false;
    },
    [updateNews.rejected.type]: (state, action) => {
      state.isLoad = false;
      state.error = action.payload;
      state.result = {};
      state.isSuccessful = false;
    },

    [deleteNews.fulfilled.type]: (state, action) => {
      state.isLoad = false;
      state.error = null;
      state.result = action.payload;
      state.isSuccessful = true;
    },
    [deleteNews.pending.type]: (state) => {
      state.isLoad = true;
      state.result = {};
      state.isSuccessful = false;
    },
    [deleteNews.rejected.type]: (state, action) => {
      state.isLoad = false;
      state.error = action.payload;
      state.result = {};
      state.isSuccessful = false;
    },

    [publishNews.fulfilled.type]: (state, action) => {
      state.isLoad = false;
      state.error = null;
      state.result = action.payload;
      state.isSuccessful = true;
    },
    [publishNews.pending.type]: (state) => {
      state.isLoad = true;
      state.result = {};
      state.isSuccessful = false;
    },
    [publishNews.rejected.type]: (state, action) => {
      state.isLoad = false;
      state.error = action.payload;
      state.result = {};
      state.isSuccessful = false;
    }
  }
});

export default newsSlice.reducer;
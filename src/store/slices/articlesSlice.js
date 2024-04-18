import { createSlice } from '@reduxjs/toolkit';
import { fetchArticle, sendArticle } from './ActionCreators.js'

// Начальное значение
const initialState = {
  isLoad: false,
  error: null,
  article: {},
  isSuccessful: false,
  result: {},
};

const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
  },
  extraReducers: {
    [fetchArticle.fulfilled.type]: (state, action) => {
      state.isLoad = false;
      state.error = null;
      state.article = action.payload;
      state.isSuccessful = true;
    },
    [fetchArticle.pending.type]: (state, action) => {
      state.isLoad = true;
      state.article = {}
    },
    [fetchArticle.rejected.type]: (state, action) => {
      state.isLoad = false;
      state.error = action.payload;
      state.article = {};
    },


    [sendArticle.fulfilled.type]: (state, action) => {
      state.isLoad = false;
      state.error = null;
      state.result = action.payload;
      state.isSuccessful = true;
    },
    [sendArticle.pending.type]: (state) => {
      state.isLoad = true;
      state.result = {};
      state.isSuccessful = false;
    },
    [sendArticle.rejected.type]: (state, action) => {
      state.isLoad = false;
      state.error = action.payload;
      state.result = {};
      state.isSuccessful = false;
    }
  }
});

export default articleSlice.reducer;
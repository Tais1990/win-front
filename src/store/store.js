import { configureStore } from '@reduxjs/toolkit';
import articleReducer from './slices/articlesSlice.js';
import authReducer from './slices/authSlice.js';
import newsReducer from './slices/newsSlice.js';
import filesReducer from './slices/filesSlice.js';

export default configureStore({
  reducer: {
    article: articleReducer,
    auth: authReducer,
    news: newsReducer,
    file: filesReducer
  },
});
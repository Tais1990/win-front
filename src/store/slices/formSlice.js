import { createSlice } from '@reduxjs/toolkit';
import { fetchForm, sendForm } from './ActionCreators.js'

// Начальное значение
const initialState = {
  isLoad: false,
  error: null,
  result: {},
  isSuccessful: false
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  // Редьюсеры в слайсах мутируют состояние и ничего не возвращают наружу
  reducers: {
    // пример с данными
    // test: (state, action) => {
    //   state.test = action.payload;
    // },
  },
  extraReducers: {
    [sendForm.fulfilled.type]: (state, action) => {
      state.isLoad = false;
      state.error = null;
      state.result = action.payload;
      state.isSuccessful = true;
    },
    [sendForm.pending.type]: (state) => {
      state.isLoad = true;
      state.result = {}
    },
    [sendForm.rejected.type]: (state, action) => {
      state.isLoad = false;
      state.error = action.payload;
      state.result = {};
    }
  }
});

// Слайс генерирует действия, которые экспортируются отдельно
// Действия генерируются автоматически из имен ключей редьюсеров
export const {  } = formSlice.actions;

// По умолчанию экспортируется редьюсер, сгенерированный слайсом
export default formSlice.reducer;
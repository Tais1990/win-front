import { createSlice } from '@reduxjs/toolkit';
import { fetchDocuments, sendDocument } from './ActionCreators.js'

// Начальное значение
const initialState = {
  isLoad: false,
  error: null,
  documents: [],
  contacts: [],
  departments: [],
  kinds: [],
  states: [],
  isSuccessful: false,
  countTable: 0,

  // понять, надо ли отдельно содержать данные о загрузке
  result: {},
};

const documentSlice = createSlice({
  name: 'document',
  initialState,
  // Редьюсеры в слайсах мутируют состояние и ничего не возвращают наружу
  reducers: {
    // пример с данными
    setCountTable: (state, action) => {
      state.countTable = action.payload;
    },
  },
  extraReducers: {
    [fetchDocuments.fulfilled.type]: (state, action) => {
      state.isLoad = false;
      state.error = null;
      state[action.meta.arg.codeTable] = action.payload;
      state.isSuccessful = true;
      state.countTable = state.countTable - 1;
    },
    [fetchDocuments.pending.type]: (state, action) => {
      state.isLoad = true;
      state[action.meta.arg.codeTable] = []
    },
    [fetchDocuments.rejected.type]: (state, action) => {
      state.isLoad = false;
      state.error = action.payload;
      state[action.meta.arg.codeTable] = [];
    },


    [sendDocument.fulfilled.type]: (state, action) => {
      state.isLoad = false;
      state.error = null;
      state.result = action.payload;
      state.isSuccessful = true;
    },
    [sendDocument.pending.type]: (state) => {
      state.isLoad = true;
      state.result = {};
      state.isSuccessful = false;
    },
    [sendDocument.rejected.type]: (state, action) => {
      state.isLoad = false;
      state.error = action.payload;
      state.result = {};
      state.isSuccessful = false;
    }
  }
});

// Слайс генерирует действия, которые экспортируются отдельно
// Действия генерируются автоматически из имен ключей редьюсеров
export const { setCountTable } = documentSlice.actions;

// По умолчанию экспортируется редьюсер, сгенерированный слайсом
export default documentSlice.reducer;
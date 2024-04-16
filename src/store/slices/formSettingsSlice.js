import { createSlice } from '@reduxjs/toolkit';
import { fetchFormSettings } from './ActionCreators.js'

// Начальное значение
const initialState = {
  isLoad: false,
  error: null,
  formSettings: [],
  isSuccessful: false,
};

const formSettingsSlice = createSlice({
  name: 'formSettings',
  initialState,
  // Редьюсеры в слайсах мутируют состояние и ничего не возвращают наружу
  reducers: {

  },
  extraReducers: {
    [fetchFormSettings.fulfilled.type]: (state, action) => {
      state.isLoad = false;
      state.error = null;
      state.formSettings = action.payload;
      state.isSuccessful = true;
    },
    [fetchFormSettings.pending.type]: (state, action) => {
      state.isLoad = true;
      state.formSettings = []
    },
    [fetchFormSettings.rejected.type]: (state, action) => {
      state.isLoad = false;
      state.error = action.payload;
      state.formSettings = [];
    }
  }
});

// Слайс генерирует действия, которые экспортируются отдельно
// Действия генерируются автоматически из имен ключей редьюсеров
// export const { setCountTable } = documentSlice.actions;

// По умолчанию экспортируется редьюсер, сгенерированный слайсом
export default formSettingsSlice.reducer;
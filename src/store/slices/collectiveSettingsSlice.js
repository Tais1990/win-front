import { createSlice } from '@reduxjs/toolkit';
import { fetchCollectiveSettings } from './ActionCreators.js'

// Начальное значение
const initialState = {
  isLoad: false,
  error: null,
  collectiveSettings: [],
  isSuccessful: false,
};

const collectiveSettingsSlice = createSlice({
  name: 'collectiveSettings',
  initialState,
  // Редьюсеры в слайсах мутируют состояние и ничего не возвращают наружу
  reducers: {

  },
  extraReducers: {
    [fetchCollectiveSettings.fulfilled.type]: (state, action) => {
      state.isLoad = false;
      state.error = null;
      state.collectiveSettings = action.payload;
      state.isSuccessful = true;
    },
    [fetchCollectiveSettings.pending.type]: (state, action) => {
      state.isLoad = true;
      state.collectiveSettings = []
    },
    [fetchCollectiveSettings.rejected.type]: (state, action) => {
      state.isLoad = false;
      state.error = action.payload;
      state.collectiveSettings = [];
    }
  }
});

// Слайс генерирует действия, которые экспортируются отдельно
// Действия генерируются автоматически из имен ключей редьюсеров
// export const { setCountTable } = documentSlice.actions;

// По умолчанию экспортируется редьюсер, сгенерированный слайсом
export default collectiveSettingsSlice.reducer;
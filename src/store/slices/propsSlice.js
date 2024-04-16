import { createSlice } from '@reduxjs/toolkit';
import { fetchPropsByID, fetchPropsByCodeBlock } from './ActionCreators.js'

// Начальное значение
const initialState = {
  isLoad: false,
  error: null,
  props: {},
  isSuccessful: false,
};

const propsSlice = createSlice({
  name: 'props',
  initialState,
  initialState,
  // Редьюсеры в слайсах мутируют состояние и ничего не возвращают наружу
  reducers: {
  },
  extraReducers: {
    [fetchPropsByID.fulfilled.type]: (state, action) => {
      state.isLoad = false;
      state.error = null;
      state.props = action.payload;
      state.isSuccessful = true;
    },
    [fetchPropsByID.pending.type]: (state, action) => {
      state.isLoad = true;
      state.props = {}
    },
    [fetchPropsByID.rejected.type]: (state, action) => {
      state.isLoad = false;
      state.error = action.payload;
      state.props = {};
    },

    [fetchPropsByCodeBlock.fulfilled.type]: (state, action) => {
      state.isLoad = false;
      state.error = null;
      state.props = action.payload;
      state.isSuccessful = true;
    },
    [fetchPropsByCodeBlock.pending.type]: (state, action) => {
      state.isLoad = true;
      state.props = {}
    },
    [fetchPropsByCodeBlock.rejected.type]: (state, action) => {
      state.isLoad = false;
      state.error = action.payload;
      state.props = {};
    }
  }
});

// Слайс генерирует действия, которые экспортируются отдельно
// Действия генерируются автоматически из имен ключей редьюсеров
// export const { setCountTable } = documentSlice.actions;

// По умолчанию экспортируется редьюсер, сгенерированный слайсом
export default propsSlice.reducer;
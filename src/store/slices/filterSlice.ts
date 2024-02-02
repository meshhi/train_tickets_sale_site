
import { createSlice } from '@reduxjs/toolkit';
import { unstable_usePrompt } from 'react-router-dom';

type InitialStateType = {
  from_city?: {
    _id?: string,
    name?: string,
  },
  to_city?: {
    _id?: string,
    name?: string,
  },
  date_start?: string,
  date_end?: string,
  date_start_arrival?: string,
  date_end_arrival?: string,
}

// Начальное значение
const initialState : InitialStateType = {
  from_city: {
    _id: undefined,
    name: undefined,
  },
  to_city: {
    _id: undefined,
    name: undefined,
  },
  date_start: undefined,
  date_end: undefined,
  date_start_arrival: undefined,
  date_end_arrival: undefined,
};

const filterSlice = createSlice({
  name: 'filterTicket',
  initialState,
  // Редьюсеры в слайсах меняют состояние и ничего не возвращают
  reducers: {
    from_city: (state, action) => {
      state.from_city = action.payload;
    },
    to_city: (state, action) => {
      state.to_city = action.payload;
    },
    date_start: (state, action) => {
      state.date_start = action.payload;
    },
    date_end: (state, action) => {
      state.date_end = action.payload;
    },
  },
});

// Слайс генерирует действия, которые экспортируются отдельно
// Действия генерируются автоматически из имен ключей редьюсеров
export const { from_city, to_city, date_start, date_end } = filterSlice.actions;

// По умолчанию экспортируется редьюсер, сгенерированный слайсом
export default filterSlice.reducer;
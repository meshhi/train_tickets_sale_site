
import { createSlice } from '@reduxjs/toolkit';

// Начальное значение
const initialState = {
  cityOut: undefined,
  cityIn: undefined,
  dateOut: undefined,
  dateIn: undefined,
};

const ticketSlice = createSlice({
  name: 'filterTicket',
  initialState,
  // Редьюсеры в слайсах меняют состояние и ничего не возвращают
  reducers: {
    cityOut: (state, action) => {
      state.cityOut = action.payload;
    },
    cityIn: (state, action) => {
      state.cityIn = action.payload;
    },
  },
});

// Слайс генерирует действия, которые экспортируются отдельно
// Действия генерируются автоматически из имен ключей редьюсеров
export const { cityOut, cityIn, } = ticketSlice.actions;

// По умолчанию экспортируется редьюсер, сгенерированный слайсом
export default ticketSlice.reducer;
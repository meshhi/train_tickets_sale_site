
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
  date_start?: string | number,
  date_end?: string | number,
  date_start_arrival?: string | number,
  date_end_arrival?: string | number,
  have_first_class?: boolean,
  have_second_class?: boolean,
  have_third_class?: boolean,
  have_fourth_class?: boolean,
  have_wifi?: boolean,
  have_air_conditioning?: boolean,
  have_express?: boolean,
  price_from?: number,
  price_to?: number,
  start_departure_hour_from?: number,
  start_departure_hour_to?: number,
  start_arrival_hour_from?: number,
  start_arrival_hour_to?: number,
  end_departure_hour_from?: number,
  end_departure_hour_to?: number,
  end_arrival_hour_from?: number,
  end_arrival_hour_to?: number,
  limit?: any,
  offset?: any,
  sort?: any,
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
  have_first_class: undefined,
  have_second_class: undefined,
  have_third_class: undefined,
  have_fourth_class: undefined,
  have_wifi: undefined,
  have_air_conditioning: undefined,
  have_express: undefined,
  price_from: undefined,
  price_to: undefined,
  start_departure_hour_from: undefined,
  start_departure_hour_to: undefined,
  start_arrival_hour_from: undefined,
  start_arrival_hour_to: undefined,
  end_departure_hour_from: undefined,
  end_departure_hour_to: undefined,
  end_arrival_hour_from: undefined,
  end_arrival_hour_to: undefined,
  limit: undefined,
  offset: undefined,
  sort: undefined,
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
    date_start_arrival: (state, action) => {
      state.date_start_arrival = action.payload;
    },
    date_end_arrival: (state, action) => {
      state.date_end_arrival = action.payload;
    },
    have_first_class: (state, action) => {
      state.have_first_class = action.payload;
    },
    have_second_class: (state, action) => {
      state.have_second_class = action.payload;
    },
    have_third_class: (state, action) => {
      state.have_third_class = action.payload;
    },
    have_fourth_class: (state, action) => {
      state.have_fourth_class = action.payload;
    },
    have_wifi: (state, action) => {
      state.have_wifi = action.payload;
    },
    have_air_conditioning: (state, action) => {
      state.have_air_conditioning = action.payload;
    },
    have_express: (state, action) => {
      state.have_express = action.payload;
    },
    price_from: (state, action) => {
      state.price_from = action.payload;
    },
    price_to: (state, action) => {
      state.price_to = action.payload;
    },
    start_departure_hour_from: (state, action) => {
      state.start_departure_hour_from = action.payload;
    },
    start_departure_hour_to: (state, action) => {
      state.start_departure_hour_to = action.payload;
    },
    start_arrival_hour_from: (state, action) => {
      state.start_arrival_hour_from = action.payload;
    },
    start_arrival_hour_to: (state, action) => {
      state.start_arrival_hour_to = action.payload;
    },
    end_departure_hour_from: (state, action) => {
      state.end_departure_hour_from = action.payload;
    },
    end_departure_hour_to: (state, action) => {
      state.end_departure_hour_to = action.payload;
    },
    end_arrival_hour_from: (state, action) => {
      state.end_arrival_hour_from = action.payload;
    },
    end_arrival_hour_to: (state, action) => {
      state.end_arrival_hour_to = action.payload;
    },
    limit: (state, action) => {
      state.limit = action.payload;
    },
    offset: (state, action) => {
      state.offset = action.payload;
    },
    sort: (state, action) => {
      state.sort = action.payload;
    },
  },
});

// Слайс генерирует действия, которые экспортируются отдельно
// Действия генерируются автоматически из имен ключей редьюсеров
export const { 
  from_city, 
  to_city, 
  date_start, 
  date_end,
  date_start_arrival,
  date_end_arrival,
  have_first_class,
  have_second_class,
  have_third_class,
  have_fourth_class,
  have_wifi,
  have_air_conditioning,
  have_express,
  price_from,
  price_to,
  start_departure_hour_from,
  start_departure_hour_to,
  start_arrival_hour_from,
  start_arrival_hour_to,
  end_departure_hour_from,
  end_departure_hour_to,
  end_arrival_hour_from,
  end_arrival_hour_to,
  limit,
  offset,
  sort,
} = filterSlice.actions;

// По умолчанию экспортируется редьюсер, сгенерированный слайсом
export default filterSlice.reducer;
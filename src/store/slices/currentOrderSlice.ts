import { createSlice } from '@reduxjs/toolkit';
import { unstable_usePrompt } from 'react-router-dom';

export type InitialStateType = {
    direction?: any,
    passengers_seats?: any,
}

const initialState : InitialStateType = {
    direction: {}
};

const currentOrderSlice = createSlice({
    name: 'currentOrder',
    initialState,
    // Редьюсеры в слайсах меняют состояние и ничего не возвращают
    reducers: {
      direction: (state, action) => {
        state.direction = action.payload;
      },
      passengers_seats: (state, action) => {
        state.passengers_seats = action.payload;
      },
    },
  });

export const { 
    direction,
    passengers_seats
} = currentOrderSlice.actions;

export default currentOrderSlice.reducer;
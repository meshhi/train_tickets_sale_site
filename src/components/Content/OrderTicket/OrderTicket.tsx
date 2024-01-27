import React from 'react'
import styled from 'styled-components'

import { useSelector, useDispatch } from 'react-redux';
// Импортируем нужные действия
import { decrement, increment, incrementByAmount } from '/src/store/slices/ticketSlice.ts';

import { FilterBlock } from './Content/FilterBlock/FilterBlock';
import { ProgressBar } from './Content/ProgressBar/ProgressBar';

const OrderTicketContainer = styled('div')`
  min-height: 100vh;
  // display: flex;
  // justify-content: center;
  // align-items: center;
`

export const OrderTicket = () => {
  const count = useSelector((state) => state.tickets.value);
  // Возвращает метод store.dispatch() текущего хранилища
  const dispatch = useDispatch();
  
  return(
    <OrderTicketContainer>
        {/* <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Прибавить
        </button>
        <span>{count}</span>
      order ticket */}
      <FilterBlock></FilterBlock>
      <ProgressBar></ProgressBar>
    </OrderTicketContainer>
  )
}

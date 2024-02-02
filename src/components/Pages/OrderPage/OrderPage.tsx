import styled from 'styled-components'
import { FilterBlock } from './Content/FilterBlock/FilterBlock';
import TicketOrderWindow from './Content/TicketOrderWindow/TicketOrderWindow';
import React from 'react';

const OrderContainer = styled('div')`
  min-height: 100vh;
`

const OrderPage = () => {
  return(
    <OrderContainer>
      <FilterBlock></FilterBlock>
      <TicketOrderWindow></TicketOrderWindow>
    </OrderContainer>
  )
}

export default OrderPage

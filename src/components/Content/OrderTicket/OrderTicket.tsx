import styled from 'styled-components'

import { FilterBlock } from './Content/FilterBlock/FilterBlock';
import { ProgressBar } from './Content/ProgressBar/ProgressBar';
import { Outlet } from 'react-router-dom';
import TicketOrderWindow from './Content/TicketOrderWindow/TicketOrderWindow';

const OrderTicketContainer = styled('div')`
  min-height: 100vh;
`

export const OrderTicket = () => {
  return(
    <OrderTicketContainer>
      <FilterBlock></FilterBlock>
      <ProgressBar></ProgressBar>
      <TicketOrderWindow></TicketOrderWindow>
    </OrderTicketContainer>
  )
}

import styled from 'styled-components'
import { FilterBlock } from './Content/FilterBlock/FilterBlock';
import TicketOrderWindow from './Content/TicketOrderWindow/TicketOrderWindow';

const OrderTicketContainer = styled('div')`
  min-height: 100vh;
`

export const OrderTicket = () => {
  return(
    <OrderTicketContainer>
      <FilterBlock></FilterBlock>
      <TicketOrderWindow></TicketOrderWindow>
    </OrderTicketContainer>
  )
}

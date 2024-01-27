import styled from 'styled-components'

import { FilterBlock } from './Content/FilterBlock/FilterBlock';
import { ProgressBar } from './Content/ProgressBar/ProgressBar';

const OrderTicketContainer = styled('div')`
  min-height: 100vh;
`

export const OrderTicket = () => {
  return(
    <OrderTicketContainer>
      <FilterBlock></FilterBlock>
      <ProgressBar></ProgressBar>
    </OrderTicketContainer>
  )
}

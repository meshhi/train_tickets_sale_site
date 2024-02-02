import React from 'react'
import styled from 'styled-components'

const TicketsContainer = styled.div`

`

const FilterBlock = styled.div`

`

const TicketsList = styled.ul`

`


const Tickets = () => {
  return (
    <TicketsContainer>
      <FilterBlock></FilterBlock>
      <TicketsList></TicketsList>
    </TicketsContainer>
  )
}

export default Tickets
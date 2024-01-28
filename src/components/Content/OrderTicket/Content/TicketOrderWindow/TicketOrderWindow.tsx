import React from 'react'
import styled from 'styled-components'
import { Outlet } from 'react-router-dom'

const TicketOrderWindowContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: red;
`

const TicketOrderWindow = () => {
  return (
    <TicketOrderWindowContainer>
        <span>TicketOrderWindow</span>
        <Outlet></Outlet>
    </TicketOrderWindowContainer>
  )
}

export default TicketOrderWindow
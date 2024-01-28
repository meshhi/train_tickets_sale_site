import React from 'react'
import styled from 'styled-components'
import { Outlet } from 'react-router-dom'
import { ProgressBar } from './ProgressBar/ProgressBar'

const TicketOrderWindowContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: red;
`

const TicketOrderWindow = () => {
  return (
    <TicketOrderWindowContainer>
        <ProgressBar></ProgressBar>
        <Outlet></Outlet>
    </TicketOrderWindowContainer>
  )
}

export default TicketOrderWindow
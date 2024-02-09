import styled from 'styled-components'
import { Outlet } from 'react-router-dom'
import { ProgressBar } from './ProgressBar/ProgressBar'
<<<<<<< HEAD:src/components/Pages/OrderPage/Content/TicketOrderWindow/TicketOrderWindow.tsx
import { SideFilter } from './SideFilter/SideFilter';
=======
import { TicketIssueSideFilter } from "./SideFilter/TicketIssueSideFilter";
>>>>>>> ubuntu:src/components/Content/OrderTicket/Content/TicketOrderWindow/TicketOrderWindow.tsx
import { LastTickets } from './LastTickets/LastTickets';

const TicketOrderWindowContainer = styled.section`
    width: 100%;
    min-height: 100vh;
    background-color: var(--smooth-grey-inactive);
`

const TicketIssueWindow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 95px 271px 193px;
  gap: 85px;
`

const TicketIssueWindowSidebar = styled.div`
  max-width: 360px;
  display: flex;
  flex-direction: column;
  gap: 94px;
`

export const TicketIssueWindowContent = styled.div`
  width: 100%;
  max-width: 959px;
`

const TicketOrderWindow = () => {
  
  return (
    <TicketOrderWindowContainer>
      <ProgressBar></ProgressBar>
      <TicketIssueWindow>
        <TicketIssueWindowSidebar>
          <SideFilter></SideFilter>
          <LastTickets></LastTickets>
        </TicketIssueWindowSidebar>
        <TicketIssueWindowContent>
          <Outlet></Outlet>
        </TicketIssueWindowContent>
      </TicketIssueWindow>
    </TicketOrderWindowContainer>
  )
}

export default TicketOrderWindow
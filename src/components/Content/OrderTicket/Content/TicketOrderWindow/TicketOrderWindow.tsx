import styled from 'styled-components'
import { Outlet } from 'react-router-dom'
import { ProgressBar } from './ProgressBar/ProgressBar'
import { TicketIssueSideFilter } from './SideFilter/TicketIssueSideFilter';
import { LastTickets } from './LastTickets/LastTickets';

const TicketOrderWindowContainer = styled.section`
    width: 100%;
    min-height: 100vh;
    background-color: var(--smooth-grey-inactive);
`

const TicketIssueWindow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  min-width: 962px;
`

const TicketOrderWindow = () => {

  return (
    <TicketOrderWindowContainer>
      <ProgressBar></ProgressBar>
      <TicketIssueWindow>
        <TicketIssueWindowSidebar>
          <TicketIssueSideFilter></TicketIssueSideFilter>
          <LastTickets>
          </LastTickets>
        </TicketIssueWindowSidebar>
        <TicketIssueWindowContent>
          <Outlet></Outlet>
        </TicketIssueWindowContent>
      </TicketIssueWindow>
    </TicketOrderWindowContainer>
  )
}

export default TicketOrderWindow
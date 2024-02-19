import styled from 'styled-components'
import { Outlet, useLocation } from 'react-router-dom'
import { ProgressBar } from './ProgressBar/ProgressBar'
import { TicketIssueSideFilter } from "./SideFilter/TicketIssueSideFilter";
import { LastTickets } from './LastTickets/LastTickets';
import { useSelector } from 'react-redux';
import { DepartureInfo, DepartureInfoRoadTime } from './Stages/Directions/Direction/Direction';

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
  min-width: 959px;
`

const TravelInfoSidebar = styled.div`
  width: 360px;
  min-height: 1012px;
  background-color: var(--smooth-black-2);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid #e5e5e5;
`

const TravelInfoSidebarHeader = styled.h2`
  font-weight: 500;
  font-size: 30px;
  text-transform: uppercase;
  color: #e5e5e5;
  height: 108px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #e5e5e5;
  width: 100%;
`

const SidebarDirectionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const SidebarDirectionRow = styled.div`

`

const SidebarDirectionInfo = styled.div`

`

const StyledString = styled.div`
  display: flex;
  justify-content: space-between;
  margin-block: 1rem;
  margin-inline: 1rem;
`

const RightString = styled.div`
font-weight: 500;
font-size: 24px;
text-align: right;
color: #fff;
`

const LeftString = styled.div`
font-weight: 400;
font-size: 18px;
color: #e5e5e5;
`

const DirectionRowTo = styled.div`

`

const DirectionRowFrom = styled.div`

`

const DepartureInfoWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding-inline: 1rem;
  color: white;
`

const TravelInfoSidebarPassengers = styled.div`

`

const TravelInfoSidebarDirection = ({ variant, data }) => {
  return(
    <SidebarDirectionContainer>
      <SidebarDirectionRow>
        {
          variant === "to"
          ? <DirectionRowTo>туда</DirectionRowTo>
          : <DirectionRowFrom>обратно</DirectionRowFrom>
        }
      </SidebarDirectionRow>
      <SidebarDirectionInfo>
        <StyledString>
          <LeftString>№ поезда</LeftString>
          <RightString>{data?.train.name}</RightString>
        </StyledString>
        <StyledString>
          <LeftString>Название</LeftString>
          <RightString>{data?.from.railway_station_name}</RightString>
        </StyledString>
        <DepartureInfoWrapper>
          <DepartureInfo
              city={data?.to?.city?.name}
              time={data?.to?.datetime}
              railway={data?.railway_station_name}
            ></DepartureInfo>
            <DepartureInfoRoadTime
              reverse={true}
            ></DepartureInfoRoadTime>
            <DepartureInfo
              city={data?.from?.city?.name}
              time={data?.from?.datetime}
              railway={data.from?.railway_station_name}
        ></DepartureInfo>
        </DepartureInfoWrapper>

      </SidebarDirectionInfo>
    </SidebarDirectionContainer>
  )
}

const TicketOrderWindow = () => {
  const location = useLocation();
  const { direction, passengers_seats } = useSelector(state => state.currentOrder)

  console.log(passengers_seats)
  return (
    <TicketOrderWindowContainer>
      <ProgressBar></ProgressBar>
      <TicketIssueWindow>
        <TicketIssueWindowSidebar>
          {
            location.pathname.startsWith("/orderticket/directions") || location.pathname.startsWith("/orderticket/chooseseats")
            ? 
            <>
              <TicketIssueSideFilter></TicketIssueSideFilter>
              <LastTickets></LastTickets>
            </>
            : 
              direction
              ?
              <TravelInfoSidebar>
                <TravelInfoSidebarHeader>
                  Детали поездки
                </TravelInfoSidebarHeader>
                {
                  direction?.arrival
                  ? <TravelInfoSidebarDirection 
                  variant="to"
                  data={direction.arrival}
                  >

                  </TravelInfoSidebarDirection>
                  : false
                }
                {
                  direction?.departure
                  ? <TravelInfoSidebarDirection 
                  variant="from"
                  data={direction.departure}
                  >

                  </TravelInfoSidebarDirection>
                  : false
                }
                {
                  passengers_seats
                  ? <TravelInfoSidebarPassengers>
                      {
                        passengers_seats.old.list.length
                        ?                       
                        <StyledString>
                          <LeftString>{passengers_seats.old.list.length} взрослых</LeftString>
                          <RightString>какая-то цена</RightString>
                        </StyledString>
                        : false
                      }
                      {
                        passengers_seats.child.list.length
                        ?                       
                        <StyledString>
                          <LeftString>{passengers_seats.child.list.length} ребенок</LeftString>
                          <RightString>какая-то цена</RightString>
                        </StyledString>
                        : false
                      }
                      {
                        passengers_seats.childBase.list.length
                        ?                       
                        <StyledString>
                          <LeftString>{passengers_seats.childBase.list.length} ребенок(базовый)</LeftString>
                          <RightString>какая-то цена</RightString>
                        </StyledString>
                        : false
                      }
                    </TravelInfoSidebarPassengers>
                  : false
                }
              </TravelInfoSidebar>
              : false
          }
        </TicketIssueWindowSidebar>
        <TicketIssueWindowContent>
          <Outlet></Outlet>
        </TicketIssueWindowContent>
      </TicketIssueWindow>
    </TicketOrderWindowContainer>
  )
}

export default TicketOrderWindow
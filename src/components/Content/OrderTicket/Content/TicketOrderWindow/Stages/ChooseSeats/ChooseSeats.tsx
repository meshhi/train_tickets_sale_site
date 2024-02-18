import { useEffect } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { useGetSeatsQuery } from '../../../../../../../store/services/seats'
import { LoadingScreen } from '../Directions/Directions'
import { BaseButton } from '../../../../../../Elements/Buttons/BaseButton'
import { DepartureInfo, DepartureInfoRoadTime, IconCircle, TrainDirectionsList, TrainDirectionsListItem, TrainNumber } from '../Directions/Direction/Direction'
import { Icon } from '../../../../../../Elements/Icons/Icon'
import train_icon from "/src/assets/png/train_icon.png"
import clock from "/src/assets/png/clock.png"
import { getDuration } from '../../../../../../utils/utils'

const ChooseSeatsContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
`

const Header = styled.h1`
  font-weight: 500;
  font-size: 30px;
  text-transform: uppercase;
  color: #292929;
  align-self: flex-start;
`

const HeaderInner = styled.h2`
  font-weight: 700;
  font-size: 30px;
  color: #292929;
  padding: 16px;
`

const PickTicketsContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const TicketPickContainer = styled.div`
  width: 100%;
  min-height: 60vh;
  background-color: white;
  border: 2px solid #C4C4C4;
`

const BackButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 120px;
  padding-right: 16px;
`

const IconCircleContainer = styled.div`

`

const TrainInfo = styled.div`
  display: flex;
  background-color: var(--smooth-grey-2);
  align-items: center;
  justify-content: space-around;
  min-height: 120px;
`

const StyledTrainDirectionsList = styled(TrainDirectionsList)`

`

const ClockInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

const ClockText = styled.p`
  display: flex;
  flex-direction: column;
`

const TicketsCounters = styled.div`
  display: flex;

`

const TicketsCountersList = styled.ul`
  list-style-type: none;
`

const TicketsCountersItem = styled.li`
  flex: 1;
`

const TrainType = styled.div`

`

const TrainTypeList = styled.ul`
  list-style-type: none;
`

const TrainTypeListItem = styled.li`
  flex: 1;
`

const ChooseSeats = () => {
  const params = useParams();
  const { state } = useLocation();
  const { data, error, loading } = useGetSeatsQuery(params.id);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <ChooseSeatsContainer>
      <Header>Выбор мест</Header>
      {loading
      ? <LoadingScreen></LoadingScreen>
      : <PickTicketsContainer>
          <TicketPickContainer>
            <BackButtons>
              <BaseButton
              onClick={() => {
                navigate(`/orderticket/directions/`)}
              }
              >
                Выбрать другой поезд
              </BaseButton>
            </BackButtons>
            <TrainInfo>
                <IconCircleContainer>
                    <IconCircle 
                      $color="orange"
                    >
                        <Icon
                            $srcImg={train_icon}
                            $backgroundColor="orange"
                            $width={15}
                            $height={15}
                        ></Icon>
                    </IconCircle>
                </IconCircleContainer>
                  <StyledTrainDirectionsList>
                    <TrainNumber>
                        {state?.direction?.departure?.train?.name}
                    </TrainNumber>
                    <TrainDirectionsListItem>{state?.direction?.departure?.from?.city?.name}</TrainDirectionsListItem>
                    <TrainDirectionsListItem style={{ "color": "black" }}>{state?.direction?.departure?.to?.city?.name}</TrainDirectionsListItem>
                  </StyledTrainDirectionsList>
                <DepartureInfo
                    city={state?.direction?.departure?.to?.city?.name}
                    time={state?.direction?.departure?.to?.datetime}
                    railway={state?.direction?.departure?.to?.railway_station_name}
                ></DepartureInfo>
                <DepartureInfoRoadTime
                    // time={state?.direction?.departure?.duration}
                    reverse={true}
                ></DepartureInfoRoadTime>
                <DepartureInfo
                    city={state?.direction?.departure?.from?.city?.name}
                    time={state?.direction?.departure?.from?.datetime}
                    railway={state?.direction?.departure?.from?.railway_station_name}
                ></DepartureInfo>
                <ClockInfo>
                  <Icon
                  $srcImg={clock}
                  $backgroundColor='orange'
                  $width={40}
                  $height={40}
                  ></Icon>
                  <ClockText>
                    <span>{getDuration(state?.direction?.departure?.duration).split(":")[0]} часов</span>
                    <span>{getDuration(state?.direction?.departure?.duration).split(":")[1]} минут</span>
                  </ClockText>
                </ClockInfo>
            </TrainInfo>

            <TicketsCounters>
              <HeaderInner>Количество билетов</HeaderInner>
              <TicketsCountersList>
                <TicketsCountersItem></TicketsCountersItem>
                <TicketsCountersItem></TicketsCountersItem>
                <TicketsCountersItem></TicketsCountersItem>
              </TicketsCountersList>
            </TicketsCounters>

            <TrainType>
              <HeaderInner>Тип вагона</HeaderInner>
              <TrainTypeList>
                <TrainTypeListItem></TrainTypeListItem>
                <TrainTypeListItem></TrainTypeListItem>
                <TrainTypeListItem></TrainTypeListItem>
                <TrainTypeListItem></TrainTypeListItem>
              </TrainTypeList>
            </TrainType>
          </TicketPickContainer>
        </PickTicketsContainer>
      }
      
    </ChooseSeatsContainer>
  )
}

export default ChooseSeats
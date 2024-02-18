import React, { useEffect, useMemo } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { useGetSeatsQuery } from '../../../../../../../store/services/seats'
import { LoadingScreen } from '../Directions/Directions'
import { useSelector } from 'react-redux'
import { BaseButton } from '../../../../../../Elements/Buttons/BaseButton'
import { DepartureInfo, DepartureInfoRoadTime, IconCircle, TrainDirectionsList, TrainDirectionsListItem } from '../Directions/Direction/Direction'
import { Icon } from '../../../../../../Elements/Icons/Icon'
import train_icon from "/src/assets/png/train_icon.png"

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

const ChooseAnotherButton = styled(BaseButton)`

`

const TrainInfo = styled.div`

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
          {/* <TicketPickContainer>
          </TicketPickContainer> */}
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
              <TrainDirectionsList>
                  <TrainDirectionsListItem>{state?.direction?.departure?.from?.city?.name}</TrainDirectionsListItem>
                  <TrainDirectionsListItem style={{ "color": "black" }}>{state?.direction?.departure?.to?.city?.name}</TrainDirectionsListItem>
              </TrainDirectionsList>


              <IconCircle>
                    <Icon
                        $srcImg={train_icon}
                        $backgroundColor="white"
                    ></Icon>
                </IconCircle>
              <DepartureInfo
                  city={state?.direction?.departure?.to?.city?.name}
                  time={state?.direction?.departure?.to?.datetime}
                  railway={state?.direction?.departure?.to?.railway_station_name}
              ></DepartureInfo>
              <DepartureInfoRoadTime
                  time={state?.direction?.departure?.duration}
                  reverse={true}
              ></DepartureInfoRoadTime>
              <DepartureInfo
                  city={state?.direction?.departure?.from?.city?.name}
                  time={state?.direction?.departure?.from?.datetime}
                  railway={state?.direction?.departure?.from?.railway_station_name}
              ></DepartureInfo>

              </TrainInfo>
            
          </TicketPickContainer>
        </PickTicketsContainer>
      }
      
    </ChooseSeatsContainer>
  )
}

export default ChooseSeats
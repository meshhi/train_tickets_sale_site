import React, { useEffect } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { useGetSeatsQuery } from '../../../../../../../store/services/seats'
import { LoadingScreen } from '../Directions/Directions'
const PassengersContainer = styled.div`
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
  background-color: red;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const TicketPickContainer = styled.div`
  width: 100%;
  min-height: 20%;
  background-color: yellow;
`

const Passengers = () => {
  const params = useParams();
  const { state } = useLocation();
  const { data, error, loading } = useGetSeatsQuery(params.id);

  const navigate = useNavigate();

  useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <PassengersContainer>
      <Header>Выбор мест</Header>
      {loading
      ? <LoadingScreen></LoadingScreen>
      : <PickTicketsContainer>
          <TicketPickContainer>
          </TicketPickContainer>
          <TicketPickContainer>
          <button
          onClick={() => {
            navigate(`/orderticket/directions/`)}
          }
          >back</button>
            {state.renderDepartureInfoProp}
          </TicketPickContainer>
        </PickTicketsContainer>
      }
      
    </PassengersContainer>
  )
}

export default Passengers
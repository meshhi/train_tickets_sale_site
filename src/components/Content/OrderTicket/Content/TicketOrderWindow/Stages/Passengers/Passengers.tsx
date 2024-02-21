import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { useGetSeatsQuery } from '../../../../../../../store/services/seats'
import { LoadingScreen } from '../Directions/Directions'
import { useSelector } from 'react-redux'
import { PassengerCard } from './PassengerCard'

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
const PassengersList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`

const Passengers = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { passengers_seats } = useSelector(state => state.currentOrder);
  const [maxCardNumber, setMaxCardNumber] = useState<number>(0);
  const [maxOldCount, setMaxOldCount] = useState<number>(0);
  const [maxChildCount, setMaxChildCount] = useState<number>(0);
  const [maxChildBaseCount, setMaxChildBaseCount] = useState<number>(0);

  useEffect(() => {
    let maxCount = 0;
    if (passengers_seats) {
      for (let key in passengers_seats) {
        if (key == 'old') {
          setMaxOldCount(passengers_seats[key].list.length);
        }
        if (key == 'child') {
          setMaxChildCount(passengers_seats[key].list.length);
        }
        if (key == 'childBase') {
          setMaxChildBaseCount(passengers_seats[key].list.length);
        }
        maxCount += passengers_seats[key].list.length;
      }
    }
    setMaxCardNumber(maxCount);
  }, [passengers_seats])
  return (
    <PassengersContainer>
                <button
            onClick={() => {
              navigate(-1);
            }
            }
          >back</button>
                    <button
              onClick={() => {
                navigate(`/orderticket/check/`)
              }
            }
          >next</button>
                  можно добавить взрослых
        {
          maxOldCount
        }

        можно добавить детей
        {
          maxChildCount
        }

        можно добавить детей база
        {
          maxChildBaseCount
        }
      <PassengersList>

        <PassengerCard>

        </PassengerCard>
      </PassengersList>
    </PassengersContainer>
  )
}

export default Passengers
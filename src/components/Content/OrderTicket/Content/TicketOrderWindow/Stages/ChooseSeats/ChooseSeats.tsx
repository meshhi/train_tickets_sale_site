import { useEffect, useState } from 'react'
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
import { CustomStyledInput } from '../../../../../../Elements/Inputs/CustomStyledInput'
import sit from '/src/assets/svg/train_filters/sit.svg'
import lux from '/src/assets/svg/train_filters/lux.svg'
import platzcart from '/src/assets/svg/train_filters/platzcart.svg'
import coupe from '/src/assets/svg/train_filters/coupe.svg'
import { SeatInfoType } from '../../../../../../../store/services/types/api_types'
import {
  direction as direction_action,
  passengers_seats as passengers_seats_action
} from '../../../../../../../store/slices/currentOrderSlice'
import { useDispatch, useSelector } from 'react-redux'

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
  margin-block: 1rem;

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
  flex-direction: column;
`

const TicketsCountersList = styled.ul`
  list-style-type: none;
  display: flex;
`

const TicketsCountersItem = styled.li`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  min-height: 200px;
  padding: 2rem;

  &.parent {
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.25);
    background: #f7f6f6;

    p {
      font-weight: 400;
      font-size: 16px;
      color: #000;
    }
  }

  &.child {
    border: 1px solid rgba(255, 168, 0, 0.79);

    p {
      font-weight: 400;
      font-size: 16px;
      color: #928f94;
    }
  }
`

const TicketsCountersCount = styled(CustomStyledInput)`
  flex: 1;
  max-height: 50px;
  border: 1px solid #928F94;
  border-radius: 5px;
  padding: 0 1rem;
  width: 70%;
`

const TicketsCountersText = styled.p`
  flex: 1;
  font-weight: 400;
  font-size: 16px;
  color: #000;
`

const TrainType = styled.div`

`

const TrainTypeList = styled.ul`
  list-style-type: none;
  display: flex;
`

const TrainTypeListItem = styled.li<{$active: boolean}>`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-block: 2rem;
  cursor: pointer;
  transition: all 0.3s ease-out;

  font-weight: 400;
  font-size: 24px;
  color: ${props => props.$active ? "orange" : "#928f94"};

  div {
    transition: all 0.3s ease-out;
    background-color: ${props => props.$active ? "orange" : "#928f94"};
  }

  &:hover, &.active {
    color: orange;

    div {
      background-color: orange;
    }
  }
`

const Text = styled.p`

`

const SeatsPicker = styled.div`
  display: none;
  width: 100%;
  min-height: 300px;
  transition: all 0.3s ease-out;

  &.active {
    display: flex;
    flex-direction: column;
  }
`

const SeatsPickerInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const SeatsPickerInfoHeaderRow = styled.div`
  width: 100%;
  display: flex;
  padding-inline: 2rem;
  padding-block: 1rem;
  justify-content: space-between; 
  background: #ffd98f;
`

const SeatsPickerInfoWagonsList = styled.div`
  width: 100%;
  font-weight: 500;
  font-size: 18px;
  color: #2d2b2f;
`

const SeatsPickerInfoWagonsAddInfo = styled.p`
  font-weight: 400;
  font-size: 16px;
  color: #292929;
  min-width: 376px;
`

const SeatsPickerInfoContent = styled.div`
  width: 100%;
  display: flex;
`

const SeatsPickerInfoWagonNumber = styled.div`
  width: auto;
  min-height: 161px;
  background: #ffd98f;
  font-weight: 700;
  font-size: 72px;
  color: #292929;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-inline: 2rem;
  gap: 5px;

  & span {
    font-weight: 400;
    font-size: 24px;
    text-align: center;
    color: #292929;
  }
`

const SeatsPickerInfoSeats = styled.div`
  padding: 1rem 2rem .5rem 2rem;
  display: flex;
  flex-direction: row;
  flex: 1;
`

const Wagon = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
`

const WagonSeatItem = styled.div<{$active: boolean, $available: boolean}>`
  padding: 1rem;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: 700;
  background-color: ${props => props.$available 
    ? 
      props.$active ? "orange" :"var(--smooth-grey)" 
    : "var(--smooth-grey-inactive)"}
`

const WagonNumberPicker = styled.span<{$active: boolean}>`
  font-weight: 700;
  font-size: 18px;
  color: ${props => props.$active ? "orange" : "#2d2b2f"};
  cursor: pointer;
  margin-inline: .5rem;
`

const ToPassengersButton = styled(BaseButton)`

`

const trainTypes = [
  {
    id: 1,
    src: sit,
    text: "Сидячий",
    class_type: "fourth"
  },
  {
    id: 2,
    src: platzcart,
    text: "Плацкарт",
    class_type: "third"
  },
  {
    id: 3,
    src: coupe,
    text: "Купе",
    class_type: "second"
  },
  {
    id: 4,
    src: lux,
    text: "Люкс",
    class_type: "first"
  },
]

const isSeatInBookedList = (seat : SeatInfoType, listA) => {
  for (let key in listA) {
    if (listA[key].list.includes(seat)) {
      return true
    }
  }
  return false
}

const ChooseSeats = () => {
  const params = useParams();
  const { state } = useLocation();
  const { data, error, loading } = useGetSeatsQuery(params.id);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [activeTrainType, setActiveTrainType] = useState<string>();
  const [currentWagon, setCurrentWagon] = useState<SeatsInfoType>();
  const [validWagons, setValidWagons] = useState([]);
  const [maxOld, setMaxOld] = useState(3);
  const [maxChild, setMaxChild] = useState(2);
  const [maxChildBase, setMaxChildBase] = useState(0);

  const [currentTickets, setCurrentTickets] = useState<{
    old: {
      count: number,
      list: SeatInfoType[]
    },
    child: {
      count: number,
      list: SeatInfoType[]
    },
    childBase: {
      count: number,
      list: SeatInfoType[]
    },
  }>({
    old: {
      count: maxOld,
      list: []
    },
    child:  {
      count: maxChild,
      list: []
    },
    childBase:  {
      count: maxChildBase,
      list: []
    },
  });
  const [currentTicketsList, setCurrentTicketsList] = useState([]);

  const { direction, passengers_seats } = useSelector(state => state.currentOrder);

  useEffect(() => {
    if (data) {
      const filteredData = data?.filter(data => data?.coach?.class_type == activeTrainType);
      setValidWagons(filteredData);
      setCurrentWagon(filteredData[0]);
    }
  }, [activeTrainType])

  useEffect(() => {
    console.log(data)
    console.log(state)
  }, [data])

  const handleTrainTypeClick = (trainType) => {
    setActiveTrainType(trainType.class_type);
  }

  const handleWagonSeatClick = (e, item) => {
    if (isSeatInBookedList(item, currentTickets)) {

      setCurrentTickets(prev => {
        for (let key in prev) {
          if (prev[key].list.includes(item)) {
            prev[key].list.splice(prev[key].list.indexOf(item), 1);
            return {...prev};
          }
        }
        return({...prev})
      })
    } else {
      setCurrentTickets(prev => {
        for (let key in prev) {
          if (prev[key].list.length < prev[key].count) {
            prev[key].list.push(item);
            return {...prev};
          }
        }
        console.log("no more places")
        return({...prev})
      })
      console.log("now in list, added.")
    }
  }

  const handleToPassengersClick = () => {
    dispatch(direction_action(state.direction));
    dispatch(passengers_seats_action(currentTickets));
    navigate(`/orderticket/passengers/`)
  }

  useEffect(() => {
    console.log("store changed direction")
    console.log(direction)
  }, [direction])

  useEffect(() => {
    console.log(currentTicketsList)
    let list = []
    for (let key in currentTickets) {
      list = list.concat(currentTickets[key].list);
    }
    setCurrentTicketsList(list)
  }, [currentTickets])

  return (
    <ChooseSeatsContainer>
      <Header>Выбор мест</Header>
      {loading
        ? <LoadingScreen></LoadingScreen>
        : <PickTicketsContainer>
          <TicketPickContainer>
            <BackButtons>
              <BaseButton
                onClick={() => navigate(`/orderticket/directions/`)}
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
                <TicketsCountersItem className="parent">
                  <TicketsCountersCount value={`Взрослых — ${maxOld}`}></TicketsCountersCount>
                  <TicketsCountersText>Можно добавить еще
                    3 пассажиров </TicketsCountersText>
                </TicketsCountersItem>
                <TicketsCountersItem className="child">
                  <TicketsCountersCount value={`Детских — ${maxChild}`}></TicketsCountersCount>
                  <TicketsCountersText>Можно добавить еще 3 детей до 10 лет.Свое место в вагоне, как у взрослых, но дешевле
                    в среднем на 50-65% </TicketsCountersText>
                </TicketsCountersItem>
                <TicketsCountersItem>
                  <TicketsCountersCount value={`Детских «без места» — ${maxChildBase}`}></TicketsCountersCount>
                  <TicketsCountersText></TicketsCountersText>
                </TicketsCountersItem>
              </TicketsCountersList>
            </TicketsCounters>

            <TrainType>
              <HeaderInner>Тип вагона</HeaderInner>
              <TrainTypeList>
                {
                  trainTypes.map((trainType) =>
                    <TrainTypeListItem
                      $active={activeTrainType === trainType.class_type}
                      key={trainType.id}
                      onClick={() => handleTrainTypeClick(trainType)}
                    >
                      <Icon
                        $srcImg={trainType.src}
                      >
                      </Icon>
                      <Text>{trainType.text}</Text>
                    </TrainTypeListItem>)
                }
              </TrainTypeList>
            </TrainType>
            {
              currentWagon
                ?
                <SeatsPicker className={activeTrainType ? "active" : false}>
                  <SeatsPickerInfo>
                    <SeatsPickerInfoHeaderRow>
                      <SeatsPickerInfoWagonsList>Вагоны {validWagons.map(item =>
                        <WagonNumberPicker
                          key={item?.coach._id}
                          onClick={() => setCurrentWagon(item)}
                          $active={item?.coach._id === currentWagon?.coach?._id}
                        >{item?.coach.name}
                        </WagonNumberPicker>)}
                      </SeatsPickerInfoWagonsList>
                      <SeatsPickerInfoWagonsAddInfo>Нумерация вагонов начинается с головы поезда</SeatsPickerInfoWagonsAddInfo>
                    </SeatsPickerInfoHeaderRow>
                    <SeatsPickerInfoContent>
                      <SeatsPickerInfoWagonNumber>
                        {currentWagon?.coach?.name}
                        <span>вагон</span>
                      </SeatsPickerInfoWagonNumber>
                      <SeatsPickerInfoSeats>
                        места
                        {currentWagon?.coach?.available_seats}

                        Нижние
                        {currentWagon?.coach?.bottom_price}

                        Верхние
                        {currentWagon?.coach?.top_price}

                        Боковые
                        {currentWagon?.coach?.side_price}

                        обслуживание ФПК

                        кондиционер
                        {currentWagon?.coach?.have_air_conditioning}

                        have_wifi
                        {currentWagon?.coach?.have_wifi}

                        is_linens_included
                        {currentWagon?.coach?.is_linens_included}

                        кондиционер
                        {currentWagon?.coach?.have_air_conditioning}
                      </SeatsPickerInfoSeats>
                    </SeatsPickerInfoContent>
                  </SeatsPickerInfo>
                  <Wagon>
                    {
                      currentWagon?.seats.map(item => 
                      <WagonSeatItem
                      $available={item.available}
                      $active={isSeatInBookedList(item, currentTickets)}
                      onClick={(e) => {
                        handleWagonSeatClick(e, item);
                      }}
                      >
                        {item.index}
                      </WagonSeatItem>)
                    }
                  </Wagon>
                </SeatsPicker>
                : false
            }
          </TicketPickContainer>
        </PickTicketsContainer>
      }
      <ToPassengersButton
        $active={currentTicketsList.length}
        onClick={handleToPassengersClick}
      >
        Далее
      </ToPassengersButton>
    </ChooseSeatsContainer>


  )
}

export default ChooseSeats
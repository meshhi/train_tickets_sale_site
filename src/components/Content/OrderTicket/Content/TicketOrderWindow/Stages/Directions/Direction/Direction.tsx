import { DirectionType } from "../../../../../../../../store/services/types/api_types"
import styled from "styled-components"
import { Icon } from "../../../../../../../Elements/Icons/Icon"
import train_icon from "/src/assets/png/train_icon.png"
import road_arrow from "/src/assets/png/road_arrow.png"
import { format } from 'date-fns'
import { YellowButton } from "../../../../../../../Elements/Buttons/YellowButton"
import ruble from "/src/assets/svg/icons/ruble.svg"
import rocket from "/src/assets/png/last_tickets/rocket.png"
import tea from "/src/assets/png/last_tickets/tea.png"
import wifi from "/src/assets/png/last_tickets/wifi.png"
import { useNavigate } from "react-router-dom"
import { getDuration } from "../../../../../../../utils/utils"

const DirectionContainer = styled.div`
    width: 100%;
    height: 354px;
    display: flex;
    border-radius: 1px;
    border: 1px solid var(--smooth-grey);
    -webkit-box-shadow: 2px 7px 8px 0px rgba(34, 60, 80, 0.1);
    -moz-box-shadow: 2px 7px 8px 0px rgba(34, 60, 80, 0.1);
    box-shadow: 2px 7px 8px 0px rgba(34, 60, 80, 0.1);
`

const TrainInfo = styled.div`
    background-color: var(--smooth-grey-3);
    height: 100%;
    width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
`

const DirectionsInfo = styled.div`
    background-color: white;
    height: 100%;
    flex: 1;
`

const PlaceInfo = styled.div`
    background-color: white;
    height: 100%;
    width: 30%;
    border-left: 1px solid #E5E5E5;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding-block: 30px;
`

export const IconCircle = styled.div<{$color?: string, $width?: string, $height?: string}>`
    border-radius: 50%;
    border: 3px solid ${props => props.$color ? props.$color : "white"};
    padding: 15px;
    width: ${props => props.$width ? props.$width : "auto"};
    height: ${props => props.$height ? props.$height : "auto"};
`

export const TrainNumber = styled.div`
    font-weight: 700;
    font-size: 24px;
    text-align: center;
    color: #3e3c41;
`

export const TrainDirectionsList = styled.ul`
    font-weight: 400;
    font-size: 16px;
    color: #928f94;
    list-style-type: none;
`

export const TrainDirectionsListItem = styled.li`
    text-transform: capitalize;
`

const DepartureInfoRow = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    min-height: 50%;
`

const DepartureInfoContainer = styled.div`
    font-weight: 700;
    font-size: 24px;
    color: #000;
    display: flex;
    flex-direction: column;
    gap: 5px;
`

const DepartureInfoTimeContainer = styled.div`
`

const DepartureInfoCityContainer = styled.div`
    font-weight: 400;
    font-size: 18px;
    color: #292929;
    text-transform: capitalize;
    min-width: 80px;
`

const DepartureInfoRailwayContainer = styled.div`
    font-weight: 400;
    font-size: 16px;
    color: #928f94;
    text-transform: capitalize;
`

export const DepartureInfo = ({ city, time, railway }) =>
    <DepartureInfoContainer>
        <DepartureInfoTimeContainer>{format(new Date(time * 1000), 'HH:mm')}</DepartureInfoTimeContainer>
        <DepartureInfoCityContainer>{city}</DepartureInfoCityContainer>
        <DepartureInfoRailwayContainer>{railway} <br></br>вокзал</DepartureInfoRailwayContainer>
    </DepartureInfoContainer>

const DepartureInfoRoadTimeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;

    & .reverse {
        transform: rotate(180deg);
    }

    & .time {
        font-weight: 400;
        font-size: 18px;
        color: #c4c4c4;
    }
`

export const DepartureInfoRoadTime = ({ time, reverse } : {time?: number, reverse?: boolean}) => {
    return (
        <DepartureInfoRoadTimeContainer>
            {time ? <div className="time">{getDuration(time)}</div> : false}
            <Icon
                className={reverse ? "reverse" : false}
                $srcImg={road_arrow}
                $backgroundColor="orange"
                $width={25}
            ></Icon>
        </DepartureInfoRoadTimeContainer>
    )
}

const ChoosePlaceButton = styled(YellowButton)``

const PlaceList = styled.ul`
    list-style-type: none;
    width: 100%;
    padding-inline: 16px;
`

const PlaceListItemContainer = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const PlaceListItemPriceClass = styled.div`
font-weight: 400;
font-size: 16px;
color: #3e3c41;
`

const PlaceListItemMinPrice = styled.div`
font-weight: 700;
font-size: 24px;
color: #2d2b2f;
position: relative;
`

const PlaceListItemMinPriceText = styled.span`
font-weight: 400;
font-size: 16px;
color: #928f94;
`

const PlaceListItemSeats = styled.div`
font-weight: 500;
font-size: 16px;
color: #ffa800;
position: absolute;
left: -2rem;
display: flex;
align-items: center;
height: 100%;
`

const PlaceListItem = ({ priceClass, minPrice, availableSeats }) => {
    return (
        <PlaceListItemContainer>
            <PlaceListItemPriceClass>{priceClass}</PlaceListItemPriceClass>

            <PlaceListItemMinPrice>
                <PlaceListItemSeats>{availableSeats}</PlaceListItemSeats>
                <PlaceListItemMinPriceText>от</PlaceListItemMinPriceText> {minPrice}
                <Icon
                    style={{ "display": "inline-block" }}
                    $srcImg={ruble}
                    $width={20}
                    $height={20}
                ></Icon>

            </PlaceListItemMinPrice>
        </PlaceListItemContainer>)
}

const PlaceInfoBottom = styled.div`
    display: flex;
    flex-direction: column;
`

const PlaceInfoConditions = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 16px;
    margin-bottom: 33px;
`

interface Props extends React.PropsWithChildren {
    direction: DirectionType
}

const TipIcon = styled(Icon) <{ $active: boolean }>`
    background-color:${props => props.$active ? "orange" : "#C4C4C4"};
`

export const Direction: React.FC<Props> = ({ children, direction }) => {
    // console.log(direction)
    const navigate = useNavigate();
    return (
        <DirectionContainer>
            <TrainInfo>
                <IconCircle>
                    <Icon
                        $srcImg={train_icon}
                        $backgroundColor="white"
                    ></Icon>
                </IconCircle>
                <TrainNumber>
                    {direction?.departure?.train?.name}
                </TrainNumber>
                <TrainDirectionsList>
                    {/* arrival -> departure */}
                    <TrainDirectionsListItem>{direction?.departure?.from?.city?.name}</TrainDirectionsListItem>
                    <TrainDirectionsListItem style={{ "color": "black" }}>{direction?.departure?.to?.city?.name}</TrainDirectionsListItem>
                </TrainDirectionsList>
            </TrainInfo>
            <DirectionsInfo>
                {
                    direction?.arrival
                        ?
                        <DepartureInfoRow>

                            <DepartureInfo
                                city={direction?.arrival?.to?.city?.name}
                                time={direction?.arrival?.to?.datetime}
                                railway={direction?.arrival?.to?.railway_station_name}
                            ></DepartureInfo>
                            <DepartureInfoRoadTime
                                time={direction?.arrival?.duration}
                                reverse={false}
                            ></DepartureInfoRoadTime>
                            <DepartureInfo
                                city={direction?.arrival?.from?.city?.name}
                                time={direction?.arrival?.from?.datetime}
                                railway={direction?.arrival?.from?.railway_station_name}
                            ></DepartureInfo>
                        </DepartureInfoRow>
                        : false
                }
                {
                    direction?.departure
                        ?
                        <DepartureInfoRow>
                            <DepartureInfo
                                city={direction?.departure?.to?.city?.name}
                                time={direction?.departure?.to?.datetime}
                                railway={direction?.departure?.to?.railway_station_name}
                            ></DepartureInfo>
                            <DepartureInfoRoadTime
                                time={direction?.departure?.duration}
                                reverse={true}
                            ></DepartureInfoRoadTime>
                            <DepartureInfo
                                city={direction?.departure?.from?.city?.name}
                                time={direction?.departure?.from?.datetime}
                                railway={direction?.departure?.from?.railway_station_name}
                            ></DepartureInfo>
                        </DepartureInfoRow>
                        : false
                }
            </DirectionsInfo>
            <PlaceInfo>
                <PlaceList>
                    {
                        direction?.departure?.price_info?.first
                            ? <PlaceListItem
                                priceClass={"Люкс"}
                                minPrice={Math.min(
                                    ...[direction?.departure?.price_info?.first?.bottom_price,
                                    direction?.departure?.price_info?.first?.side_price,
                                    direction?.departure?.price_info?.first?.top_price].filter(d => !isNaN(d))
                                )
                                }
                                availableSeats={direction?.departure?.available_seats_info?.first}
                            ></PlaceListItem>
                            : false
                    }
                    {
                        direction?.departure?.price_info?.second
                            ? <PlaceListItem
                                priceClass={"Купе"}
                                minPrice={Math.min(
                                    ...[direction?.departure?.price_info?.second?.bottom_price,
                                    direction?.departure?.price_info?.second?.side_price,
                                    direction?.departure?.price_info?.second?.top_price].filter(d => !isNaN(d))
                                )
                                }
                                availableSeats={direction?.departure?.available_seats_info?.second}
                            ></PlaceListItem>
                            : false
                    }
                    {
                        direction?.departure?.price_info?.third
                            ? <PlaceListItem
                                priceClass={"Плацкарт"}
                                minPrice={Math.min(
                                    ...[direction?.departure?.price_info?.third?.bottom_price,
                                    direction?.departure?.price_info?.third?.side_price,
                                    direction?.departure?.price_info?.third?.top_price].filter(d => !isNaN(d))
                                )
                                }
                                availableSeats={direction?.departure?.available_seats_info?.third}
                            ></PlaceListItem>
                            : false
                    }
                    {
                        direction?.departure?.price_info?.fourth
                            ? <PlaceListItem
                                priceClass={"Сидячий"}
                                minPrice={Math.min(
                                    ...[direction?.departure?.price_info?.fourth?.bottom_price,
                                    direction?.departure?.price_info?.fourth?.side_price,
                                    direction?.departure?.price_info?.fourth?.top_price].filter(d => !isNaN(d))
                                )
                                }
                                availableSeats={direction?.departure?.available_seats_info?.fourth}
                            ></PlaceListItem>
                            : false
                    }

                </PlaceList>
                <PlaceInfoBottom>
                    <PlaceInfoConditions>
                        <TipIcon
                            $srcImg={wifi}
                            $active={direction?.have_wifi}
                            $width={20}
                            $height={20}
                        ></TipIcon>
                        <TipIcon
                            $srcImg={rocket}
                            $active={direction?.is_express}
                            $width={20}
                            $height={20}
                        ></TipIcon>
                        <TipIcon
                            $srcImg={tea}
                            $active={direction?.have_air_conditioning}
                            $width={20}
                            $height={20}
                        ></TipIcon>
                    </PlaceInfoConditions>
                    <ChoosePlaceButton
                        onClick={() => {
                            navigate(`/orderticket/chooseseats/${direction?.departure?._id}`,
                                { 
                                    state: {
                                        direction
                                    }
                                }
                            )
                        }}
                    >Выбрать места</ChoosePlaceButton>
                </PlaceInfoBottom>
            </PlaceInfo>
        </DirectionContainer>
    )
}

export default Direction
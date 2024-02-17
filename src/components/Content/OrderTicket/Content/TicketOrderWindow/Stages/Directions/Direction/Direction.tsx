import { DirectionType } from "../../../../../../../../store/services/types/api_types"
import styled from "styled-components"
import { Icon } from "../../../../../../../Elements/Icons/Icon"
import train_icon from "/src/assets/png/train_icon.png"

const DirectionContainer = styled.div`
    width: 959px;
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
    background-color: var(--white);
    height: 100%;
    flex: 1;
`

const PlaceInfo = styled.div`
    background-color: var(--white);
    height: 100%;
    width: 20%;
    border-left: 1px solid #E5E5E5;
`

const IconCircle = styled.div`
    border-radius: 50%;
    border: 3px solid white;
    padding: 15px;
`

const TrainNumber = styled.div`
    font-weight: 700;
    font-size: 24px;
    text-align: center;
    color: #3e3c41;
`

const TrainDirectionsList = styled.ul`
    font-weight: 400;
    font-size: 16px;
    color: #928f94;
    list-style-type: none;
`

const TrainDirectionsListItem = styled.li`
    text-transform: capitalize;
`

const DepartureInfo = styled.div`
    display: flex;

`

const DepartureInfoCity = styled.div`

`

const DepartureInfoTime = styled.div`

`

interface Props extends React.PropsWithChildren {
    direction: DirectionType
}

const Direction: React.FC<Props> = ({children, direction}) => {
    console.log(direction)
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
                    <TrainDirectionsListItem style={{"color": "black"}}>{direction?.departure?.to?.city?.name}</TrainDirectionsListItem>
                </TrainDirectionsList>
            </TrainInfo>
            <DirectionsInfo>
                <DepartureInfo>
                    <DepartureInfoCity></DepartureInfoCity>
                    <DepartureInfoTime></DepartureInfoTime>
                    <DepartureInfoCity></DepartureInfoCity>

                </DepartureInfo>

            </DirectionsInfo>
            <PlaceInfo></PlaceInfo>
        </DirectionContainer>
    )
}

export default Direction
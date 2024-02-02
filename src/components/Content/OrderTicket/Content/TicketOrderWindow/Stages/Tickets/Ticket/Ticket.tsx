import { DirectionType } from "../../../../../../../../store/services/types/api_types"
import styled from "styled-components"

const TicketContainer = styled.div`
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

interface Props extends React.PropsWithChildren {
    direction: DirectionType
}

const Ticket: React.FC<Props> = ({children, direction}) => {
    console.log(direction)
    return (
        <TicketContainer>
            <TrainInfo>{direction.departure.train.name}</TrainInfo>
            <DirectionsInfo></DirectionsInfo>
            <PlaceInfo></PlaceInfo>
        </TicketContainer>
    )
}

export default Ticket
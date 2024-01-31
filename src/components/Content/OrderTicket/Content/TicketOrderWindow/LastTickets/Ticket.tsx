import styled from "styled-components"
import type { DirectionType } from "../../../../../../store/services/types/api_types";

const TicketContainer = styled.article`
    width: 361px;
    height: 161px;
    border: 1px solid #C4C4C4; background: #FFF;
    box-shadow: 0px 2px 2px 0px rgba(62, 60, 65, 0.25);
`

type TicketProps = {
    fromCity: string,
    fromRailway: string,
    toCity: string,
    toRailway: string,
    minPrice: number,
}

export const Ticket = ({fromCity, fromRailway, toCity, toRailway, minPrice} : TicketProps) => {
    return(
        <TicketContainer>
            <header>
                <div>
                    {fromCity}
                    {fromRailway}
                </div>
                <div>
                    {toCity}
                    {toRailway}
                </div>
                <div>
                    {minPrice}
                </div>
            </header>
        </TicketContainer>
    )
}
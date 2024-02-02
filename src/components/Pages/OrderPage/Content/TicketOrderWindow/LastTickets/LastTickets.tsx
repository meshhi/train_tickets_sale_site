import styled from "styled-components";
import { Ticket } from "./Ticket";
import loader_train from '/home/meshi/Desktop/diplo/src/assets/gif/loader_train.gif';
import { Spinner } from "../../../../../Elements/Loaders/Spinner";
import type { DirectionType } from "../../../../../../store/services/types/api_types";

// store
import { useGetLastTicketsQuery } from '/src/store/services/direction.ts'

const LastTicketsContainer = styled.div`
    display: flex;
    gap: 12px;
    flex-direction: column;
`

const Header = styled.h1`
    color: #000;
    font-family: Roboto;
    font-size: 30px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: uppercase;
    width: 100%;
`

const TicketsList = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 17px;
`

export const LastTickets = () => {
    const { data, error, loading } = useGetLastTicketsQuery();

    return(
        <LastTicketsContainer>
            <Header>
                Последние билеты
            </Header>
            <TicketsList>
                {
                    loading ? <Spinner></Spinner> : false
                }
                {
                    data
                        ?.slice(0, 3)
                        .map((direction : DirectionType)  => {
                            return(<Ticket 
                                key={direction.departure._id}
                                fromCity={direction.departure.from.city.name}
                                fromRailway={direction.departure.from.railway_station_name}
                                toCity={direction.departure.to.city.name}
                                toRailway={direction.departure.to.railway_station_name}
                                minPrice={direction.departure.min_price}
                                ></Ticket>)
                        })
                }
            </TicketsList>

        </LastTicketsContainer>
    )
}
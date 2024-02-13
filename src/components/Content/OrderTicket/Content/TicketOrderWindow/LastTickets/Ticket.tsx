import styled from "styled-components"
import type { DirectionType } from "../../../../../../store/services/types/api_types";
import { Icon } from "../../../../../Elements/Icons/Icon";
import ruble from "/src/assets/svg/icons/ruble.svg";
import tea from "/src/assets/png/last_tickets/tea.png";
import rocket from "/src/assets/png/last_tickets/rocket.png";
import wifi from "/src/assets/png/last_tickets/wifi.png";

const TicketContainer = styled.article`
    width: 361px;
    height: 161px;
    border: 1px solid #C4C4C4; background: #FFF;
    box-shadow: 0px 2px 2px 0px rgba(62, 60, 65, 0.25);
    padding: 18px 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Directions = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Railway = styled.div`
    display: flex;
    flex-direction: column;
`

const Text = styled.span`
    font-size: 20px;
    font-weight: 400;
    color: #292929;
    text-transform: capitalize;
    line-height: 23.44px;
    margin-bottom: 4px;
`

const TextGrey = styled.span`
    font-size: 16px;
    font-weight: 400;
    color: #928F94;
    line-height: 18.75px;
`

const Conditions = styled.div`
    display: flex;
    justify-content: space-between;
`

const Features = styled.div`
    display: flex;
    gap: 20px;
`

const Price = styled.div`
    display: flex;
    gap: 5px;
    align-items: end;
    line-height: 0.7;
`

const PriceMin = styled.div`
    color: #FFA800;
    font-size: 36px;
    font-weight: 700;
`

type TicketProps = {
    fromCity: string,
    fromRailway: string,
    toCity: string,
    toRailway: string,
    minPrice: number,
}

export const Ticket = ({ fromCity, fromRailway, toCity, toRailway, minPrice }: TicketProps) => {
    return (
        <TicketContainer>
            <Directions>
                <Railway>
                    <Text>{fromCity}</Text>
                    <TextGrey>{fromRailway}</TextGrey>
                </Railway>
                <Railway>
                    <Text style={{ "textAlign": "end" }}>{toCity}</Text>
                    <TextGrey style={{ "textAlign": "end" }}>{toRailway}</TextGrey>
                </Railway>
            </Directions>
            <Conditions>
                <Features>
                    <Icon
                        $srcImg={wifi}
                        $width={20}
                        $height={20}
                        $backgroundColor="#E5E5E5"
                    ></Icon>
                    <Icon
                        $srcImg={rocket}
                        $width={20}
                        $height={20}
                        $backgroundColor="#E5E5E5"
                    ></Icon>
                    <Icon
                        $srcImg={tea}
                        $width={20}
                        $height={20}
                        $backgroundColor="#E5E5E5"
                    ></Icon>
                </Features>
                <Price>
                    <TextGrey style={{ "lineHeight": "0.7" }}>от</TextGrey>
                    <PriceMin>{minPrice}</PriceMin>
                    <Icon
                        $srcImg={ruble}
                        $width={20}
                        $height={25}
                        $backgroundColor="#928F94"
                    ></Icon>
                </Price>
            </Conditions>
        </TicketContainer>
    )
}
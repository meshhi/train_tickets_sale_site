import { DirectionFilterForm } from "../../../../Forms/DirectionFilterForm/DirectionFilterForm";
import styled from "styled-components";
import filter_block_ticket_bg from '/src/assets/png/filter_ticket_order_bg.png';

export const FilterBlockContainer = styled.div`
    background-image: url(${filter_block_ticket_bg});
    background-repeat: no-repeat;
    background-size: cover;
    height: 593px;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
`

export const FilterBlock = () => {
    return(
        <FilterBlockContainer>
            <DirectionFilterForm variant={"horizontal"}></DirectionFilterForm>
        </FilterBlockContainer>
    )
}
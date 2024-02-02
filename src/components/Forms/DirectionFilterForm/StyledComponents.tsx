import styled from "styled-components";
import { YellowLandingButton } from "../../Elements/Buttons/YellowLandingButton";

export const DirectionFilterFormTemplate = styled.form<{ $variant?: string }>`
    ${props => props.$variant === "horizontal"
    ?   `
        width: 77%;
        height: 323px;
        background-color: rgba(41, 41, 41, .8);
        display: flex;
        flex-direction: column;
        `
    :
        `
        width: 729px;
        height: 566px;
        background-color: rgba(41, 41, 41, .8);
        display: flex;
        flex-direction: column;
        `
    }
`

export const Inputs = styled.div<{ $variant?: string }>`
    ${props => props.$variant === "horizontal"
    ?   `
        margin: 35px 45px 47px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 34px;
        `   
    :   
        `
        min-height: 279px;
        margin: 90px 21px 92px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        `
    }
`

export const InputsRow = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const InputsLabel = styled.h2`
    color: var(--main-color);
    font-family: Roboto;
    font-size: 30px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    margin-bottom: 7px;
    margin-left: 7px;
`

export const InputsPlace = styled.div`
    display: flex;
    flex-direction: "row";
    align-items: center;
    justify-content: space-between;
`

export const InputsDate = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
    flex-direction: "row"};
`

export const FindTicketsButton = styled(YellowLandingButton)`

`


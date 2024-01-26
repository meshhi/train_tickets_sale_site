import styled from "styled-components";

export const TicketFilterForm = styled('form')`
    width: 574px;
    height: calc(100vh - 43vh + .5rem);
    background-color: rgba(41, 41, 41, .8);
`

export const Inputs = styled('div')`
    margin: 79px 21px;
    flex-direction: column;

`

export const InputsPlace = styled('div')`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 61px;
`

export const InputsLabel = styled('h2')`
    color: var(--main-color);
    font-family: Roboto;
    font-size: 30px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    margin-bottom: 7px;
`
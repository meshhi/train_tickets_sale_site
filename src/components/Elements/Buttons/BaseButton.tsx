import styled from "styled-components";

export const BaseButton = styled.button`
    height: 50px;
    background-color: transparent;
    padding-inline: 16px;
    padding-block: 8px;
    border-radius: 5px;
    border: 2px solid black;
    text-align: center; 
    font-weight: 700;
    font-size: 24px;
    text-align: center;
    color: black;
    transition: all .1s ease-in-out;

    &:hover {
        color: orange;
        border-color: orange;
    }
`
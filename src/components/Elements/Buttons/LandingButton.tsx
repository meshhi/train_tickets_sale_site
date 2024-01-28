import styled from "styled-components";

export const LandingButton = styled.button<{$color?: string}>`
    width: 325px;
    height: 60px;
    border-radius: 5px;
    border: 1px solid ${props => props.$color ? props.$color : "var(--main-color)"};
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-align: center; 
    color: ${props => props.$color ? props.$color : "var(--main-color)"};
    transition: all 0.2s ease-out;
    &:hover {
        color: var(--smooth-black);
        background: var(--smooth-yellow);
        border-color: var(--smooth-yellow);
    }

    &:active {
        color: var(--smooth-black);
        background: var(--main-color); 
        border-color: var(--main-color);
    }
`
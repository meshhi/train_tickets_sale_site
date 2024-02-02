import { styled } from "styled-components";
import { LandingButton } from "./LandingButton";

export const YellowLandingButton = styled(LandingButton)`
    background-color: var(--orange);
    color: var(--black);
    align-items: center;
    justify-content: space-between;
    margin-bottom: 52px;
    margin-right: 21px;
    border-color: var(--orange);
    align-self: end;
    &:active {
        background-color: var(--smooth-grey-inactive);
        color: var(--orange);
        border-color: var(--orange);
    }
`
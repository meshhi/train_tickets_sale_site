import styled from "styled-components";
import { ProgressBarElement } from "./ProgressBarElement";
import arrow from '/src/assets/svg/progress_bar/arrow.svg';

export const ProgressBarContainer = styled.div`
    width: 100%;
    height: 98px;
    display: flex;
    position: relative;
    background-color: var(--orange);
`

export const ProgressBar = () => {
    
    return(
        <ProgressBarContainer>

        </ProgressBarContainer>
    )
}
import styled from "styled-components";
import ProgressBarArrow from "../../../../Elements/ProgressBar/ProgressBarArrow";
import ProgressBarText from "../../../../Elements/ProgressBar/ProgressBarText";

export const ProgressBarContainer = styled.div`
    width: 100%;
    height: 98px;
    display: flex;
    position: relative;
    background-color: transparent;
    z-index: 0;
`

export const ProgressBar = () => {
    
    return(
        <ProgressBarContainer>
            <ProgressBarArrow isActive={true} $flex={"2.1"}>
                <ProgressBarText>haha</ProgressBarText>
            </ProgressBarArrow>
            <ProgressBarArrow isActive={false} $flex={"1.2"}></ProgressBarArrow>
            <ProgressBarArrow isActive={false} $flex={"1.2"}></ProgressBarArrow>
            <ProgressBarArrow isActive={false} $flex={"1.9"} noArrowHead={true}></ProgressBarArrow>
        </ProgressBarContainer>
    )
}
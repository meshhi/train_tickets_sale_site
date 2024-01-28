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
                <ProgressBarText numberValue={1} textValue={"Билеты"} $margin={"0 164px 0 auto"}></ProgressBarText>
            </ProgressBarArrow>
            <ProgressBarArrow isActive={false} $flex={"1.2"}>
                <ProgressBarText numberValue={2} textValue={"Пассажиры"} $margin={"0 auto"}></ProgressBarText>
            </ProgressBarArrow>
            <ProgressBarArrow isActive={false} $flex={"1.2"}>
                <ProgressBarText numberValue={3} textValue={"Оплата"} $margin={"0 auto"}></ProgressBarText>
            </ProgressBarArrow>
            <ProgressBarArrow isActive={false} $flex={"1.9"} noArrowHead={true}>
                <ProgressBarText numberValue={4} textValue={"Проверка"} $margin={"0 auto 0 35px"}></ProgressBarText>
            </ProgressBarArrow>
        </ProgressBarContainer>
    )
}
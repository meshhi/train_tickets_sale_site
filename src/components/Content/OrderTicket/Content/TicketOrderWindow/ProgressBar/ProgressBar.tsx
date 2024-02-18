import styled from "styled-components";
import ProgressBarArrow from "../../../../../Elements/ProgressBar/ProgressBarArrow";
import ProgressBarText from "../../../../../Elements/ProgressBar/ProgressBarText";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export const ProgressBarContainer = styled.div`
    width: 100%;
    height: 98px;
    display: flex;
    position: relative;
    background-color: transparent;
    z-index: 0;
`

export const ProgressBar = () => {
    const location = useLocation();
    const [actives, setActives] = useState([true, false, false, false])
    
    useEffect(() => {
        if (location.pathname === "/orderticket/directions") {
            setActives([true, false, false, false])
        }
        if (location.pathname === "/orderticket/passengers") {
            setActives([true, true, false, false])
        }
        if (location.pathname === "/orderticket/payment") {
            setActives([true, true, true, false])
        }
        if (location.pathname === "/orderticket/check") {
            setActives([true, true, true, true])
        }
        
    }, [location])
    return(
        <ProgressBarContainer>
            <ProgressBarArrow isActive={actives[0]} $flex={"2.1"}>
                <ProgressBarText numberValue={1} textValue={"Билеты"} $margin={"0 164px 0 auto"}></ProgressBarText>
            </ProgressBarArrow>
            <ProgressBarArrow isActive={actives[1]} $flex={"1.2"}>
                <ProgressBarText numberValue={2} textValue={"Пассажиры"} $margin={"0 auto"}></ProgressBarText>
            </ProgressBarArrow>
            <ProgressBarArrow isActive={actives[2]} $flex={"1.2"}>
                <ProgressBarText numberValue={3} textValue={"Оплата"} $margin={"0 auto"}></ProgressBarText>
            </ProgressBarArrow>
            <ProgressBarArrow isActive={actives[3]} $flex={"1.9"} noArrowHead={true}>
                <ProgressBarText numberValue={4} textValue={"Проверка"} $margin={"0 auto 0 35px"}></ProgressBarText>
            </ProgressBarArrow>
        </ProgressBarContainer>
    )
}
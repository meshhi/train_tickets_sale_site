import styled from "styled-components"
import how_it_works from "/src/assets/png/how_it_works_bg.png";
import { Icon } from "../../../../Elements/Icons/Icon";

export const HowItWorksContainer = styled('section')`
    // height: 575px;
    background: url(${how_it_works}), lightgray 50% / cover no-repeat;;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: center;
    align-items: center;
    padding-block: 75px;
    // background-color: #FFD600;
    background-color: orange;

`

export const InnerContainer = styled('div')`
    width: 74%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    color: #292929;
    gap: 107px;
`

export const InnerContainerHeader = styled('header')`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

`

export const Title = styled('h2')`
    font-size: 36px;
    color: #fff;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: uppercase; 
`

export const ListContainer = styled('ul')`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 137px;
`

export const ListItem = styled('ul')`
    color: #FFF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 226px;
    gap: 34px;
    transition: all 0.2s ease-out;
    &:hover {
        color: #FFB726;
    }
`

export const ListIcon = styled(Icon)`
    width: 162px;
    height: 162px;
    background-color: var(--main-color);
`

export const ListText = styled('div')`
// color: #FFF;
text-align: center;
font-family: Roboto;
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: normal;`
import styled from "styled-components"

export const ReviewsContainer = styled('section')`
    // height: 575px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: center;
    align-items: center;
    padding-block: 75px;
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

export const Title = styled('h2')`
        font-size: 36px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        text-transform: uppercase; 
    `
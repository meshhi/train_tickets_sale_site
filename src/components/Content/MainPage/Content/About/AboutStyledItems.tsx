import styled from "styled-components"

export const AboutContainer = styled('section')`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 564px;
`

export const InnerContainer = styled('div')`
    width: 74%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    color: var(--black);
    gap: 33px;
`

export const Title = styled('h2')`
    font-family: Roboto;
    font-size: 36px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: uppercase; 
`

export const TextContainer = styled('div')`
    width: 100%;
    border-left: .5rem solid var(--orange);
    padding-left: 19px;
`

export const Text = styled('p')`
    font-size: 1.5rem;
`

export const Bold = styled('span')`
    font-weight: bold;
`
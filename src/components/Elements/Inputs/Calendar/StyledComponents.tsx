import styled from "styled-components"

export const CalendarContainer = styled.div`
    position: relative;
    top: 3rem;
`

export const CalendarItem = styled.div`
    --height: 250px;
    --width: 100%;
    background-color: white;
    min-width: var(--width);
    min-height: var(--height);
    position: absolute;
    bottom: -var(--height);
    margin: 0 auto;
    z-index: 99999;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(7, 40px);
    border-radius: 6px;
    -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
`

export const PrevBtn = styled.div`
    grid-column: span 2;
    border-bottom: 1px solid var(--smooth-grey);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

export const PrevArrow = styled.div`
    clip-path: polygon(0 50%, 100% 0, 100% 100%);
    background-color: var(--black);
    width: 6px;
    height: 10px;
`

export const NextBtn = styled.div`
    grid-column: span 2;
    border-bottom: 1px solid var(--smooth-grey);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

export const NextArrow = styled.div`
    clip-path: polygon(100% 50%, 0 0, 0 100%);
    background-color: var(--black);
    width: 6px;
    height: 10px;
`

export const DateAreaBtn = styled.div`
    grid-column: span 3;
    border-bottom: 1px solid var(--smooth-grey);
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
`

export const Cell = styled.div<{ $inactive?: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;

    ${props => props.$inactive ? `
        pointer-events: none;
        color: grey;
    ` : ''}

    cursor: pointer;
    border-radius: 3px;

    &:hover {
        border: 1px solid var(--yellow);
    }

    &.active {
        
        border: 1px solid var(--yellow);
        background-color: var(--smooth-yellow);
    }
`
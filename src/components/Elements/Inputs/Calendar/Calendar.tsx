import { differenceInDays, startOfMonth, getDaysInMonth, addDays, getMonth, endOfMonth, addMonths, setDate, isEqual, startOfDay } from 'date-fns'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { monthNames } from '../../../utils/utils'

const CalendarContainer = styled.div`
    position: relative;
    top: 3rem;
`

const CalendarItem = styled.div`
    --height: 250px;
    --width: 100%;
    background-color: transparent;
    min-width: var(--width);
    min-height: var(--height);
    position: absolute;
    bottom: calc(-var(--height))px;
    margin: 0 auto;
    z-index: 99999;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(7, 40px);
`

const PrevBtn = styled.div`
    background-color: yellow;
    grid-column: span 2;
`
const NextBtn = styled.div`
    background-color: blue;
    grid-column: span 2;
`

const DateAreaBtn = styled.div`
    background-color: green;
    grid-column: span 3;
`

const Cell = styled.div<{ $inactive?: boolean }>`
    background-color: purple;
    display: flex;
    justify-content: center;
    align-items: center;

    ${props => props.$inactive ? `
        pointer-events: none;
        color: grey;
    ` : ''}

    cursor: pointer;

    &:hover {
        background-color: grey;
    }

    &.active {
        background-color: yellow;
    }
`

const Calendar = ({ visible, defaultDate, inputHandler, handleInputFocus }) => {
    const [pickDate, setPickDate] = useState(defaultDate ? new Date(defaultDate) : startOfDay(new Date()));
    const [activeDate, setActiveDate] = useState(defaultDate ? new Date(defaultDate) : startOfDay(new Date()));
    const [cellValues, setCellValues] = useState([]);
    const [prefixDays, setPrefixDays] = useState(0);
    const [suffixDays, setSuffixDays] = useState(0);

    const handleNextBtnClick = () => {
        setPickDate(addMonths(pickDate, 1))
    }

    const handlePrevBtnClick = () => {
        setPickDate(addMonths(pickDate, -1))
    }

    const handleCellClick = (dateValue) => {
        inputHandler(dateValue);
        setActiveDate(dateValue);
        handleInputFocus();
    }

    useEffect(() => {
        const startDate = startOfMonth(pickDate);
        const endDate = endOfMonth(pickDate);
        const daysCount = differenceInDays(endDate, startDate) + 1;

        setCellValues(prev => {
            const values = [];
            let currDate = startDate;
            for (let i = 0; i < daysCount; i++) {
                values.push({
                    dateValue: currDate
                })
                currDate = addDays(currDate, 1);
            }
            return (values);
        })

        setPrefixDays(addDays(startDate, -1).getDay());
        setSuffixDays(6 - addDays(endDate, -1).getDay());
    }, [pickDate])

    return (
        visible
            ?
            <CalendarContainer>
                <CalendarItem>
                    <PrevBtn onClick={handlePrevBtnClick}>Prev</PrevBtn>
                    <DateAreaBtn>
                        {monthNames[getMonth(pickDate)]}
                    </DateAreaBtn>
                    <NextBtn onClick={handleNextBtnClick}>Next</NextBtn>
                    {
                        Array.from({ length: prefixDays }).map((_, index) => <Cell $inactive={true} className="cell" key={index}>{getDaysInMonth(addMonths(pickDate, -1)) - index}</Cell>)
                    }
                    {
                        cellValues.map((cellValue, index) =>
                            <Cell
                                $inactive={false}
                                className={`cell ${isEqual(activeDate, cellValue.dateValue) ? 'active' : ''}`}
                                onClick={() => handleCellClick(cellValue.dateValue)}
                                key={index}>
                                {index + 1}
                            </Cell>
                        )
                    }
                    {
                        Array.from({ length: suffixDays }).map((_, index) => <Cell $inactive={true} className="cell" key={index}>{index + 1}</Cell>)
                    }
                </CalendarItem>
            </CalendarContainer>
            : false
    )
}

export default Calendar
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

const PrevBtn = styled.div`
    grid-column: span 2;
    border-bottom: 1px solid var(--smooth-grey);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

const PrevArrow = styled.div`
    clip-path: polygon(0 50%, 100% 0, 100% 100%);
    background-color: var(--black);
    width: 6px;
    height: 10px;
`

const NextBtn = styled.div`
    grid-column: span 2;
    border-bottom: 1px solid var(--smooth-grey);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

const NextArrow = styled.div`
    clip-path: polygon(100% 50%, 0 0, 0 100%);
    background-color: var(--black);
    width: 6px;
    height: 10px;
`

const DateAreaBtn = styled.div`
    grid-column: span 3;
    border-bottom: 1px solid var(--smooth-grey);
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
`

const Cell = styled.div<{ $inactive?: boolean }>`
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

const Calendar = ({ visible, defaultDate, changeInputValue, handleInputClick }) => {
    const [pickDate, setPickDate] = useState(defaultDate ? new Date(defaultDate) : startOfDay(new Date()));
    const [activeDate, setActiveDate] = useState(pickDate);
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
        changeInputValue(dateValue);
        setActiveDate(dateValue);
        handleInputClick();
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
                    <PrevBtn onClick={handlePrevBtnClick}><PrevArrow></PrevArrow></PrevBtn>
                    <DateAreaBtn>
                        {monthNames[getMonth(pickDate)]}
                    </DateAreaBtn>
                    <NextBtn onClick={handleNextBtnClick}><NextArrow></NextArrow></NextBtn>
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
import { differenceInDays, startOfMonth, getDaysInMonth, addDays, getMonth, endOfMonth, addMonths, setDate, isEqual, startOfDay } from 'date-fns'
import { useEffect, useState } from 'react'
import { monthNames } from '../../../utils/utils'
import { CalendarContainer, CalendarItem, PrevBtn, PrevArrow, DateAreaBtn, NextBtn, NextArrow, Cell } from './StyledComponents'

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
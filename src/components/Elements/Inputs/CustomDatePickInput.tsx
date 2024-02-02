import styled from 'styled-components'
import { CustomStyledInput } from './CustomStyledInput'
import calendar from '/src/assets/svg/icons/calendar.svg';
import { SyntheticEvent, useState } from 'react';
import Calendar from './Calendar/Calendar';
import { format } from 'date-fns';

const Container = styled.div`
    max-width: 100%;
`

const CustomInput = styled(CustomStyledInput)`

`

export enum VARIANTS {
    MEDIUM,
    BIG
}

export const CustomDatePickInput = ({placeholder = "ДД/ММ/ГГ", variant, defaultDate} : {placeholder?: string, variant?: VARIANTS, defaultDate?: number}) => {
    const [visible, setVisible] = useState(false);
    const [inputValue, setInputValue] = useState(defaultDate ? format(new Date(defaultDate), "dd.MM.yyyy") : "");

    let $height;
    let $backGroundSize;
    switch(variant) {
        case VARIANTS.BIG:
            $height = 60;
            $backGroundSize = "40px 40px";
            break;
        case VARIANTS.MEDIUM:
            $height = 40;
            $backGroundSize = "20px 20px";
            break;
        default:
            $height = 60;
            $backGroundSize = "40px 40px";
    }

    const handleInputFocus = (e : SyntheticEvent) => {
        setVisible(prev => !prev);
    }

    const inputHandler = (dateValue) => {
        setInputValue(format(dateValue, "dd.MM.yyyy"));
    }

    return(
        <Container>
            <CustomInput 
            type="text" $icon={calendar} placeholder={placeholder} $height={$height} $backgroundSize={$backGroundSize}
            onFocus={handleInputFocus}
            value={inputValue}
            ></CustomInput>
            <Calendar
            defaultDate={defaultDate}
            visible={visible}
            inputHandler={inputHandler}
            handleInputFocus={handleInputFocus}
            ></Calendar>
        </Container>
        )
}
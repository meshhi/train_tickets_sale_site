import styled from 'styled-components'
import { StyledInput } from './StyledInput';
import calendar from '/src/assets/svg/icons/calendar.svg';
import { SyntheticEvent, useEffect, useState } from 'react';
import Calendar from './Calendar/Calendar';
import { format } from 'date-fns';
import { useDispatch } from 'react-redux';
import { VARIANTS } from '../../utils/utils';

const Container = styled.div`
    max-width: 100%;
`

const CustomInput = styled(StyledInput)`

`

interface Props extends React.PropsWithChildren {
    variant: VARIANTS,
}

export const DatePickInput : React.FC<Props> = ({placeholder = "ДД/ММ/ГГ", variant, defaultDate, action} : {placeholder?: string, variant?: VARIANTS, defaultDate?: number}) => {
    const [visible, setVisible] = useState(false);
    const [inputValue, setInputValue] = useState();
    const dispatch = useDispatch();

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

    const handleInputClick = (e : SyntheticEvent) => {
        setVisible(prev => !prev);
    }

    const changeInputValue = (dateValue) => {
        const formattedDate = format(dateValue, "dd.MM.yyyy");
        setInputValue(formattedDate);
        dispatch(action(+dateValue));
    }

    useEffect(() => {
        setInputValue(defaultDate ? format(new Date(defaultDate), "dd.MM.yyyy") : "")
    }, [defaultDate])

    return(
        <Container>
            {/* <CustomInput 
            type="text" $icon={calendar} placeholder={placeholder} $height={$height} $backgroundSize={$backGroundSize}
            onClick={handleInputClick}
            value={inputValue}
            ></CustomInput>
            <Calendar
            defaultDate={defaultDate}
            visible={visible}
            changeInputValue={changeInputValue}
            handleInputClick={handleInputClick}
            ></Calendar> */}
        </Container>
        )
}
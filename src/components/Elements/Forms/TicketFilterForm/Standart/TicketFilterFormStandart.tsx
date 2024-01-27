import { SyntheticEvent, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// store
import { useGetCityByNameQuery } from '/src/store/services/city.ts'
import { useDispatch, useSelector } from 'react-redux';
import { cityIn, cityOut } from '/src/store/slices/ticketSlice.ts';

// UI
import geo from '/src/assets/svg/footer_contacts/geo.svg';
import calendar from '/src/assets/svg/icons/calendar.svg';
import change_place from '/src/assets/png/change_place.png';
import { Icon } from '../../../Icons/Icon';
import { CustomDebouncedDropdownInput } from '../../../Inputs/CustomDebouncedDropdownInput';
import { CustomDatePickInput } from '../../../Inputs/CustomDatePickInput';
import { Inputs, InputsDate, InputsLabel, InputsPlace, TicketFilterForm, FindTicketsButton, InputsRow } from './TicketFilterFormStyledElements';

export const TicketFilterFormStandart = () => {
    const [name, setName] = useState<string | null>(null);
    const [rightDirection, setRightDirection] = useState<boolean>(true);
    const { data: cities, error, isLoading } = useGetCityByNameQuery(name);
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChangeCityInput = (e: React.FormEvent<HTMLInputElement>): void => {
        setName(e.target.value);
    }

    const handleChangeDirectionClick = (e: SyntheticEvent): void => {
        setRightDirection(prev => !prev);
    }

    const handleFindTicketsClick = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (location.pathname === "/") {
            setTimeout(() => navigate("/orderticket"), 1000);
        }
    }

    const cityInValue = useSelector(state => state.tickets.cityIn);
    const cityOutValue = useSelector(state => state.tickets.cityOut);

    return (
        <TicketFilterForm>
            <Inputs>
                <InputsRow>
                    <InputsLabel>Направление</InputsLabel>
                    <InputsPlace $rightDirection={rightDirection}>
                        <CustomDebouncedDropdownInput
                            callback={handleChangeCityInput}
                            debounceTime={500}
                            options={Array.isArray(cities) ? cities : []}
                            placeholder="Куда..."
                            $icon={geo}
                            action={cityIn}
                            defaultValue={cityInValue}
                        ></CustomDebouncedDropdownInput>
                        <Icon
                            $srcImg={change_place}
                            $width={24}
                            $height={24}
                            $margin={"0 8px;"}
                            onClick={handleChangeDirectionClick}
                        ></Icon>
                        <CustomDebouncedDropdownInput
                            callback={handleChangeCityInput}
                            debounceTime={500}
                            options={Array.isArray(cities) ? cities : []}
                            placeholder="Откуда..."
                            $icon={geo}
                            action={cityOut}
                            defaultValue={cityOutValue}
                        ></CustomDebouncedDropdownInput>
                    </InputsPlace>
                </InputsRow>
                <InputsRow>
                    <InputsLabel>Дата</InputsLabel>
                    <InputsDate $rightDirection={rightDirection}>
                        <CustomDatePickInput 
                        type="text" 
                        $icon={calendar}
                        placeholder="ДД/ММ/ГГ"
                        ></CustomDatePickInput>
                        <CustomDatePickInput 
                        type="text" 
                        $icon={calendar}
                        placeholder="ДД/ММ/ГГ"
                        ></CustomDatePickInput>
                    </InputsDate>
                </InputsRow>
            </Inputs>
            <FindTicketsButton onClick={handleFindTicketsClick}>Найти билеты</FindTicketsButton>
        </TicketFilterForm>
    );
}
import { SyntheticEvent, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// store
import { useGetCityByNameQuery } from '/src/store/services/city.ts'
import { useSelector } from 'react-redux';
import { from_city as from_city_action, to_city as to_city_action, date_start as date_start_action, date_end as date_end_action} from '/src/store/slices/filterSlice.ts';

// UI
import geo from '/src/assets/svg/footer_contacts/geo.svg';
import change_place from '/src/assets/png/change_place.png';
import calendar from '/src/assets/svg/icons/calendar.svg';
import { Icon } from '../../Icons/Icon';
import { CustomDebouncedDropdownInput } from '../../Inputs/CustomDebouncedDropdownInput';
import { CustomDatePickInput } from '../../Inputs/CustomDatePickInput';
import { Inputs, InputsDate, InputsLabel, InputsPlace, TicketFilterFormTemplate, FindTicketsButton, InputsRow } from './TicketFilterFormStyledElements';
import { format, startOfDay } from "date-fns";

type TicketFilterFormProps = {
    variant: string,
}

export const TicketFilterForm = ({ variant }: TicketFilterFormProps): React.JSX.Element => {
    const [cityName, setCityName] = useState<string | null>(null);
    const [rightDirection, setRightDirection] = useState<boolean>(true);

    const { data: cities, error, isLoading } = useGetCityByNameQuery(cityName);
    const { from_city, to_city, date_start, date_end } = useSelector(state => {
        return (state.filter);
    });

    const location = useLocation();
    const navigate = useNavigate();

    const handleCityInputChange = (e: React.FormEvent<HTMLInputElement>): void => {
        setCityName(e.target.value);
    }

    const handleChangeDirectionClick = (e: SyntheticEvent): void => {
        setRightDirection(prev => !prev);
    }

    const handleFindTicketsClick = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (location.pathname === "/") {
            setTimeout(() => navigate("/orderticket/tickets/"), 0);
        }
    }

    return (
        <TicketFilterFormTemplate $variant={variant}>
            <Inputs $variant={variant}>
                <InputsRow>
                    <InputsLabel>Направление</InputsLabel>
                    <InputsPlace>
                        <CustomDebouncedDropdownInput
                            callback={handleCityInputChange}
                            debounceTime={500}
                            options={Array.isArray(cities) ? cities : []}
                            placeholder="Куда..."
                            $icon={geo}
                            action={to_city_action}
                            defaultValue={to_city.name}
                        ></CustomDebouncedDropdownInput>
                        <Icon
                            $srcImg={change_place}
                            $width={24}
                            $height={24}
                            $margin={"0 8px;"}
                            onClick={handleChangeDirectionClick}
                        ></Icon>
                        <CustomDebouncedDropdownInput
                            callback={handleCityInputChange}
                            debounceTime={500}
                            options={Array.isArray(cities) ? cities : []}
                            placeholder="Откуда..."
                            $icon={geo}
                            action={from_city_action}
                            defaultValue={from_city.name}
                        ></CustomDebouncedDropdownInput>


                    </InputsPlace>
                </InputsRow>
                <InputsRow>
                    <InputsLabel>Дата</InputsLabel>
                    <InputsDate>
                        <CustomDatePickInput 
                        defaultDate={+(startOfDay(new Date(date_start)))}
                        action={date_start_action}
                        ></CustomDatePickInput>
                        <CustomDatePickInput 
                        defaultDate={+(startOfDay(new Date(date_end)))}
                        action={date_end_action}
                        ></CustomDatePickInput>
                    </InputsDate>
                </InputsRow>
            </Inputs>
            <FindTicketsButton onClick={handleFindTicketsClick}>Найти билеты</FindTicketsButton>
        </TicketFilterFormTemplate>
    );
}
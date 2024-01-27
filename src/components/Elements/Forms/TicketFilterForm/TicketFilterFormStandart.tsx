import { SyntheticEvent, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// store
import { useGetCityByNameQuery } from '/src/store/services/city.ts'

// UI
import geo from '/src/assets/svg/footer_contacts/geo.svg';
import change_place from '/src/assets/png/change_place.png';
import { Icon } from '../../Icons/Icon';
import { CustomDebouncedDropdownInput } from '../../Inputs/CustomDebouncedDropdownInput';
import { CustomStyledInput } from '../../Inputs/CustomStyledInput';
import { Inputs, InputsDate, InputsLabel, InputsPlace, TicketFilterForm, FindTicketsButton, InputsRow } from './TicketFilterFormStyledElements';

export const TicketFilterFormStandart = () => {
    const [name, setName] = useState<string | null>(null);
    const [rightDirection, setRightDirection] = useState<boolean>(true);
    const { data: cities, error, isLoading } = useGetCityByNameQuery(name);
    const location = useLocation();
    const navigate = useNavigate();

    const handleChangeCityInput = (e: React.FormEvent<HTMLInputElement>): void => {
        setName(e.target?.value);
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
                        ></CustomDebouncedDropdownInput>
                    </InputsPlace>
                </InputsRow>
                <InputsRow>
                    <InputsLabel>Дата</InputsLabel>
                    <InputsDate $rightDirection={rightDirection}>
                        <CustomStyledInput type="date"></CustomStyledInput>
                        <CustomStyledInput type="date"></CustomStyledInput>
                    </InputsDate>
                </InputsRow>
            </Inputs>
            <FindTicketsButton onClick={handleFindTicketsClick}>Найти билеты</FindTicketsButton>
        </TicketFilterForm>
    );
}
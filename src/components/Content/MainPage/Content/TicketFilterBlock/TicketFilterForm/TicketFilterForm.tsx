import { useGetCityByNameQuery } from '/src/store/services/city.ts'
import styled from 'styled-components';
import { useState } from 'react';
import CustomDebouncedInput from '/src/components/Elements/CustomDebouncedInput.tsx';
import change_place from '/src/assets/png/change_place.png';
import { Icon } from '../../../../../Elements/Icons/Icon';

const TicketFilterForm = styled('form')`
    width: 574px;
    height: calc(100vh - 43vh + .5rem);
    background-color: rgba(41, 41, 41, .8);
`

export default () => {
    const [name, setName] = useState<string | null>(null);
    const { data, error, isLoading } = useGetCityByNameQuery(name);

    const handleChangeCityInput = (e: React.FormEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    return(
        <TicketFilterForm>
            <CustomDebouncedInput 
                callback={handleChangeCityInput}
                debounceTime={500}
                listId="city_from"
                options={Array.isArray(data) ? data : []}
            ></CustomDebouncedInput>
            <Icon $srcImg={change_place}></Icon>
            <CustomDebouncedInput 
                callback={handleChangeCityInput}
                debounceTime={500}
                listId="city_to"
                options={Array.isArray(data) ? data : []}
            ></CustomDebouncedInput>
        </TicketFilterForm>
    );
}
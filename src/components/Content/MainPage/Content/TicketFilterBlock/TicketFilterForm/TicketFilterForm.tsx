import { useGetCityByNameQuery } from '/src/store/services/city.ts'
import { useState } from 'react';
import { CustomDebouncedDropdownInput } from '/src/components/Elements/Inputs/CustomDebouncedDropdownInput.tsx';
import change_place from '/src/assets/png/change_place.png';
import { Icon } from '../../../../../Elements/Icons/Icon';
import { Inputs, InputsLabel, InputsPlace, TicketFilterForm } from './TicketFilterFormStyledElements';

export default () => {
    const [name, setName] = useState<string | null>(null);
    const { data: cities, error, isLoading } = useGetCityByNameQuery(name);

    const handleChangeCityInput = (e: React.FormEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    return(
        <TicketFilterForm>
            <Inputs>
                <InputsLabel>Направление</InputsLabel>
                <InputsPlace>
                    <CustomDebouncedDropdownInput 
                        callback={handleChangeCityInput}
                        debounceTime={500}
                        listId="city_from"
                        options={Array.isArray(cities) ? cities : []}
                    ></CustomDebouncedDropdownInput>
                    <Icon 
                        $srcImg={change_place} 
                        $width={24}
                        $height={24}
                        ></Icon>
                    <CustomDebouncedDropdownInput 
                        callback={handleChangeCityInput}
                        debounceTime={500}
                        listId="city_to"
                        options={Array.isArray(cities) ? cities : []}
                    ></CustomDebouncedDropdownInput>
                </InputsPlace>
                <InputsLabel>Дата</InputsLabel>
            </Inputs>
        </TicketFilterForm>
    );
}
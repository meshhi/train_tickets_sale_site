import { SyntheticEvent, useCallback, useEffect, useState } from "react";
import { useGetCityByNameQuery } from "../../../../store/services/city";
import geo from '/src/assets/svg/footer_contacts/geo.svg';
import { StyledInput } from "../../../Elements/Inputs/StyledInput";
import { Container, InputWrapper, StyledDatalist, StyledInputAutocomplete, StyledInputMain, StyledOption } from "./StyledComponents";
import { useFormContext } from "react-hook-form";
import { Spinner } from "../../../Elements/Loaders/Spinner";
import { debounce } from "lodash";
import { CityType } from "../../../../store/services/types/api_types";
import { useController } from "react-hook-form";

interface Props extends React.PropsWithChildren {
    name: string;
}

export const CityInput: React.FC<Props> = ({ name }) => {
    const [cityQuery, setCityQuery] = useState<string>("");
    const { data, error, isLoading } = useGetCityByNameQuery(cityQuery);
    const { register, handleSubmit, trigger, getValues, setValue, control } = useFormContext()
    const [cities, setCities] = useState<CityType[]>([]);
    const [isOpened, setOpened] = useState<boolean>(false);
    const [suitableOption, setSuitableOption] = useState<CityType>();
    const [chosenCity, setChosenCity] = useState<CityType>();

    const { field } = useController({
        control,
        name
      });

    const handleInputChange = useCallback(debounce((e) => {
        setCityQuery(e.target.value);
    }, 500), []);

    const handleInputKeyDown = (e: SyntheticEvent) => {
        if (e.key === "Tab" && suitableOption) {
            setChosenCity(suitableOption);
        }
    }

    const handleOptionClick = (e: SyntheticEvent, option: CityType) => {
        setSuitableOption(option);
        setOpened(false);
    }

    useEffect(() => {
        try {
            setCities(Array.from(data));
        } catch(e) {
            console.log("CityInput: can`t transform data to array")
            setCities([]);
        }
    }, [data])

    useEffect(() => {
        if (cities.length) {
            setOpened(true)
            setSuitableOption(cities[0])
        } else {
            setOpened(false)
        };
    }, [cities])

    return (
        <Container>
            <InputWrapper>
                <StyledInputAutocomplete
                    type="text"
                    $icon={geo}
                    defaultValue={suitableOption?.name}
                />


        

                <StyledInputMain
                    type="text"
                    {...register(name, {
                        required: true,
                        onChange: handleInputChange,
                    })}
                    $icon={geo}
                    onKeyDown={handleInputKeyDown}
                />
            </InputWrapper>
            <StyledDatalist
                $isOpened={isOpened}
            >
                {cities.map(option =>
                    <StyledOption
                        key={option._id}
                        onClick={(e) => handleOptionClick(e, option)}
                        onMouseEnter={(e) => setSuitableOption(option)}
                        // onMouseLeave={(e) => setSuitableOption({_id: null, name: null})}
                    >{option.name}
                    </StyledOption>)}
            </StyledDatalist>
        </Container>

    )
}
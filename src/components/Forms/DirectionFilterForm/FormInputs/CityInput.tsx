import { SyntheticEvent, useCallback, useEffect, useState } from "react";
import { useGetCityByNameQuery } from "../../../../store/services/city";
import geo from '/src/assets/svg/footer_contacts/geo.svg';
import { Container, InputWrapper, StyledDatalist, StyledInputAutocomplete, StyledInputMain, StyledOption } from "./StyledComponents";
import { useFormContext } from "react-hook-form";
import { debounce } from "lodash";
import { CityType } from "../../../../store/services/types/api_types";
import { Controller } from "react-hook-form";

interface Props extends React.PropsWithChildren {
    name: string,
    onSubmit: any
}

export const CityInput: React.FC<Props> = ({ name, onSubmit }) => {
    const [cityQuery, setCityQuery] = useState<string>("");
    const { data, error, isLoading } = useGetCityByNameQuery(cityQuery);
    const { register, handleSubmit, setValue, control } = useFormContext()
    const [cities, setCities] = useState<CityType[]>([]);
    const [isOpened, setOpened] = useState<boolean>(false);
    const [suitableOption, setSuitableOption] = useState<CityType | null>();
    const [chosenCity, setChosenCity] = useState<CityType | null>();

    const handleInputChange = useCallback(debounce((e) => {
        setCityQuery(e.target.value);
        setChosenCity({
            _id: undefined,
            name: e.target.value
        });
    }, 500), []);

    const handleInputKeyDown = (e: SyntheticEvent) => {
        console.log(e.keyCode)
        if (e.keyCode === 9) {e.preventDefault()}
        if (e.keyCode === 9 && suitableOption) {
            setChosenCity(suitableOption);
            setValue(name, suitableOption.name);
            setOpened(false);
        }
    }

    const handleOptionClick = (e: SyntheticEvent, option: CityType) => {
        setSuitableOption(option);
        setChosenCity(option);
        setValue(name, option.name);
        setOpened(false);
    }

    useEffect(() => {
        try {
            setCities(Array.from(data));
        } catch (e) {
            setCities([]);
        }
    }, [data])

    useEffect(() => {
        if (cities.length) {
            setOpened(true)
            setSuitableOption(cities[0])
        } else {
            setOpened(false)
            setSuitableOption(null)
        }
    }, [cities])

    useEffect(() => {
        handleSubmit((data) => onSubmit(data, chosenCity, name))();
    }, [chosenCity])

    return (
        <Container>
            <InputWrapper className="input-wrapper">
                {/* <StyledInputAutocomplete
                    type="text"
                    $icon={geo}
                    defaultValue={suitableOption?.name}
                /> */}
                <StyledInputMain
                    type="text"
                    {...register(name, {
                        required: true,
                        onChange: handleInputChange,
                    })}
                    $icon={geo}
                    onKeyDown={handleInputKeyDown}
                    $hide={!!suitableOption}
                />

                {/* <Controller
                    name={name}
                    control={control}
                    default={""}
                    rules={{
                        required: true,
                        onChange: (e) => {
                            console.log(e.target.value);
                            handleInputChange(e);
                        },
                    }}
                    render={({ field: { onChange, value } }) => <StyledInputMain
                        className="fs"
                        type="text"
                        $icon={geo}
                        onKeyDown={handleInputKeyDown}
                        onChange={onChange}
                    // $hide={!!suitableOption}
                    />}
                ></Controller> */}

            </InputWrapper>
            <StyledDatalist
                $isOpened={isOpened}
            >
                {cities.map(option =>
                    <StyledOption
                        key={option._id}
                        onClick={(e) => handleOptionClick(e, option)}
                        onMouseEnter={(e) => setSuitableOption(option)}
                        onMouseLeave={(e) => setSuitableOption(null)}
                    >{option.name}
                    </StyledOption>)}
            </StyledDatalist>
        </Container>
    )
}
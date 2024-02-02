import { useState } from "react";
import { useGetCityByNameQuery } from "../../../../store/services/city";
import geo from '/src/assets/svg/footer_contacts/geo.svg';
import { StyledInput } from "../../../Elements/Inputs/StyledInput";
import { Container, InputWrapper, StyledDatalist, StyledOption } from "./StyledComponents";
import { useFormContext } from "react-hook-form";

interface Props extends React.PropsWithChildren {
    name: string;
}

export const CityInput: React.FC<Props> = ({ name }) => {
    const [cityQuery, setCityQuery] = useState<string>("");
    const { register, handleSubmit, trigger } = useFormContext()
    const { data: cities, error, isLoading } = useGetCityByNameQuery(cityQuery);
    const options = [];

    const handleInputChange = (e) => {
        console.log(e.target.value);
        if (true) {
            trigger();
        }
    }

    return (
        <Container>
            <InputWrapper>
                <StyledInput
                    type="text"
                    {...register(name, {
                        required: true,
                        onChange: handleInputChange,
                    })}
                    $icon={geo}
                />
            </InputWrapper>
            <StyledDatalist
            // $opened={isDropdownOpen}
            >
                {options?.map(option =>
                    <StyledOption
                        key={option._id}
                    >{option.name}
                    </StyledOption>)}
            </StyledDatalist>

        </Container>

    )
}
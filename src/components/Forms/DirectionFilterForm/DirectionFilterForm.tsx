import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm, FormProvider } from "react-hook-form"

// UI

import change_place from '/src/assets/png/change_place.png';
import { Icon } from '../../Elements/Icons/Icon';
import { Inputs, InputsDate, InputsLabel, InputsPlace, DirectionFilterFormTemplate, FindTicketsButton, InputsRow } from './StyledComponents';
import { CityInput } from './FormInputs/CityInput';
import React from 'react';

interface Props extends React.PropsWithChildren {
    variant: string,
}

export const DirectionFilterForm : React.FC<Props> = ({ variant }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const methods = useForm({
        defaultValues: {
            to_city: "to",
            from_city: "from"
        },
        mode: "onBlur"
    })

    const onSubmit = (data) => {
        console.log("main submit");
        if (location.pathname === "/") {
            setTimeout(() => navigate("/order/directions/"), 0);
        }
    }

    return (
        <FormProvider {...methods}>
            <DirectionFilterFormTemplate
                onSubmit={methods.handleSubmit(onSubmit)}
                $variant={variant}>
                <Inputs $variant={variant}>
                    <InputsRow>
                        <InputsLabel>Направление</InputsLabel>
                        <InputsPlace>
                            <CityInput
                                name="to_city"
                            ></CityInput>
                            <Icon
                                $srcImg={change_place}
                                $width={24}
                                $height={24}
                                $margin={"0 8px;"}
                            ></Icon>
                            <CityInput
                                name="from_city"
                            ></CityInput>
                        </InputsPlace>
                    </InputsRow>
                    <InputsRow>
                        <InputsLabel>Дата</InputsLabel>
                        <InputsDate>

                        </InputsDate>
                    </InputsRow>
                </Inputs>
                <FindTicketsButton
                    type="submit"
                >Найти билеты</FindTicketsButton>
            </DirectionFilterFormTemplate>
        </FormProvider>
    )
}
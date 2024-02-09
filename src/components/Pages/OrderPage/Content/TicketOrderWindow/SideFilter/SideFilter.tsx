<<<<<<< HEAD:src/components/Pages/OrderPage/Content/TicketOrderWindow/SideFilter/SideFilter.tsx
import { Icon } from "../../../../../Elements/Icons/Icon"
import { DoubleRangeInput } from "../../../../../Elements/Inputs/DoubleRangeInput/DoubleRangeInput";
import { DatesBlock, DatesBlockDateInputWrapper, DatesBlockDateLabel, DatesBlockDateInput, FiltersBlock, FiltersItem, FilterItemIcon, FiltersItemText, FilterItemToggleButton, PriceBlock, PriceText, DirectionBlock, DirectionHeader, DirectionHeaderText, DirectionBody, SideFilterContainer } from "./StyledComponents"
import calendar from '/src/assets/svg/icons/calendar.svg';
=======
import { Icon } from "../../../../../Elements/Icons/Icon";
import { CustomDoubleRangeInput } from "../../../../../Elements/Inputs/CustomDoubleRangeInput";
import { DatesBlock, DatesBlockDateInputWrapper, DatesBlockDateLabel, DatesBlockDateInput, FiltersBlock, FiltersItem, FilterItemIcon, FiltersItemText, FilterItemToggleButton, PriceBlock, PriceText, DirectionBlock, DirectionHeader, DirectionHeaderText, DirectionBody, TicketIssueSideFilterContainer } from "./TicketIssueSideFilterStyledComponents";
>>>>>>> ubuntu:src/components/Content/OrderTicket/Content/TicketOrderWindow/SideFilter/TicketIssueSideFilter.tsx
import coupe from '/src/assets/svg/train_filters/coupe.svg';
import platzcart from '/src/assets/svg/train_filters/platzcart.svg';
import lux from '/src/assets/svg/train_filters/lux.svg';
import rocket from '/src/assets/svg/train_filters/rocket.svg';
import sit from '/src/assets/svg/train_filters/sit.svg';
import wifi from '/src/assets/svg/train_filters/wifi.svg';
import arrow_direction_to from '/src/assets/svg/train_filters/arrow_direction_to.svg';
import arrow_direction_out from '/src/assets/svg/train_filters/arrow_direction_out.svg';
import add from '/src/assets/svg/train_filters/add.svg';
import remove from '/src/assets/svg/train_filters/remove.svg';
import { DateValueFormatter } from "../../../../../utils/utils";
<<<<<<< HEAD:src/components/Pages/OrderPage/Content/TicketOrderWindow/SideFilter/SideFilter.tsx
import { useEffect, useState } from "react";
import { VARIANTS } from "../../../../../utils/utils";
=======
import { useState } from "react";
import { VARIANTS } from "/src/components/Elements/Inputs/CustomDatePickInput.tsx";
>>>>>>> ubuntu:src/components/Content/OrderTicket/Content/TicketOrderWindow/SideFilter/TicketIssueSideFilter.tsx
import { useSelector } from "react-redux";
import { 
    date_start as date_start_action, 
    date_end as date_end_action,
    date_start_arrival as date_start_arrival_action,
    date_end_arrival as date_end_arrival_action,
    have_first_class as have_first_class_action,
    have_second_class as have_second_class_action,
    have_third_class as have_third_class_action, 
    have_fourth_class as have_fourth_class_action,
    have_wifi as have_wifi_action, 
    have_air_conditioning as have_air_conditioning_action, 
    have_express as have_express_action,


} from '/src/store/slices/filterSlice.ts';
import { startOfDay } from "date-fns";

<<<<<<< HEAD:src/components/Pages/OrderPage/Content/TicketOrderWindow/SideFilter/SideFilter.tsx
export const SideFilter = () => {
=======

export const TicketIssueSideFilter = () => {
>>>>>>> ubuntu:src/components/Content/OrderTicket/Content/TicketOrderWindow/SideFilter/TicketIssueSideFilter.tsx
    const [isOpenTo, setOpenTo] = useState(false);
    const [isOpenOut, setOpenOut] = useState(false);
    const { 
        date_start, 
        date_end,
        date_start_arrival,
        date_end_arrival,
        have_first_class,
        have_second_class,
        have_third_class,
        have_fourth_class,
        have_wifi,
        have_air_conditioning,
        have_express
    } = useSelector(state => {
        return (state.filter);
    });

    const handleOpenToClick = () => {
        setOpenTo(prev => !prev);
    };

    const handleOpenOutClick = () => {
        setOpenOut(prev => !prev);
    };  

    return (<SideFilterContainer>
        <DatesBlock>
            <DatesBlockDateInputWrapper>
                <DatesBlockDateLabel>Дата поездки</DatesBlockDateLabel>
                <DatesBlockDateInput variant={VARIANTS.MEDIUM}
                    defaultDate={+(startOfDay(new Date(date_start)))}
                    action={date_start_action}
                ></DatesBlockDateInput>
            </DatesBlockDateInputWrapper>
            <DatesBlockDateInputWrapper>
                <DatesBlockDateLabel>Дата возвращения</DatesBlockDateLabel>
                <DatesBlockDateInput
                    variant={VARIANTS.MEDIUM}
                    defaultDate={+(startOfDay(new Date(date_end)))}
                    action={date_end_action}
                ></DatesBlockDateInput>
            </DatesBlockDateInputWrapper>
        </DatesBlock>
        <FiltersBlock>
            <FiltersItem>
                <FilterItemIcon $srcImg={coupe} $width={17} $height={17}></FilterItemIcon>
                <FiltersItemText>Купе</FiltersItemText>
                <FilterItemToggleButton
                    currentvalue={have_second_class}
                    action={have_second_class_action}
                ></FilterItemToggleButton>
            </FiltersItem>
            <FiltersItem>
                <FilterItemIcon $srcImg={platzcart} $width={17} $height={17}></FilterItemIcon>
                <FiltersItemText>Плацкарт</FiltersItemText>
                <FilterItemToggleButton
                    currentvalue={have_third_class}
                    action={have_third_class_action}
                ></FilterItemToggleButton>
            </FiltersItem>
            <FiltersItem>
                <FilterItemIcon $srcImg={sit} $width={17} $height={17}></FilterItemIcon>
                <FiltersItemText>Сидячий</FiltersItemText>
                <FilterItemToggleButton
                    currentvalue={have_fourth_class}
                    action={have_fourth_class_action}
                ></FilterItemToggleButton>
            </FiltersItem>
            <FiltersItem>
                <FilterItemIcon $srcImg={lux} $width={17} $height={17}></FilterItemIcon>
                <FiltersItemText>Люкс</FiltersItemText>
                <FilterItemToggleButton
                    currentvalue={have_first_class}
                    action={have_first_class_action}
                ></FilterItemToggleButton>
            </FiltersItem>
            <FiltersItem>
                <FilterItemIcon $srcImg={wifi} $width={17} $height={17}></FilterItemIcon>
                <FiltersItemText>Wi-Fi</FiltersItemText>
                <FilterItemToggleButton
                    currentvalue={have_wifi}
                    action={have_wifi_action}
                ></FilterItemToggleButton>
            </FiltersItem>
            <FiltersItem>
                <FilterItemIcon $srcImg={rocket} $width={17} $height={17}></FilterItemIcon>
                <FiltersItemText>Экспресс</FiltersItemText>
                <FilterItemToggleButton
                    currentvalue={have_express}
                    action={have_express_action}
                ></FilterItemToggleButton>
            </FiltersItem>
        </FiltersBlock>
        <PriceBlock>
            <PriceText>Стоимость</PriceText>
            <DoubleRangeInput minValue={7000} maxValue={140000} maxRangeSizeCoefficient={0.2} labels={{ min: "от", max: "до" }}></DoubleRangeInput>
        </PriceBlock>
        <DirectionBlock>
            <DirectionHeader>
                <Icon
                    $srcImg={arrow_direction_to}
                    $width={32}
                    $height={26}
                    $backgroundColor={"#FFA800"}
                ></Icon>
                <DirectionHeaderText>Туда</DirectionHeaderText>
                <Icon
                    $srcImg={!isOpenTo ? add : remove}
                    $width={20}
                    $height={20}
                    onClick={handleOpenToClick}
                ></Icon>
            </DirectionHeader>
            <DirectionBody $isOpen={isOpenTo}>
                <DoubleRangeInput
                    minValue={0} maxValue={24} maxRangeSizeCoefficient={Math.round(1 / 24)} valueFormatter={DateValueFormatter} $height={10}
                    mainLabel='Время отбытия'
                ></DoubleRangeInput>
                <DoubleRangeInput
                    minValue={0} maxValue={24} maxRangeSizeCoefficient={Math.round(1 / 24)} valueFormatter={DateValueFormatter} $height={10}
                    mainLabel='Время прибытия'
                    textAlign='end'
                ></DoubleRangeInput>
            </DirectionBody>
        </DirectionBlock>
        <DirectionBlock>
            <DirectionHeader>
                <Icon
                    $srcImg={arrow_direction_out}
                    $width={32}
                    $height={26}
                    $backgroundColor={"#FFA800"}
                ></Icon>
                <DirectionHeaderText>Обратно</DirectionHeaderText>
                <Icon
                    $srcImg={!isOpenOut ? add : remove}
                    $width={20}
                    $height={20}
                    onClick={() => { handleOpenOutClick(); console.log("Clicked"); }}
                ></Icon>
            </DirectionHeader>
            <DirectionBody $isOpen={isOpenOut}>
                <DoubleRangeInput
                    minValue={0} maxValue={24} maxRangeSizeCoefficient={Math.round(1 / 24)} valueFormatter={DateValueFormatter} $height={10}
                    mainLabel='Время отбытия'
                ></DoubleRangeInput>
                <DoubleRangeInput minValue={0} maxValue={24} maxRangeSizeCoefficient={Math.round(1 / 24)} valueFormatter={DateValueFormatter} $height={10}
                    mainLabel='Время прибытия'
                    textAlign='end'
                ></DoubleRangeInput>
            </DirectionBody>
        </DirectionBlock>
<<<<<<< HEAD:src/components/Pages/OrderPage/Content/TicketOrderWindow/SideFilter/SideFilter.tsx
    </SideFilterContainer>)
}
=======
    </TicketIssueSideFilterContainer>);
};
>>>>>>> ubuntu:src/components/Content/OrderTicket/Content/TicketOrderWindow/SideFilter/TicketIssueSideFilter.tsx

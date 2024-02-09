import { Icon } from "../../../../../Elements/Icons/Icon";
import { CustomDoubleRangeInput } from "../../../../../Elements/Inputs/CustomDoubleRangeInput";
import { DatesBlock, DatesBlockDateInputWrapper, DatesBlockDateLabel, DatesBlockDateInput, FiltersBlock, FiltersItem, FilterItemIcon, FiltersItemText, FilterItemToggleButton, PriceBlock, PriceText, DirectionBlock, DirectionHeader, DirectionHeaderText, DirectionBody, TicketIssueSideFilterContainer } from "./TicketIssueSideFilterStyledComponents";
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
import { useState } from "react";
import { VARIANTS } from "/src/components/Elements/Inputs/CustomDatePickInput.tsx";
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
    price_from as price_from_action,
    price_to as price_to_action,
    start_departure_hour_from as start_departure_hour_from_action,
    start_departure_hour_to as start_departure_hour_to_action,
    start_arrival_hour_from as start_arrival_hour_from_action,
    start_arrival_hour_to as start_arrival_hour_to_action,
    end_departure_hour_from as end_departure_hour_from_action,
    end_departure_hour_to as end_departure_hour_to_action,
    end_arrival_hour_from as end_arrival_hour_from_action,
    end_arrival_hour_to as end_arrival_hour_to_action,
    limit as limit_action,
    offset as offset_action,
    sort as sort_action,
} from '/src/store/slices/filterSlice.ts';
import { startOfDay } from "date-fns";


export const TicketIssueSideFilter = () => {
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
        have_express,
        price_from,
        price_to,
        start_departure_hour_from,
        start_departure_hour_to,
        start_arrival_hour_from,
        start_arrival_hour_to,
        end_departure_hour_from,
        end_departure_hour_to,
        end_arrival_hour_from,
        end_arrival_hour_to,
        limit,
        offset,
        sort,
    } = useSelector(state => {
        return (state.filter);
    });

    const handleOpenToClick = () => {
        setOpenTo(prev => !prev);
    };

    const handleOpenOutClick = () => {
        setOpenOut(prev => !prev);
    };  

    return (<TicketIssueSideFilterContainer>
        <DatesBlock>
            <DatesBlockDateInputWrapper>
                <DatesBlockDateLabel>Дата поездки</DatesBlockDateLabel>
                <DatesBlockDateInput variant={VARIANTS.MEDIUM}
                    defaultDate={date_start ? +(startOfDay(new Date(date_start))) + 86401 : +(startOfDay(new Date(date_start_arrival)))}
                    action={date_start_arrival_action}
                ></DatesBlockDateInput>
            </DatesBlockDateInputWrapper>
            <DatesBlockDateInputWrapper>
                <DatesBlockDateLabel>Дата возвращения</DatesBlockDateLabel>
                <DatesBlockDateInput
                    variant={VARIANTS.MEDIUM}
                    defaultDate={date_end ? +(startOfDay(new Date(date_end))) + 86401 : +(startOfDay(new Date(date_end_arrival)))}
                    action={date_end_arrival_action}
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
            <CustomDoubleRangeInput 
            minValue={7000} 
            maxValue={140000} 
            maxRangeSizeCoefficient={0.2} 
            labels={{ min: "от", max: "до" }}
            values={
                {
                    from: price_from,
                    to: price_to
                }
            }
            actions={
                {
                    from: price_from_action,
                    to: price_to_action
                }
            }
            ></CustomDoubleRangeInput>
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
                <CustomDoubleRangeInput
                    minValue={0} maxValue={24} maxRangeSizeCoefficient={Math.round(1 / 24)} valueFormatter={DateValueFormatter} $height={10}
                    mainLabel='Время отбытия'
                    values={
                        {
                            from: start_departure_hour_from,
                            to: start_departure_hour_to
                        }
                    }
                    actions={
                        {
                            from: start_departure_hour_from_action,
                            to: start_departure_hour_to_action
                        }
                    }
                ></CustomDoubleRangeInput>
                <CustomDoubleRangeInput
                    minValue={0} maxValue={24} maxRangeSizeCoefficient={Math.round(1 / 24)} valueFormatter={DateValueFormatter} $height={10}
                    mainLabel='Время прибытия'
                    textAlign='end'
                    values={
                        {
                            from: start_arrival_hour_from,
                            to: start_arrival_hour_to
                        }
                    }
                    actions={
                        {
                            from: start_arrival_hour_from_action,
                            to: start_arrival_hour_to_action
                        }
                    }
                ></CustomDoubleRangeInput>
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
                <CustomDoubleRangeInput
                    minValue={0} maxValue={24} maxRangeSizeCoefficient={Math.round(1 / 24)} valueFormatter={DateValueFormatter} $height={10}
                    mainLabel='Время отбытия'
                    values={
                        {
                            from: end_departure_hour_from,
                            to: end_departure_hour_to
                        }
                    }
                    actions={
                        {
                            from: end_departure_hour_from_action,
                            to: end_departure_hour_to_action
                        }
                    }
                ></CustomDoubleRangeInput>
                <CustomDoubleRangeInput minValue={0} maxValue={24} maxRangeSizeCoefficient={Math.round(1 / 24)} valueFormatter={DateValueFormatter} $height={10}
                    mainLabel='Время прибытия'
                    textAlign='end'
                    values={
                        {
                            from: end_arrival_hour_from,
                            to: end_arrival_hour_to
                        }
                    }
                    actions={
                        {
                            from: end_arrival_hour_from_action,
                            to: end_arrival_hour_to_action
                        }
                    }
                ></CustomDoubleRangeInput>
            </DirectionBody>
        </DirectionBlock>
    </TicketIssueSideFilterContainer>);
};

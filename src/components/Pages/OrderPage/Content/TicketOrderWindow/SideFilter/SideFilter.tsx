import { Icon } from "../../../../../Elements/Icons/Icon"
import { DoubleRangeInput } from "../../../../../Elements/Inputs/DoubleRangeInput/DoubleRangeInput";
import { DatesBlock, DatesBlockDateInputWrapper, DatesBlockDateLabel, DatesBlockDateInput, FiltersBlock, FiltersItem, FilterItemIcon, FiltersItemText, FilterItemToggleButton, PriceBlock, PriceText, DirectionBlock, DirectionHeader, DirectionHeaderText, DirectionBody, SideFilterContainer } from "./StyledComponents"
import calendar from '/src/assets/svg/icons/calendar.svg';
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
import { useEffect, useState } from "react";
import { VARIANTS } from "../../../../../utils/utils";
import { useSelector } from "react-redux";
import { from_city as from_city_action, to_city as to_city_action, date_start as date_start_action, date_end as date_end_action} from '/src/store/slices/filterSlice.ts';
import { startOfDay } from "date-fns";

export const SideFilter = () => {
    const [isOpenTo, setOpenTo] = useState(false);
    const [isOpenOut, setOpenOut] = useState(false);
    const { from_city, to_city, date_start, date_end } = useSelector(state => {
        return (state.filter);
    });

    const handleOpenToClick = () => {
        setOpenTo(prev => !prev);
    }

    const handleOpenOutClick = () => {
        setOpenOut(prev => !prev);
    }

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
                <FilterItemToggleButton></FilterItemToggleButton>
            </FiltersItem>
            <FiltersItem>
                <FilterItemIcon $srcImg={platzcart} $width={17} $height={17}></FilterItemIcon>
                <FiltersItemText>Плацкарт</FiltersItemText>
                <FilterItemToggleButton></FilterItemToggleButton>
            </FiltersItem>
            <FiltersItem>
                <FilterItemIcon $srcImg={sit} $width={17} $height={17}></FilterItemIcon>
                <FiltersItemText>Сидячий</FiltersItemText>
                <FilterItemToggleButton></FilterItemToggleButton>
            </FiltersItem>
            <FiltersItem>
                <FilterItemIcon $srcImg={lux} $width={17} $height={17}></FilterItemIcon>
                <FiltersItemText>Люкс</FiltersItemText>
                <FilterItemToggleButton></FilterItemToggleButton>
            </FiltersItem>
            <FiltersItem>
                <FilterItemIcon $srcImg={wifi} $width={17} $height={17}></FilterItemIcon>
                <FiltersItemText>Wi-Fi</FiltersItemText>
                <FilterItemToggleButton></FilterItemToggleButton>
            </FiltersItem>
            <FiltersItem>
                <FilterItemIcon $srcImg={rocket} $width={17} $height={17}></FilterItemIcon>
                <FiltersItemText>Экспресс</FiltersItemText>
                <FilterItemToggleButton></FilterItemToggleButton>
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
                    onClick={() => {handleOpenOutClick(); console.log("Clicked")}}
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
    </SideFilterContainer>)
}

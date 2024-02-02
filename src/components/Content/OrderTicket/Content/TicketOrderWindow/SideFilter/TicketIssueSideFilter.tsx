import { Icon } from "../../../../../Elements/Icons/Icon"
import { CustomDoubleRangeInput } from "../../../../../Elements/Inputs/CustomDoubleRangeInput"
import { DatesBlock, DatesBlockDateInputWrapper, DatesBlockDateLabel, DatesBlockDateInput, FiltersBlock, FiltersItem, FilterItemIcon, FiltersItemText, FilterItemToggleButton, PriceBlock, PriceText, DirectionBlock, DirectionHeader, DirectionHeaderText, DirectionBody, TicketIssueSideFilterContainer } from "./TicketIssueSideFilterStyledComponents"
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
import { VARIANTS } from "/src/components/Elements/Inputs/CustomDatePickInput.tsx";

export const TicketIssueSideFilter = () => {
    const [isOpenTo, setOpenTo] = useState(false);
    const [isOpenOut, setOpenOut] = useState(false);

    const handleOpenToClick = () => {
        setOpenTo(prev => !prev);
    }

    const handleOpenOutClick = () => {
        setOpenOut(prev => !prev);
    }

    return (<TicketIssueSideFilterContainer>
        <DatesBlock>
            <DatesBlockDateInputWrapper>
                <DatesBlockDateLabel>Дата поездки</DatesBlockDateLabel>
                <DatesBlockDateInput variant={VARIANTS.MEDIUM}
                ></DatesBlockDateInput>
            </DatesBlockDateInputWrapper>
            <DatesBlockDateInputWrapper>
                <DatesBlockDateLabel>Дата возвращения</DatesBlockDateLabel>
                <DatesBlockDateInput variant={VARIANTS.MEDIUM}
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
            <CustomDoubleRangeInput minValue={7000} maxValue={140000} maxRangeSizeCoefficient={0.2} labels={{ min: "от", max: "до" }}></CustomDoubleRangeInput>
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
                ></CustomDoubleRangeInput>
                <CustomDoubleRangeInput
                    minValue={0} maxValue={24} maxRangeSizeCoefficient={Math.round(1 / 24)} valueFormatter={DateValueFormatter} $height={10}
                    mainLabel='Время прибытия'
                    textAlign='end'
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
                    onClick={() => {handleOpenOutClick(); console.log("Clicked")}}
                ></Icon>
            </DirectionHeader>
            <DirectionBody $isOpen={isOpenOut}>
                <CustomDoubleRangeInput
                    minValue={0} maxValue={24} maxRangeSizeCoefficient={Math.round(1 / 24)} valueFormatter={DateValueFormatter} $height={10}
                    mainLabel='Время отбытия'
                ></CustomDoubleRangeInput>
                <CustomDoubleRangeInput minValue={0} maxValue={24} maxRangeSizeCoefficient={Math.round(1 / 24)} valueFormatter={DateValueFormatter} $height={10}
                    mainLabel='Время прибытия'
                    textAlign='end'
                ></CustomDoubleRangeInput>
            </DirectionBody>
        </DirectionBlock>
    </TicketIssueSideFilterContainer>)
}

import styled from 'styled-components'
import { Outlet } from 'react-router-dom'
import { ProgressBar } from './ProgressBar/ProgressBar'
import { CustomDatePickInput } from '../../../../Elements/Inputs/CustomDatePickInput'
import { Icon } from '../../../../Elements/Icons/Icon';

import calendar from '/src/assets/svg/icons/calendar.svg';
import coupe from '/src/assets/svg/train_filters/coupe.svg';
import platzcart from '/src/assets/svg/train_filters/platzcart.svg';
import lux from '/src/assets/svg/train_filters/lux.svg';
import rocket from '/src/assets/svg/train_filters/rocket.svg';
import sit from '/src/assets/svg/train_filters/sit.svg';
import wifi from '/src/assets/svg/train_filters/wifi.svg';
import arrow_direction from '/src/assets/svg/train_filters/arrow_direction.svg';
import add from '/src/assets/svg/train_filters/add.svg';

import { CustomToggleButton } from '../../../../Elements/Buttons/CustomToggleButton';
import { CustomDoubleRangeInput } from '../../../../Elements/Inputs/CustomDoubleRangeInput';
import { useState } from 'react';

const TicketOrderWindowContainer = styled.section`
    width: 100%;
    min-height: 100vh;
    background-color: var(--smooth-grey-inactive);
`

const TicketIssueWindow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 95px 271px 193px;
  gap: 85px;
`

const TicketIssueWindowSidebar = styled.div`
  max-width: 360px;
  display: flex;
  flex-direction: column;
`

const TicketIssueSideFilter = styled.form`
  width: 360px;
  min-height: 1012px;
  background-color: var(--smooth-black-2);
`
const DatesBlock = styled.div`
  width: 100%;
  height: 280px;
  padding: 50px 36px 33px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-bottom: 1px solid var(--smooth-grey);
`

const DatesBlockDateInputWrapper = styled.div`
`

const DatesBlockDateLabel = styled.h3`
  color: white;
  font-family: Roboto;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 8px;
`

const DatesBlockDateInput = styled(CustomDatePickInput)`
  width: 100%;
  height: 43px;
`

const FiltersBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 37px;
  justify-content: center;
  align-items: center;
  min-height: 352px;
  border-bottom: 1px solid var(--smooth-grey);
  padding-block: 34px;
`

const FiltersItem = styled.div`
  display: flex;
  align-items: center;
  gap: 35px;
  width: 72%;
  justify-content: space-between;
`

const FiltersItemText = styled.div`
  color: #FFF;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  flex-basis: 200px;
`

const FilterItemIcon = styled(Icon)`
  min-width: 17px;
`

const FilterItemToggleButton = styled(CustomToggleButton)`

`

const PriceBlock = styled.div`
  min-height: 181px;
  width: 100%;
  padding: 42px 33px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 21px;
  border-bottom: 1px solid var(--smooth-grey);
`

const PriceText = styled.h2`
  color: #FFF;
  font-family: Roboto;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

const TicketIssueLastTickets = styled.form`

`

const TicketIssueWindowContent = styled.div`
  min-width: 962px;
`


const DirectionBlock = styled.div`
  min-height: 96px;
  padding: 30px;
  border-bottom: 1px solid var(--smooth-grey);
`

const DirectionHeader = styled.div`
  min-height: 96px;
  color: #FFF;
  font-family: Roboto;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`

const DirectionHeaderText = styled.span`
  flex: 1;
  text-align: start;
`

const DirectionBody = styled.div<{$isOpen?: boolean}>`
  height: ${props => props.$isOpen ? "auto" : 0};
  opacity: ${props => props.$isOpen ? 1 : 0};
`

const DateValueFormatter = (numberValue: number) => {
  return (`${numberValue}:00`)
}


const TicketOrderWindow = () => {

  const [isOpen, setOpen] = useState(false);

  const handleOpenClick = (e) => {
    setOpen(prev => !prev);
  }

  return (
    <TicketOrderWindowContainer>
      <ProgressBar></ProgressBar>
      <TicketIssueWindow>
        <TicketIssueWindowSidebar>
          <TicketIssueSideFilter>
            <DatesBlock>
              <DatesBlockDateInputWrapper>
                <DatesBlockDateLabel>Дата поездки</DatesBlockDateLabel>
                <DatesBlockDateInput
                  $icon={calendar}
                  $backgroundSize='20px 20px'
                  placeholder="ДД/ММ/ГГ"
                ></DatesBlockDateInput>
              </DatesBlockDateInputWrapper>
              <DatesBlockDateInputWrapper>
                <DatesBlockDateLabel>Дата возвращения</DatesBlockDateLabel>
                <DatesBlockDateInput
                  $icon={calendar}
                  $backgroundSize='20px 20px'
                  placeholder="ДД/ММ/ГГ"
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
              <CustomDoubleRangeInput minValue={54345} maxValue={5152324} maxRangeSizeCoefficient={0.2} labels={{ min: "от", max: "до" }}></CustomDoubleRangeInput>
            </PriceBlock>
            <DirectionBlock>
              <DirectionHeader>                  
                  <Icon
                  $srcImg={arrow_direction}
                  $width={32}
                  $height={26}
                  $backgroundColor={"#FFA800"}
                  ></Icon>
                    <DirectionHeaderText>Туда</DirectionHeaderText>
                  <Icon
                    $srcImg={add}
                    $width={20}
                    $height={20}
                    onClick={handleOpenClick}
                  ></Icon>
                </DirectionHeader>
              <DirectionBody $isOpen={isOpen}>
                <CustomDoubleRangeInput minValue={0} maxValue={24} maxRangeSizeCoefficient={Math.round(1 / 24)} valueFormatter={DateValueFormatter} $height={10}></CustomDoubleRangeInput>
                <CustomDoubleRangeInput minValue={0} maxValue={24} maxRangeSizeCoefficient={Math.round(1 / 24)} valueFormatter={DateValueFormatter} $height={10}></CustomDoubleRangeInput>
              </DirectionBody>
            </DirectionBlock>
            <DirectionBlock>
              <DirectionHeader>
                <Icon
                  $srcImg={arrow_direction}
                  $width={32}
                  $height={26}
                  $backgroundColor={"#FFA800"}
                ></Icon>
                <DirectionHeaderText>Обратно</DirectionHeaderText>
                <Icon
                  $srcImg={add}
                  $width={20}
                  $height={20}
                  onClick={handleOpenClick}
                ></Icon>
              </DirectionHeader>
              <DirectionBody $isOpen={isOpen}>
                <CustomDoubleRangeInput minValue={0} maxValue={24} maxRangeSizeCoefficient={Math.round(1 / 24)} valueFormatter={DateValueFormatter} $height={10}></CustomDoubleRangeInput>
                <CustomDoubleRangeInput minValue={0} maxValue={24} maxRangeSizeCoefficient={Math.round(1 / 24)} valueFormatter={DateValueFormatter} $height={10}></CustomDoubleRangeInput>
              </DirectionBody>
            </DirectionBlock>
          </TicketIssueSideFilter>
          <TicketIssueLastTickets></TicketIssueLastTickets>
        </TicketIssueWindowSidebar>
        <TicketIssueWindowContent>
          <Outlet></Outlet>
        </TicketIssueWindowContent>
      </TicketIssueWindow>
    </TicketOrderWindowContainer>
  )
}

export default TicketOrderWindow
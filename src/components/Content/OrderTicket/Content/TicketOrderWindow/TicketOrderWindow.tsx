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
import { CustomToggleButton } from '../../../../Elements/Buttons/CustomToggleButton';

const TicketOrderWindowContainer = styled.section`
    width: 100%;
    min-height: 100vh;
    background-color: var(--smooth-grey-inactive);
`

const TicketIssueWindow = styled.div`
  display: flex;
  justify-content: center;
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
  height: 1012px;
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
`

const FiltersItem = styled.div`
  display: flex;
  align-items: center;
  width: 72%;

`

const FiltersItemText = styled.div`
  color: #FFF;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: 34px;
  margin-right: 95px;
`

const TicketIssueLastTickets = styled.form`

`

const TicketIssueWindowContent = styled.div`
  min-width: 962px;
`

const TicketOrderWindow = () => {
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
                  <Icon $srcImg={coupe} $width={17} $height={17}></Icon>
                  <FiltersItemText>Купе</FiltersItemText>
                  <CustomToggleButton></CustomToggleButton>
                </FiltersItem>
                <FiltersItem>
                  <Icon $srcImg={platzcart} $width={17} $height={17}></Icon>
                  <FiltersItemText>Плацкарт</FiltersItemText>
                  <CustomToggleButton></CustomToggleButton>
                </FiltersItem>
                <FiltersItem>
                  <Icon $srcImg={sit} $width={17} $height={17}></Icon>
                  <FiltersItemText>Сидячий</FiltersItemText>
                  <CustomToggleButton></CustomToggleButton>
                </FiltersItem>
                <FiltersItem>
                  <Icon $srcImg={lux} $width={17} $height={17}></Icon>
                  <FiltersItemText>Люкс</FiltersItemText>
                  <CustomToggleButton></CustomToggleButton>
                </FiltersItem>
                <FiltersItem>
                  <Icon $srcImg={wifi} $width={17} $height={17}></Icon>
                  <FiltersItemText>Wi-Fi</FiltersItemText>
                  <CustomToggleButton></CustomToggleButton>
                </FiltersItem>
                <FiltersItem>
                  <Icon $srcImg={rocket} $width={17} $height={17}></Icon>
                  <FiltersItemText>Экспресс</FiltersItemText>
                  <CustomToggleButton></CustomToggleButton>
                </FiltersItem>
              </FiltersBlock>
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
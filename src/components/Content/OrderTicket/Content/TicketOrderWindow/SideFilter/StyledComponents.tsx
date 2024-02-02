import styled from "styled-components"
import { DatePickInput } from "../../../../../Elements/Inputs/DatePickInput"
import { Icon } from "../../../../../Elements/Icons/Icon"
import { ToggleButton } from "../../../../../Elements/Buttons/ToggleButton"

export const SideFilterContainer = styled.form`
  width: 360px;
  min-height: 1012px;
  background-color: var(--smooth-black-2);
`
export const DatesBlock = styled.div`
  width: 100%;
  height: 280px;
  padding: 50px 36px 33px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-bottom: 1px solid var(--smooth-grey);
`

export const DatesBlockDateInputWrapper = styled.div`
`

export const DatesBlockDateLabel = styled.h3`
  color: white;
  font-family: Roboto;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 8px;
`

export const DatesBlockDateInput = styled(DatePickInput)`
  width: 100%;
  height: 43px;
`

export const FiltersBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 37px;
  justify-content: center;
  align-items: center;
  min-height: 352px;
  border-bottom: 1px solid var(--smooth-grey);
  padding-block: 34px;
`

export const FiltersItem = styled.div`
  display: flex;
  align-items: center;
  gap: 35px;
  width: 72%;
  justify-content: space-between;
`

export const FiltersItemText = styled.div`
  color: #FFF;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  flex-basis: 200px;
`

export const FilterItemIcon = styled(Icon)`
  min-width: 17px;
`

export const FilterItemToggleButton = styled(ToggleButton)`

`

export const PriceBlock = styled.div`
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

export const PriceText = styled.h2`
  color: #FFF;
  font-family: Roboto;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

export const DirectionBlock = styled.div`
  min-height: 96px;
  padding: 30px;
  border-bottom: 1px solid var(--smooth-grey);
`

export const DirectionHeader = styled.div`
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

export const DirectionHeaderText = styled.span`
  flex: 1;
  text-align: start;
`

export const DirectionBody = styled.div<{$isOpen?: boolean}>`
  height: ${props => props.$isOpen ? "auto" : 0};
  opacity: ${props => props.$isOpen ? 1 : 0};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  overflow: ${props => props.$isOpen ? "visible" : "hidden"};;
`
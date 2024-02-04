import styled from "styled-components";
import { StyledInput } from "../../../Elements/Inputs/StyledInput";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  color: white;
`

export const InputWrapper = styled.div`
  position: relative;
  width: 325px;
  height: 60px;
  padding: 19px 73px 11px 21px;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400; 
  line-height: normal;
  line-height: 10px;
`

export const StyledDatalist = styled.datalist<{$isOpened?: boolean}>`
  display: ${props => props.$isOpened ? "flex" : "none"};
  flex-direction: column;
  width: 100%;
  position: absolute;
  z-index: 99999;
  padding: 14px 22px 15px 28px;
  top: 60px;
  left: 0;
  right: 0;
  font-family: sans-serif;
  border-radius: 3px;
  background: var(--smooth-white);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25); 
`;

export const StyledOption = styled.option`
  width: 100%;
  height: 23px;
  color: var(--black);
  text-transform: uppercase;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  font-variant: all-small-caps; 
  cursor: pointer;
  &:hover, &.active {
    background-color: var(--smooth-grey);
  }
`;

export const StyledInputAutocomplete = styled(StyledInput)`
  position: absolute;
  pointer-events: none;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1;
  background-color: white;
  color: var(--smooth-black);
`

export const StyledInputMain = styled(StyledInput)<{$hide?: boolean}>`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 2;
  // background-color: transparent;
  // color: ${props => props.$hide ? "transparent" : "black"};
`
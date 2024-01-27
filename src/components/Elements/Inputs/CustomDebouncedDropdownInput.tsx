import React, { useCallback, useState, useEffect, useRef, MutableRefObject } from 'react'
import styled from 'styled-components'
import debounce from "lodash/debounce";
import { useDispatch } from 'react-redux';

const CustomContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`

const InputWrapper = styled.div`
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

const CustomStyledInput = styled.input<{$icon?: string, $placeholderValue?: string, $color?: boolean}>`
  width: 325px;
  height: 60px;
  padding: 19px 73px 11px 21px;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  line-height: 10px;
  background-image: url(${props => props.$icon});
  background-repeat: no-repeat;
  background-position: 95% center;
  text-transform: capitalize;
  
  color: ${props => props.$color ? "var(--black)" : "transparent"};
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: 999999;
  background-color: transparent;

  &:placeholder-shown {
    color: ${props => props.$placeholderValue ? "transparent" : "black"};
  }
`;

const CustomStyledInputPlaceholder = styled(CustomStyledInput)`
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  pointer-events: none;

  background-color: white;
  color: var(--smooth-grey-placeholder);
`

const StyledDatalist = styled.datalist<{$opened?: boolean}>`
  display: ${props => props.$opened ? "flex" : "none"};
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

const StyledOption = styled.option`
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

type CustomDebouncedDropdownInputProps = {
  callback?: (e: React.FormEvent<HTMLInputElement>) => void,
  debounceTime: number,
  options: {
    _id: string | number,
    name: string,
  }[],
  placeholder?: string,
  $icon?: string,
  value?: string,
  action?: any,
  defaultValue?: string,
}

export const CustomDebouncedDropdownInput =
  ({ callback, debounceTime, options, placeholder, $icon, action, defaultValue }: CustomDebouncedDropdownInputProps): React.JSX.Element => {
    const delayedInput = useCallback(debounce(callback, debounceTime), []);
    const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);
    const [placeholderValue, setPlaceholderValue] = useState<string>("");

    const [isInputColor, setInputColor] = useState<boolean>(true);
    const inputRef = useRef<HTMLInputElement>(null) as MutableRefObject<HTMLInputElement>;

    const dispatch = useDispatch();

    useEffect(() => {
      if (options.length > 0 && inputRef.current === document.activeElement) {
        let suitableOption = options.find(option => option.name.startsWith(inputRef.current.value.toLowerCase()));
        setPlaceholderValue(suitableOption ? suitableOption.name : "");
        setDropdownOpen(true);
      } else {
        setPlaceholderValue("");
        setDropdownOpen(false);
      }
    }, [options])

    return (
      <CustomContainer>
        <InputWrapper>
          <CustomStyledInputPlaceholder defaultValue={placeholderValue}></CustomStyledInputPlaceholder>
          <CustomStyledInput
            type="text"
            onChange={(e) => {
              delayedInput(e);
              dispatch(action(e.target.value));
            }}
            $icon={$icon}
            ref={inputRef}
            placeholder={placeholder}
            $placeholderValue={placeholderValue}
            $color={isInputColor}
            defaultValue={defaultValue}
          />
        </InputWrapper>
        <StyledDatalist
          $opened={isDropdownOpen}
        >
          {options?.map(option =>
            <StyledOption
              key={option._id}
              onClick={(e) => {
                inputRef.current.value = e.currentTarget.value;
                dispatch(action(e.currentTarget.value));
                setDropdownOpen(false);
                setPlaceholderValue("");
              }}
              onMouseEnter={(e) => {
                setPlaceholderValue(e.currentTarget.value);
                setInputColor(false);
              }}
              onMouseLeave={() => setInputColor(true)}
            >{option.name}
            </StyledOption>)}
        </StyledDatalist>
      </CustomContainer>
    )
  }
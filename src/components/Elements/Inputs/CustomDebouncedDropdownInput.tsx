import React, { useCallback, useState, useEffect, useRef, MutableRefObject } from 'react'
import styled from 'styled-components'
import debounce from "lodash/debounce";
import { useDispatch } from 'react-redux';
import { CityType } from '../../../store/services/types/api_types';


const CustomContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  color: white;
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

const CustomStyledInput = styled.input<{$icon?: string, $placeholderColor?: string, $color?: boolean}>`
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
    color: ${props => props.$placeholderColor ? "transparent" : "black"};
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
  placeholder?: string,
  $icon?: string,
  callback?: (e: React.FormEvent<HTMLInputElement>) => void,
  debounceTime?: number,
  options: [{
    _id: string | number,
    name: string,
  }],
  action?: any,
  defaultValue: string,
  register: any, 
  name: any,
  onChangeProp: any
}

export const CustomDebouncedDropdownInput =
  ({ placeholder, $icon, callback, debounceTime, options,  action, defaultValue, register, name }: CustomDebouncedDropdownInputProps): React.JSX.Element => {
    const delayedInput = useCallback(debounce(callback, debounceTime), []);
    const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);
    const [placeholderValue, setPlaceholderValue] = useState<string>("");
    const [visibleInputValue, setVisibleInputValue] = useState<string>(defaultValue);
    const [suitableOption, setSuitableOption] = useState<{}>();
    const [isInputColor, setInputColor] = useState<boolean>(true);

    const inputRef = useRef<HTMLInputElement>(null) as MutableRefObject<HTMLInputElement>;

    const dispatch = useDispatch();

    const handleInputChange = (e) => {
      console.log('fafs')
      // setDropdownOpen(true);
      setSuitableOption(undefined);
      delayedInput(e);
      setVisibleInputValue(e.target.value);
    }


    const onKeyDown = (e) => {
      if (e.key === "Tab" && inputRef.current === document.activeElement) {
        e.preventDefault();
        if (suitableOption) {
          dispatch(action({
            suitableOption
          }));
          setVisibleInputValue(suitableOption?.name);
          setDropdownOpen(false);
        }
      }

      if (e.keyCode === 40 && inputRef.current === document.activeElement) {
        e.preventDefault();
        setVisibleInputValue(placeholderValue);
      }
    };

    useEffect(() => {
      if (options.length > 0 && inputRef.current === document.activeElement) {
        const validOption = options.find(option => option.name.startsWith(visibleInputValue.toLowerCase()));
        if (validOption) {
          setSuitableOption(validOption);
        } else {
          setSuitableOption(undefined);
        }
        setDropdownOpen(true);
      } else {
        setSuitableOption(undefined);
        setDropdownOpen(false);
      }
    }, [options])

    useEffect(() => {
      setPlaceholderValue(suitableOption ? suitableOption.name : "");
    }, [suitableOption])

    return (
      <CustomContainer>
        
        <InputWrapper>
          <CustomStyledInputPlaceholder defaultValue={placeholderValue}></CustomStyledInputPlaceholder>
          <CustomStyledInput
            ref={inputRef}
            type="text"
            placeholder={placeholder}
            $icon={$icon}
            $color={isInputColor}
            value={visibleInputValue}
            // onChange={(e) => {
            //   setSuitableOption(undefined);
            //   delayedInput(e);
            //   setVisibleInputValue(e.target.value);
            // }}
            {...register(name, { 
              required: true,
              onChange: handleInputChange
            })}
            onKeyDown={onKeyDown}
            
          />
        </InputWrapper>
        <StyledDatalist
          $opened={isDropdownOpen}
        >
          {options?.map(option =>
            <StyledOption
              key={option._id}
              onClick={() => {
                setVisibleInputValue(option.name);
                dispatch(action({
                  _id: option._id,
                  name: option.name,
                }));
                setDropdownOpen(false);
                setSuitableOption(undefined);
              }}
              onMouseEnter={() => {
                setSuitableOption(option);
                setInputColor(false);
              }}
              onMouseLeave={() => setInputColor(true)}
            >{option.name}
            </StyledOption>)}
        </StyledDatalist>
      </CustomContainer>
    )
  }
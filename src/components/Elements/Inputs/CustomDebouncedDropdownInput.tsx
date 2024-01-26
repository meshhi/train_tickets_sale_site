import React, { useCallback } from 'react'
import styled from 'styled-components'
import debounce from "lodash/debounce";
import { CustomStyledInput } from './CustomStyledInput'

const StyledDatalist = styled.datalist``;
const StyledOption = styled.option``;

type CustomDebouncedDropdownInputProps = {
  callback?: (e: React.FormEvent<HTMLInputElement>) => void,
  debounceTime: number,
  listId: string,
  options: {
    id: string | number,
    name: string,
  }[],
}

export const CustomDebouncedDropdownInput = ({callback, debounceTime, listId, options}: CustomDebouncedDropdownInputProps): React.JSX.Element => {
    const delayedInput = useCallback(debounce(callback, debounceTime),[]);

    return (
      <>
          <CustomStyledInput type="text" list={listId} onChange={delayedInput}/>
          <StyledDatalist id={listId}>
              {options?.map(option => <StyledOption key={option.id}>{option.name}</StyledOption>)}
          </StyledDatalist>
      </>
  )
}
import React, { useCallback } from 'react'
import styled from 'styled-components'
import debounce from "lodash/debounce";

const StyledInput = styled.input``;
const StyledDatalist = styled.datalist``;
const StyledOption = styled.option``;

type CustomDebouncedInputProps = {
  callback?: (e: React.FormEvent<HTMLInputElement>) => void,
  debounceTime: number,
  listId: string,
  options: {
    id: string | number,
    name: string,
  }[],
}

const CustomDebouncedInput = ({callback, debounceTime, listId, options}: CustomDebouncedInputProps): React.JSX.Element => {
    const delayedInput = useCallback(debounce(callback, debounceTime),[]);

    return (
      <>
          <StyledInput type="text" list={listId} onChange={delayedInput}/>
          <StyledDatalist id={listId}>
              {options?.map(option => <StyledOption key={option.id}>{option.name}</StyledOption>)}
          </StyledDatalist>
      </>
  )
}

export default CustomDebouncedInput;

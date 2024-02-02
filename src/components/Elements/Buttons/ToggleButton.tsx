import { useState } from "react";
import styled from "styled-components";

const ToggleButtonContainer = styled.div<{$active?: boolean}>`
  min-width: 72px;
  height: 37px;
  display: flex;
  align-items: center;
  position: relative;

  &:has(input:checked) {
    & .line {
      background-color: var(--smooth-yellow-2);
    }

    & .round {
      background-color: var(--orange);
      transform: translateX(140%);
    }
  }
`

const ToggleButtonInput = styled.input`
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 2;
  opacity: 0;
  cursor: pointer;
`

const ToggleButtonLine = styled.div`
  height: 21px;
  width: 100%;
  background-color: #fff;
  border-radius: 10px;
  position: absolute;
  z-index: 0;
  transition: all 0.2s ease-in-out;
`

const ToggleButtonRound = styled.div`
  min-width: 28px;
  min-height: 28px;
  border-radius: 50%;
  background-color: #C4C4C4;
  position: absolute;
  z-index: 1;
  left: 10px;
  transform: translateX(-50%);
  transition: all 0.2s ease-in-out;
`


export const ToggleButton = () => {

  const [isActive, setActive] = useState(false);

    return(
    <ToggleButtonContainer $active={isActive}>
        <ToggleButtonRound className="round" ></ToggleButtonRound>
        <ToggleButtonLine className="line"></ToggleButtonLine>
        <ToggleButtonInput type="checkbox" onClick={() => setActive(prev => !prev)}/>
    </ToggleButtonContainer>
  )
}
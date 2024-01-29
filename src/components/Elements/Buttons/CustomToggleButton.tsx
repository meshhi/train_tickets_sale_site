import styled from "styled-components";

const CustomToggleButtonContainer = styled.div`
  width: 71px;
  height: 31px;
`

const CustomToggleButtonLabel = styled.label`
  display: inline-block;
  height: 34px;
  position: relative;
  width: 60px;
`

const CustomToggleButtonInput = styled.input`
  display:none;
`

const CustomToggleButtonRound = styled.div`
  background-color: #ccc;
  bottom: 0;
  cursor: pointer;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: .4s;
  border-radius: 34px;

  &:before {
    border-radius: 50%;
    background-color: #fff;
    bottom: 4px;
    content: "";
    height: 26px;
    left: 4px;
    position: absolute;
    transition: .4s;
    width: 26px;
  }


  // &:has(~ input:checked) {
  //   &:before {
  //     background-color: #66bb6a;
  //   }
  // }

  // &:has(+ input:before) {
  //   transform: translateX(26px);
  // }
`


export const CustomToggleButton = () => {
    return(
    <CustomToggleButtonContainer>
        <CustomToggleButtonLabel htmlFor="checkbox">
          <CustomToggleButtonInput type="checkbox" id="checkbox" onClick={(e) => {console.log(e.target.checked)}}/>
          <CustomToggleButtonRound className="round"></CustomToggleButtonRound>
        </CustomToggleButtonLabel>
    </CustomToggleButtonContainer>
  )
}
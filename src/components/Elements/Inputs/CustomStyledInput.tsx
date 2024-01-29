import styled from 'styled-components'

export const CustomStyledInput = styled.input<{$icon?: string, $backgroundSize?: string}>`
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
  background-size: ${props => props.$backgroundSize ? props.$backgroundSize : "30px 30px"};
  text-transform: capitalize;
  color: var(--black);
  border-radius: 3px;
  outline: none;
  border: 0px;
`;
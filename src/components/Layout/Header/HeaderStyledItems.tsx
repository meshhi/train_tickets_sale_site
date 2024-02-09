import styled from "styled-components";

export const HeaderContainer = styled.div<{ $scrolled?: boolean; }>`
  position: fixed;
  z-index: 9999999;
  width: 100%;
  height: 158px;
  top: ${props => props.$scrolled ? "-64px" : "0px"};
  transition: top .3s linear, opacity .5s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--main-color);
`

export const HeaderMenuContainer = styled('div')`
  width: 100%;
  height: 158px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: var(--black);
  color: var(--main-color);
`

export const HeaderMenu = styled('ul')`
  display: flex;
  flex-direction: row;
  width: 60%;
  gap: 83px;
  margin: 0 259px;

`
export const HeaderMenuItem = styled('li')`
  color: var(--main-color);
  font-family: Roboto;
  font-size: 30px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  cursor: pointer;
  transition: all 0.2s ease-in;
  &:hover {
    color: var(--orange);
  }
`

export const HeaderLogo = styled('div')`
  color: var(--smooth-grey);
  font-family: Roboto;
  font-size: 36px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  min-height: 64px;
  background: rgba(0, 0, 0, 0.60);
  display: flex;
  align-items: center;
  padding-left: 259px;
  width: 100%;
`
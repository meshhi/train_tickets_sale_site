import React, { useEffect, useState } from "react";
import styled from 'styled-components'

const HeaderContainer = styled('div')`
position: fixed;
z-index: 99999;
width: 100%;
height: 158px;
top: ${props => (props.scrolled ? "-64px" : "0px")};
transition: top .3s linear;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: #fff;
`

const HeaderMenuContainer = styled('div')`
width: 100%;
height: 158px;
display: flex;
justify-content: flex-start;
align-items: center;
background-color: #292929;
color: #fff;
`

const HeaderMenu = styled('ul')`
display: flex;
flex-direction: row;
width: 60%;
gap: 83px;
margin: 0 259px;

`
const HeaderMenuItem = styled('li')`
color: #FFF;
font-family: Roboto;
font-size: 30px;
font-style: normal;
font-weight: 300;
line-height: normal;
cursor: pointer;
transition: all 0.2s ease-in;
&:hover {
  color: orange;
}
`

const HeaderLogo = styled('div')`
color: #E5E5E5;
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


const Header = () => {

  const [scrolled, setScrolled] = useState(false);

  const scrollHandler = () => {
    setScrolled(window.scrollY > 10);
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", scrollHandler);
    }
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <HeaderContainer scrolled={scrolled}>
      <HeaderLogo>Лого</HeaderLogo>
      <HeaderMenuContainer>
        <HeaderMenu>
          <HeaderMenuItem>О нас</HeaderMenuItem>
          <HeaderMenuItem>Как это работает</HeaderMenuItem>
          <HeaderMenuItem>Отзывы</HeaderMenuItem>
          <HeaderMenuItem>Контакты</HeaderMenuItem>
        </HeaderMenu>
      </HeaderMenuContainer>
    </HeaderContainer>
  )
}

export default Header
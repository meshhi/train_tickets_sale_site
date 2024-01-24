import React, { useEffect, useState } from "react";
import styled from 'styled-components'

const HeaderContainer = styled('div')`
position: fixed;
z-index: 99999;
width: 100%;
height: 94px;
top: ${props => (props.scrolled ? "0px" : "64px")};
transition: top .3s linear;
display: flex;
justify-content: center;
align-items: center;
background-color: #292929;
color: #fff;
`

const HeaderMenu = styled('ul')`
display: flex;
flex-direction: row;
width: 60%;
gap: 1rem;
`

const HeaderMenuItem = styled('li')`
list-style-type: none;
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
      <HeaderMenu>
        <HeaderMenuItem>О нас</HeaderMenuItem>
        <HeaderMenuItem>Как это работает</HeaderMenuItem>
        <HeaderMenuItem>Отзывы</HeaderMenuItem>
        <HeaderMenuItem>Контакты</HeaderMenuItem>
      </HeaderMenu>
    </HeaderContainer>
  )
}

export default Header
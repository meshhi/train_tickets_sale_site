import { useEffect, useState } from "react";
import { HeaderContainer, HeaderLogo, HeaderMenuContainer, HeaderMenu, HeaderMenuItem } from "./HeaderStyledItems";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const Header = () => {

  const [scrolled, setScrolled] = useState<boolean>(false);

  const scrollHandler = () => {
    setScrolled(window.scrollY > 10);
  }

  const location = useLocation();

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", scrollHandler);
    }
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <HeaderContainer $scrolled={scrolled}
    style={{
      "opacity": location.pathname !== "/" && scrolled ? "0" : "1"
    }}
    >
      <HeaderLogo>Лого</HeaderLogo>
      <HeaderMenuContainer>
        <HeaderMenu>
          <HeaderMenuItem><Link to="/#about">О нас</Link></HeaderMenuItem>
          <HeaderMenuItem><Link to="/#howitworks">Как это работает</Link></HeaderMenuItem>
          <HeaderMenuItem><Link to="/#reviews">Отзывы</Link></HeaderMenuItem>
          <HeaderMenuItem><Link to={location.pathname + "#contacts"}>Контакты</Link></HeaderMenuItem>
        </HeaderMenu>
      </HeaderMenuContainer>
    </HeaderContainer>
  )
}

export default Header
import { useEffect, useState } from "react";
import { HeaderContainer, HeaderLogo, HeaderMenuContainer, HeaderMenu, HeaderMenuItem } from "./HeaderStyledItems";


const Header = () => {

  const [scrolled, setScrolled] = useState<boolean>(false);

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
    <HeaderContainer $scrolled={scrolled}>
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
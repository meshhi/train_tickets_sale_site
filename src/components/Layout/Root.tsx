import { Outlet } from "react-router-dom";
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { ScrollToAnchor } from "../utils/ScrollToAnchor";

const Root = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
      <ScrollToAnchor></ScrollToAnchor>
    </>
  )
}

export default Root
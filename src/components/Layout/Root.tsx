import { Outlet } from "react-router-dom";
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { ScrollToAnchor } from "../utils/ScrollToAnchor";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Root = () => {
  // const state = useSelector(state => state);
  
  // useEffect(() => {
  //   console.log(state);
  // }, [state]);

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
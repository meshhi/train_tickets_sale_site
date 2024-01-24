import React from 'react'
import styled from 'styled-components';
import { Outlet } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';

const Root = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default Root
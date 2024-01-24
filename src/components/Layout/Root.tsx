import React from 'react'
import { Outlet } from "react-router-dom";
import Header from './Header';
import styled from 'styled-components';

const Root = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
    </>
  )
}

export default Root
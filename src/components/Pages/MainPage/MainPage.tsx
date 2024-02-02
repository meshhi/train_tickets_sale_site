import styled from 'styled-components'
import DirectionFilterBlock from './Content/DirectionFilterBlock/DirectionFilterBlock'
import About from './Content/About/About'
import HowItWorks from './Content/HowItWorks/HowItWorks'
import Reviews from './Content/Reviews/Reviews'
import React from 'react'

const StyledMainPage = styled('main')``

const MainPage = () => {
  return (
    <StyledMainPage>
      <DirectionFilterBlock></DirectionFilterBlock>
      <About></About>
      <HowItWorks></HowItWorks>
      <Reviews></Reviews>
    </StyledMainPage>
  )
}

export default MainPage
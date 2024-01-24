import styled from 'styled-components'
import TicketFilterBlock from './Content/TicketFilterBlock'
import About from './Content/About'
import HowItWorks from './Content/HowItWorks'
import Reviews from './Content/Reviews'

const StyledMainPage = styled('main')``

const MainPage = () => {
  return (
    <StyledMainPage>
      <TicketFilterBlock></TicketFilterBlock>
      <About></About>
      <HowItWorks></HowItWorks>
      <Reviews></Reviews>
    </StyledMainPage>
  )
}

export default MainPage
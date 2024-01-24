import styled from 'styled-components'
import TicketFilterBlock from './Content/TicketFilterBlock'
import About from './Content/About'

const StyledMainPage = styled('main')``

const MainPage = () => {
  return (
    <StyledMainPage>
      <TicketFilterBlock></TicketFilterBlock>
      <About></About>
    </StyledMainPage>
  )
}

export default MainPage
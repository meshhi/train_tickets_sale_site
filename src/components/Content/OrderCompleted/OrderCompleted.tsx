import styled from 'styled-components'
import PictureBlock from './Content/PictureBlock'
import OrderInfoBlock from './Content/OrderInfoBlock/OrderInfoBlock'

const OrderCompletedContainer = styled.section`
    min-height: 100vh;
    width: 100%;
`

const OrderCompleted = () => {
  return (
    <OrderCompletedContainer className="order-completed">
        <PictureBlock></PictureBlock>
        <OrderInfoBlock></OrderInfoBlock>
    </OrderCompletedContainer>
  )
}

export default OrderCompleted
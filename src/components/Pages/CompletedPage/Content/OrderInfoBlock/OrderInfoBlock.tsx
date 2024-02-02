import React from 'react'
import styled from 'styled-components'
import OrderInfoDetails from './Content/OrderInfoDetails'

const OrderInfoBlockContainer = styled.div`
    height: 1082px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`

const OrderInfoBlock = () => {
  return (
    <OrderInfoBlockContainer>
        <OrderInfoDetails>
        </OrderInfoDetails>
    </OrderInfoBlockContainer>
  )
}

export default OrderInfoBlock
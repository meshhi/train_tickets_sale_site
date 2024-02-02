import styled from 'styled-components'
import PictureBlock from './Content/PictureBlock'
import OrderInfoBlock from './Content/OrderInfoBlock/OrderInfoBlock'
import React from 'react'

const CompletedContainer = styled.section`
    min-height: 100vh;
    width: 100%;
`

const CompletedPage = () => {
  return (
    <CompletedContainer className="order-completed-page">
        <PictureBlock></PictureBlock>
        <OrderInfoBlock></OrderInfoBlock>
    </CompletedContainer>
  )
}

export default CompletedPage
import React from 'react'
import styled from 'styled-components'
import order_completed_bg from '/src/assets/png/order_completed_bg.png';

const PictureBlockContainer = styled.div`
    background-image: url(${order_completed_bg});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 100%;
    height: 834px;
`

const PictureBlock = () => {
  return (
    <PictureBlockContainer></PictureBlockContainer>
  )
}

export default PictureBlock
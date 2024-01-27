import styled from "styled-components"
import { Swiper, SwiperSlide } from 'swiper/react';

export const Slider = styled(Swiper)`
  width: 100%;
  height: 360px;

  --swiper-pagination-color: #C4C4C4;
  --swiper-pagination-bullet-inactive-color: rgba(229, 229, 229, 1);
  --swiper-pagination-bullet-inactive-opacity: 1;
  --swiper-pagination-bullet-size: 19px;
  --swiper-pagination-bullet-horizontal-gap: 6px;
`
export const SliderItem = styled(SwiperSlide)`
  display: flex;
  flex-direction: row;
`

export const SliderItemImage = styled.div<{ $image?: string }>`
  background-image: ${props => (`url(${props.$image})`)};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 50%;
  min-width: 206px;
  height: 206px;
  margin-right: 22px;
`

export const SliderItemContent = styled('div')``

export const SliderItemTitle = styled('div')`
color: var(--black);
font-family: Roboto;
font-size: 24px;
font-style: normal;
font-weight: 500;
line-height: normal;
margin-bottom: 30px;
`

export const SliderItemText = styled('div')`
color: var(--grey-text);
font-family: Roboto;
font-size: 18px;
font-style: italic;
font-weight: 300;
line-height: normal; 
`

export const Quote = styled("span")`
color: var(--grey-text);
font-family: Roboto;
font-size: 36px;
font-style: normal;
font-weight: 500;
line-height: normal; 
`
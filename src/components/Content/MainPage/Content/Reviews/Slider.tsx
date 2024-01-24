import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y } from 'swiper/modules';

import 'swiper/css';

import 'swiper/css/pagination';
import styled from 'styled-components';

const Slider = styled(Swiper)`
  width: 100%;
  height: 360px;

  --swiper-pagination-color: yellow;
  --swiper-pagination-bullet-inactive-color: #999999;
  --swiper-pagination-bullet-inactive-opacity: 1;
  --swiper-pagination-bullet-size: 16px;
  --swiper-pagination-bullet-horizontal-gap: 6px;
`
const SliderItem = styled(SwiperSlide)`

`

const SliderItemImage = styled('img')`

`

const SliderItemContent = styled('div')``

const SliderItemTitle = styled('div')`
color: #000;
font-family: Roboto;
font-size: 24px;
font-style: normal;
font-weight: 500;
line-height: normal;
margin-bottom: 30px;
`

const SliderItemText = styled('div')`
color: #928F94;
font-family: Roboto;
font-size: 18px;
font-style: italic;
font-weight: 300;
line-height: normal; 
`

export default () => {
  return (
    <Slider
      // install Swiper modules
      modules={[Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={2}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SliderItem>
        <SliderItemImage></SliderItemImage>
        <SliderItemContent>
          <SliderItemTitle>
            Екатерина Вальнова
          </SliderItemTitle>
          <SliderItemText>
            Доброжелательные подсказки
            на всех этапах помогут правильно заполнить поля и без затруднений купить авиа или ж/д билет, даже если вы заказываете онлайн билет впервые.
          </SliderItemText>
        </SliderItemContent>
      </SliderItem>
      <SliderItem>Slide 2</SliderItem>
      <SliderItem>Slide 3</SliderItem>
      <SliderItem>Slide 4</SliderItem>
      ...
    </Slider>
  );
};
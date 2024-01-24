import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import styled from 'styled-components';
import review_1 from '/src/assets/review_1.png';
import review_2 from '/src/assets/review_2.png';

const Slider = styled(Swiper)`
  width: 100%;
  height: 360px;

  --swiper-pagination-color: #C4C4C4;
  --swiper-pagination-bullet-inactive-color: rgba(229, 229, 229, 1);
  --swiper-pagination-bullet-inactive-opacity: 1;
  --swiper-pagination-bullet-size: 19px;
  --swiper-pagination-bullet-horizontal-gap: 6px;
`
const SliderItem = styled(SwiperSlide)`
  display: flex;
  flex-direction: row;
`

const SliderItemImage = styled('div')`
  background-image: ${props => (`url(${props.image})`)};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 50%;
  min-width: 206px;
  height: 206px;
  margin-right: 22px;
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

const Quote = styled("span")`
color: #928F94;
font-family: Roboto;
font-size: 36px;
font-style: normal;
font-weight: 500;
line-height: normal; 
`

export default () => {
  const reviewsData = [
    {
      id: 1,
      img: review_1,
      title: "Екатерина Вальнова",
      text: `Доброжелательные подсказки
      на всех этапах помогут правильно заполнить поля и без затруднений купить авиа или ж/д билет, даже если вы заказываете онлайн билет впервые.`
    },
    {
      id: 2,
      img: review_2,
      title: "Евгений Стрыкало",
      text: `СМС-сопровождение до посадки
      Сразу после оплаты ж/д билетов 
      и за 3 часа до отправления мы пришлем вам СМС-напоминание о поездке.`
    },
    {
      id: 3,
      img: review_1,
      title: "Екатерина Вальнова",
      text: `Доброжелательные подсказки
      на всех этапах помогут правильно заполнить поля и без затруднений купить авиа или ж/д билет, даже если вы заказываете онлайн билет впервые.`
    },
    {
      id: 4,
      img: review_1,
      title: "Екатерина Вальнова",
      text: `Доброжелательные подсказки
      на всех этапах помогут правильно заполнить поля и без затруднений купить авиа или ж/д билет, даже если вы заказываете онлайн билет впервые.`
    }
  ]
  return (
    <Slider
      // install Swiper modules
      modules={[Autoplay, Pagination, A11y]}
      spaceBetween={50}
      loop={true}
      slidesPerView={2}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      {reviewsData.map((review) => <SliderItem key={review.id}>
        <SliderItemImage image={review.img}></SliderItemImage>
        <SliderItemContent>
          <SliderItemTitle>
            {review.title}
          </SliderItemTitle>
          <SliderItemText>
            <Quote>"</Quote>{review.text}<Quote>"</Quote>
          </SliderItemText>
        </SliderItemContent>
      </SliderItem>)}
    </Slider>
  );
};

import { Pagination, A11y, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import review_1 from '/src/assets/png/review_1.png';
import review_2 from '/src/assets/png/review_2.png';
import { Slider, SliderItem, SliderItemImage, SliderItemContent, SliderItemTitle, SliderItemText, Quote } from './SliderStyledItems';

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
      modules={[Autoplay, Pagination, A11y]}
      spaceBetween={50}
      loop={true}
      slidesPerView={2}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      {reviewsData.map((review) => 
      <SliderItem key={review.id}>
        <SliderItemImage $image={review.img}></SliderItemImage>
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
import Slider from './Slider'
import { ReviewsContainer, InnerContainer, Title } from './ReviewsStyledItems';

export default
    () => {
        return (
            <ReviewsContainer id="reviews">
                <InnerContainer>
                    <Title>Отзывы</Title>
                    <Slider></Slider>
                </InnerContainer>
            </ReviewsContainer>
        )
    };
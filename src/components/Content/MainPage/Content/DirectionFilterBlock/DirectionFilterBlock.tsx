import styled from 'styled-components'
import direction_filter_bg from '/src/assets/png/filter_direction_bg.png';
import { DirectionFilterForm } from '../../../../Forms/DirectionFilterForm/DirectionFilterForm';

const DirectionFilterBlock = styled('section')`
    height: calc(100vh + .5rem);
    background-color: orange;
    background-image: url(${direction_filter_bg});
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: end;
    position: relative;
    z-index: 1;
    border-bottom: .5rem solid orange;
`

const InnerBlock = styled('div')`
    position: absolute;
    bottom: 0;
    margin: 0 auto;
    left: 0; 
    right: 0;
    width: 60%;
    z-index: 2;
    display: flex;
    align-items: center;
    gap: 7%;
`

const Title = styled('h1')`
    font-size: 5rem;
    font-weight: 200;
    color: #fff;
`

const BoldText = styled('span')`
    display: inline-block;
    font-size: 5rem;
    font-weight: 800;
`

export default
    () => {
        return (
            <DirectionFilterBlock id="Directionfilterblock">
                <InnerBlock>
                    <Title>Вся жизнь - <br></br><BoldText>путешествие!</BoldText></Title>
                    <DirectionFilterForm variant="standart"></DirectionFilterForm>
                </InnerBlock>
            </DirectionFilterBlock>
        )
    };
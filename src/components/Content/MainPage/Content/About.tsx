import React from 'react'
import styled from 'styled-components';

const AboutContainer = styled('section')`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 564px;
`

const InnerContainer = styled('div')`
    width: 74%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    color: #292929;
    gap: 33px;
`

const Title = styled('h2')`
    font-family: Roboto;
    font-size: 36px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: uppercase; 
`

const TextContainer = styled('div')`
    width: 100%;
    border-left: .5rem solid orange;
    padding-left: 19px;
`

const Text = styled('p')`
    font-size: 1.5rem;
`

const Bold = styled('span')`
    font-weight: bold;
`

export default 
    () => {
        return(
        <AboutContainer>
            <InnerContainer>
                <Title>О нас</Title>
                <TextContainer>
                    <Text>
                    Мы рады видеть вас! Мы работаем для Вас с 2003 года. 14 лет мы наблюдаем, как с каждым днем
                    <br></br>
                    все больше людей заказывают жд билеты через интернет.
                    <br></br>
                    <br></br>
                    Сегодня можно заказать железнодорожные билеты онлайн всего в 2 клика, но стоит ли это делать?
                    <br></br>
                    Мы расскажем о преимуществах заказа через интернет.
                    <br></br>
                    <br></br>
                    <Bold>
                        Покупать жд билеты дешево можно за 90 суток до отправления поезда. 
                        <br></br>
                        Благодаря динамическому ценообразованию цена на билеты в это время самая низкая.

                    </Bold>
                    </Text>
                </TextContainer>
            </InnerContainer>
        </AboutContainer>
        )
    };
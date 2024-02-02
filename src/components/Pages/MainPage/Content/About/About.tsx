import React from 'react';
import { AboutContainer, InnerContainer, Title, TextContainer, Bold, Text } from './AboutStyledItems';

export default 
    () => {
        return(
        <AboutContainer id="about">
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
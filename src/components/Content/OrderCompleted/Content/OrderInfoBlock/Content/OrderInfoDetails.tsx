import React, { SyntheticEvent } from 'react'
import styled from 'styled-components'
import { Icon } from '../../../../../Elements/Icons/Icon'
import ruble from '/src/assets/svg/icons/ruble.svg';
import monitor from '/src/assets/png/tips/monitor.png';
import man from '/src/assets/png/tips/man.png';
import label from '/src/assets/png/tips/label.png';
import { LandingButton } from '../../../../../Elements/Buttons/LandingButton';
import { useNavigate } from 'react-router-dom';
import star from '/src/assets/svg/icons/star.svg';

const OrderInfoMessage = styled.h1`
    position: absolute;
    color: var(--main-color);
    font-family: Roboto;
    font-size: 72px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    top: -135px;
`

const OrderInfoDetailsContainer = styled.div`
    width: 73%;
    height: 1113px;
    position: relative;
    bottom: 200px;
    border: 1px solid #C4C4C4;
    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);
    background-color: var(--main-color);
`

// HEADER
const OrderInfoHeaderBlock = styled.header`
    width: 100%;
    height: 146px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-inline: 83px;
    border-bottom: 1px solid var(--hard-grey);
    background-color: var(--main-color);
`

const OrderNumber = styled.div`
    color: var(--smooth-black-2);
    font-family: Roboto;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: normal; 
`

const OrderSummaryPrice = styled.div`
    color: var(--grey-text);
    font-family: Roboto;
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: flex;
    flex-direction: row;
    gap: 25px;
    align-items: center;
`

const SumText = styled.span`
    color: var(--smooth-black-2);
    font-family: Roboto;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: normal; 
`

// TIPS
const OrderInfoTipsBlock = styled.div`
    width: 100%;
    height: 312px;
    background-color: var(--smooth-grey-2);
    display: flex;
    flex-direction: row;
    padding-block: 40px;
    justify-content: center;
    gap: 145px;
`

const OrderInfoTipsItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 157px;
    gap: 14px;
`

const OrderInfoTipsImage = styled.img`
    width: 155px;
    height: 155px;
`

const OrderInfoTipsText = styled.span`
    color: var(--black);
    text-align: center;
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    min-width: 180px;
`

const OrderInfoTipsTextAlert = styled.span`
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal; 
`

// TEXT MESSAGE
const OrderInfoTextBlock = styled.div`
    width: 100%;
    height: 492px;
    background-color: var(--main-color);
    color: var(--black);
    padding: 102px 206px 142px;
    display: flex;
    flex-direction: column;
`

const OrderInfoTextName = styled.h2`
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: 22px; 
`

const OrderInfoTextMainMessage = styled.span`
    margin-top: 52px;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
`

const OrderInfoTextThanks = styled.span`
    margin-top: 100px;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

// MARKS
const OrderInfoMarksBlock = styled.div`
    width: 100%;
    height: 161px;
    background-color: var(--orange);
    padding-inline: 82px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const OrderInfoGiveMark = styled.div`
    display: flex;
    align-items: center;
    gap: 31px;
`

const OrderInfoGiveMarkText = styled.span`
    color: var(--black);
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
`

const OrderInfoGiveMarkStars = styled.div`
    display: flex;
    align-items: center;
    gap: 19px;
`

const Star = styled(Icon)`
    &:has(~ &:hover), &:hover {
        background-color: var(--black);
    }
`

const OrderInfoBackToMainButton = styled(LandingButton)`

`

const OrderInfoDetails = () => {
    const navigate = useNavigate();

    const handleBackToMainClick = (e : SyntheticEvent) => {
        navigate('/');
    };

    const handleGiveMarkClick = (e : SyntheticEvent, mark: number) => {
            alert("thanks for mark! " + mark);
    };

    return (
        <OrderInfoDetailsContainer>
            <OrderInfoMessage>Благодарим Вас за заказ!</OrderInfoMessage>
            <OrderInfoHeaderBlock>
                <OrderNumber>№Заказа 5423423</OrderNumber>
                <OrderSummaryPrice>сумма <SumText>7760</SumText><Icon $srcImg={ruble} $width={21} $height={27} $backgroundColor={"#928F94"}></Icon></OrderSummaryPrice>
            </OrderInfoHeaderBlock>
            <OrderInfoTipsBlock>
                <OrderInfoTipsItem>
                    <OrderInfoTipsImage src={monitor}/>
                    <OrderInfoTipsText>
                        билеты будут отправлены<br></br> на ваш <OrderInfoTipsTextAlert>e-mail</OrderInfoTipsTextAlert>
                    </OrderInfoTipsText>
                </OrderInfoTipsItem>
                <OrderInfoTipsItem>
                    <OrderInfoTipsImage src={label}></OrderInfoTipsImage>
                    <OrderInfoTipsText>
                        <OrderInfoTipsTextAlert>распечатайте</OrderInfoTipsTextAlert> <br></br>и сохраняйте билеты до даты поездки 
                    </OrderInfoTipsText>
                </OrderInfoTipsItem>
                <OrderInfoTipsItem>
                    <OrderInfoTipsImage src={man}></OrderInfoTipsImage>
                    <OrderInfoTipsText>
                        <OrderInfoTipsTextAlert>предьявите</OrderInfoTipsTextAlert> распечатанные билеты при посадке
                    </OrderInfoTipsText>
                </OrderInfoTipsItem>
            </OrderInfoTipsBlock>
            <OrderInfoTextBlock>
                <OrderInfoTextName>Ирина Эдуардовна!</OrderInfoTextName>
                <OrderInfoTextMainMessage>Ваш заказ успешно оформлен.<br></br> В ближайшее время с вами свяжется наш оператор для подтверждения. </OrderInfoTextMainMessage>
                <OrderInfoTextThanks>Благодарим Вас за оказанное доверие и желаем приятного путешествия!</OrderInfoTextThanks>
            </OrderInfoTextBlock>
            <OrderInfoMarksBlock>
                <OrderInfoGiveMark>
                    <OrderInfoGiveMarkText>Оценить сервис</OrderInfoGiveMarkText>
                    <OrderInfoGiveMarkStars>
                        {
                            [1, 2, 3, 4, 5].map(mark => <Star
                                key={mark}
                                $srcImg={star} 
                                onClick={(e) => {
                                handleGiveMarkClick(e, mark);
                            }}></Star>)
                        }
                    </OrderInfoGiveMarkStars>
                </OrderInfoGiveMark>
                <OrderInfoBackToMainButton onClick={handleBackToMainClick} $color={"#292929"}>Вернуться на главную</OrderInfoBackToMainButton>
            </OrderInfoMarksBlock>
        </OrderInfoDetailsContainer>
    )
}

export default OrderInfoDetails
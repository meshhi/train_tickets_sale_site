// svg
import youtube from '/src/assets/svg/social_networks/youtube.svg';
import facebook from '/src/assets/svg/social_networks/facebook.svg';
import google_plus from '/src/assets/svg/social_networks/google_plus.svg';
import linkedin from '/src/assets/svg/social_networks/linkedin.svg';
import twitter from '/src/assets/svg/social_networks/twitter.svg';
import mail from '/src/assets/svg/footer_contacts/mail.svg';
import phone from '/src/assets/svg/footer_contacts/phone.svg';
import geo from '/src/assets/svg/footer_contacts/geo.svg';
import skype from '/src/assets/svg/footer_contacts/skype.svg';
import arrow_up from '/src/assets/svg/icons/arrow_up.svg';
import { useForm } from 'react-hook-form';

// styled components
import { BlockHeader, ContactIcon, ContactIconWrapper, ContactText, ContactUsBlock, ContactUsList, ContactUsListItem, CopyrightText, FooterContainer, FooterContent, FooterInfo, InnerContainer, LogoText, SubscribeBlock, SubscribeForm, SubscribeFormButton, SubscribeFormInput, SubscribeFormInputContainer, SubscribeFormInputError, SubscribeIcon, SubscribeIcons, SubscribeIconsList, ToTopIcon } from "./FooterStyledItems";
import { SyntheticEvent, useEffect } from 'react';

const Footer = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {
        reset();
    };

    return (
        <FooterContainer>
            <FooterContent>
                <InnerContainer>
                    <ContactUsBlock id="contacts">
                        <BlockHeader>Свяжитесь с нами</BlockHeader>
                        <ContactUsList>
                            <ContactUsListItem>
                                <ContactIconWrapper>
                                    <ContactIcon $srcImg={phone} $width={30} $height={30}></ContactIcon>

                                </ContactIconWrapper>
                                <ContactText>8 (800) 000 00 00</ContactText>
                            </ContactUsListItem>
                            <ContactUsListItem>
                                <ContactIconWrapper>
                                    <ContactIcon $srcImg={mail} $width={30} $height={24}></ContactIcon>
                                </ContactIconWrapper>
                                <ContactText>inbox@mail.ru</ContactText>
                            </ContactUsListItem>
                            <ContactUsListItem>
                                <ContactIconWrapper>
                                    <ContactIcon $srcImg={skype} $width={37} $height={30}></ContactIcon>
                                </ContactIconWrapper>
                                <ContactText>tu.train.tickets</ContactText>
                            </ContactUsListItem>
                            <ContactUsListItem>
                                <ContactIconWrapper>
                                    <ContactIcon $srcImg={geo} $width={20} $height={30}></ContactIcon>
                                </ContactIconWrapper>
                                <ContactText>
                                    г. Москва<br></br>
                                    ул. Московская 27-35<br></br>
                                    555 555
                                </ContactText>
                            </ContactUsListItem>
                        </ContactUsList>
                    </ContactUsBlock>
                    <SubscribeBlock>
                        <SubscribeForm onSubmit={handleSubmit(onSubmit)}>
                            <BlockHeader>Подписка</BlockHeader>
                            <span style={{ "marginBottom": "22px" }}>Будьте в курсе событий</span>
                            <SubscribeFormInputContainer>
                                <SubscribeFormInput
                                    id="subscribe"
                                    {...register("subscribe", {
                                        required: "Укажите e-mail",
                                        pattern: {
                                            value:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
                                            message: "Неверный e-mail"
                                        }
                                    })}
                                    placeholder={"john@doe.com"}
                                ></SubscribeFormInput>
                                {errors?.subscribe && errors?.subscribe?.type === "pattern" && (
                                    <SubscribeFormInputError>{ errors?.subscribe?.message}</SubscribeFormInputError>
                                )}
                                <SubscribeFormButton
                                    type="submit"
                                >Отправить</SubscribeFormButton>
                            </SubscribeFormInputContainer>
                        </SubscribeForm>
                        <SubscribeIcons>
                            <BlockHeader>Подписывайтесь на нас</BlockHeader>
                            <SubscribeIconsList>
                                <SubscribeIcon $srcImg={youtube} $width={37} $height={30}></SubscribeIcon>
                                <SubscribeIcon $srcImg={linkedin} $width={31} $height={30}></SubscribeIcon>
                                <SubscribeIcon $srcImg={google_plus} $width={46} $height={30}></SubscribeIcon>
                                <SubscribeIcon $srcImg={facebook} $width={14} $height={30}></SubscribeIcon>
                                <SubscribeIcon $srcImg={twitter} $width={36} $height={30}></SubscribeIcon>
                            </SubscribeIconsList>
                        </SubscribeIcons>
                    </SubscribeBlock>
                </InnerContainer>
            </FooterContent>
            <FooterInfo>
                <LogoText>Лого</LogoText>
                <ToTopIcon
                    $srcImg={arrow_up}
                    $width={36}
                    $height={36}
                    onClick={() => window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                    })}
                ></ToTopIcon>
                <CopyrightText>2024 WEB</CopyrightText>
            </FooterInfo>
        </FooterContainer>
    )
}

export default Footer
import styled from "styled-components"
import { LandingButton } from "../../Elements/Buttons/LandingButton"
import { Icon } from "../../Elements/Icons/Icon"
import { CustomStyledInput } from "../../Elements/Inputs/CustomStyledInput"

export const FooterContainer = styled('div')`
    width: 100%;
    height: 519px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--black);
    color: #FFF; 
`

export const FooterContent = styled('div')`
    padding: 49px 343px;
    height: 81%;
    width: 100%;
    border-bottom: 1px solid var(--smooth-grey);
`

export const InnerContainer = styled('div')`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
`

export const ContactUsBlock = styled('div')`
    height: 100%;
    display: flex;
    flex-direction: column;
`

export const BlockHeader = styled('h3')`
    font-family: Roboto;
    font-size: 30px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 33px;
`

export const ContactUsList = styled('ul')`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    height: 100%;
`

export const ContactUsListItem = styled('li')` 
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    gap: 36px;
`

export const ContactIconWrapper = styled('div')`
    width: 35px;
`

export const ContactIcon = styled(Icon)`

`

export const ContactText = styled('span')`
    color: var(--smooth-grey);
    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal; 
`

export const SubscribeBlock = styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 50px;
    min-width: 649px;
`

export const SubscribeForm = styled('form')`
    color: var(--smooth-grey);
    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
`

export const SubscribeFormInputContainer = styled('div')`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 60px;
`

export const SubscribeFormInput = styled(CustomStyledInput)`
width: 68%;
`

export const SubscribeFormButton = styled(LandingButton)`
    font-style: normal;
    font-weight: 400;
    text-transform: uppercase;
    font-size: 24px;
    margin-left: 33px;
`

export const SubscribeIcons = styled('div')`

`

export const SubscribeIconsList = styled('ul')`
    display: flex;
    gap: 49px;
    justify-content: center;
    align-items: center;
`

export const SubscribeIcon = styled(Icon)`
    &:active {
        background-color: var(--smooth-yellow);
    }
`

export const FooterInfo = styled('div')`
    height: 19%;
    width: 100%;
    display: flex;
    padding-inline: 256px;
    justify-content: space-between;
    align-items: center;
`

export const ToTopIcon = styled(Icon)`
    &:active {
        background-color: var(--smooth-yellow);
    }
`

export const LogoText = styled('span')`
    display: inline-block;
    color: var(--smooth-grey);
    var(--smooth-yellow)
    font-family: Roboto;
    font-size: 36px;
    font-style: normal;
    font-weight: 900;
    line-height: normal; 
`

export const CopyrightText = styled('span')`
    color: var(--smooth-grey);
    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
    font-weight: 300;
    line-height: normal; 
`
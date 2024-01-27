import styled from "styled-components";
import { LandingButton } from "../../../../Elements/Buttons/LandingButton";
import { HowItWorksContainer, InnerContainer, InnerContainerHeader, Title, ListContainer, ListItem, ListIcon, ListText } from "./HowItWorksStyledItems";
import monitor from "/src/assets/svg/how_it_works/monitor.svg";
import building from "/src/assets/svg/how_it_works/building.svg";
import web from "/src/assets/svg/how_it_works/web.svg";

export default
    () => {
        return (
            <HowItWorksContainer id="howitworks">
                <InnerContainer>
                    <InnerContainerHeader>
                        <Title>Как это работает</Title>
                        <LandingButton>Узнать больше</LandingButton>
                    </InnerContainerHeader>
                    <ListContainer>
                        <ListItem>
                            <ListIcon $srcImg={monitor}></ListIcon>
                            <ListText>Удобный заказ на сайте</ListText>
                        </ListItem>
                        <ListItem>
                            <ListIcon $srcImg={building}></ListIcon>
                            <ListText>Нет необходимости ехать в офис</ListText>
                        </ListItem>
                        <ListItem>
                            <ListIcon $srcImg={web}></ListIcon>
                            <ListText>Огромный выбор
                                направлений</ListText>
                        </ListItem>
                    </ListContainer>
                </InnerContainer>
            </HowItWorksContainer>
        )
    };
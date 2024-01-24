import styled from 'styled-components'
import ticket_filter_bg from '/src/assets/filter_ticket_bg.png';

const TicketFilterBlock = styled('section')`
    height: calc(100vh + .5rem);
    background-color: orange;
    background-image: url(${ticket_filter_bg});
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

const TicketFilterForm = styled('form')`
    width: 574px;
    height: calc(100vh - 43vh + .5rem);
    background-color: rgba(41, 41, 41, .8);
    `

export default 
    () => {
        return(
        <TicketFilterBlock>
            <InnerBlock>
                <Title>Вся жизнь - <br></br><BoldText>путешествие!</BoldText></Title>
                <TicketFilterForm></TicketFilterForm>
            </InnerBlock>
        </TicketFilterBlock>
        )
    };
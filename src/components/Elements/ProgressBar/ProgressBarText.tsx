import styled from "styled-components";

const StyledContent = styled.div<{$margin?: string}>`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 28px;
    margin: ${props => props.$margin};
`

const NumberCircle = styled.div`
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background-color: transparent;
    color: var(--main-color);
    border: 3px solid var(--main-color);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
`

const Text = styled.span`
    color: var(--main-color);
    font-family: Roboto;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: normal; 
`

type ProgressBarTextProps = {
    numberValue: number,
    textValue: string,
    $margin: string,
}

export default ({numberValue, textValue, $margin} : ProgressBarTextProps) : React.JSX.Element => {
    return(
    <StyledContent $margin={$margin}>
        <NumberCircle>{numberValue}</NumberCircle>
        <Text>{textValue}</Text>
    </StyledContent>)
}
import styled from "styled-components"

const SpinnerContainer = styled.div<{$color: string, $borderSize: number, $width?: string, $height?: string}>`
& {
    display: inline-block;
    width: ${props => props.$width ? props.$width : "40px"};
    height: ${props => props.$height ? props.$height : "40px"};
    position: relative;
  }
  &:after {
    content: " ";
    display: block;
    width: calc(100% - ${props => props.$borderSize * 2}px);
    height: calc(100% - ${props => props.$borderSize * 2}px);
    border-radius: 50%;
    border: ${props => props.$borderSize}px solid ${props => props.$color};
    border-color: ${props => props.$color} transparent ${props => props.$color} transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }

  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  `

export const Spinner = () => {
    return(<SpinnerContainer 
        $color={"var(--yellow)"}
        $borderSize={2}
        ></SpinnerContainer>)
}


  
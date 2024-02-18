import styled from "styled-components";
import arrow from '/src/assets/svg/progress_bar/arrow.svg';

const ArrowHeadWrapper = styled.div`
    width: 37px;
    height: 98px;
    position: relative;
    flex-shrink: 0;
    flex-grow: 0;
    z-index: 2;
`

const ArrowBody = styled.div<{ $color?: string, $isActive?: boolean}>`
    height: 100%;
    background-color: ${props => props.$color ? `${props.$color}` : (props.$isActive ? "var(--orange)" : "var(--black)")};
    flex-shrink: 1;
    flex-grow: 1;
    width: 100%;
    display: flex;
    align-items: center;
`

const ArrowPreBody = styled.div<{ $color?: string, $isActive?: boolean}>`
    height: 100%;
    background-color: ${props => props.$color ? `${props.$color}` : (props.$isActive ? "var(--orange)" : "var(--black)")};
    flex-shrink: 1;
    flex-grow: 1;
    width: 37px;
    height: 98px;
    position: absolute;
    flex-shrink: 0;
    flex-grow: 0;
    left: -37px;
    z-index: 1;
`

const ArrowHeadStyled = styled.div<{ $color?: string, $isActive?: boolean}>`
    clip-path: polygon(100% 50%, -1% 0, -1% 100%);
    background-color: ${props => props.$color ? `${props.$color}` : (props.$isActive ? "var(--orange)" : "var(--black)")};
    width: 100%;
    height: 100%;
`

const ArrowHeadStroke = styled.div`
    mask-image: url(${arrow});
    mask-repeat: no-repeat;
    background-color: var(--main-color);
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    left: -.85px;
    bottom: 0px;
    right: 4px;
    width: 104%;
    height: 100.5%;
`

const ProgressBarArrow = styled.div<{ $flex?: string, }>`
    display: flex;
    flex-direction: row;
    flex: ${props => props.$flex};
    position: relative;
`

type ProgressBarArrowProps = {
    $color?: string,
    $flex?: string,
    children?: React.ReactNode,
    noArrowHead?: boolean,
    isActive: boolean,
}

export default ({ $color, $flex, children, noArrowHead, isActive }: ProgressBarArrowProps): React.JSX.Element => {
    return (
        <ProgressBarArrow $flex={$flex}>
            <ArrowPreBody $color={$color} $isActive={isActive}></ArrowPreBody>
            <ArrowBody $color={$color} $isActive={isActive}>{children}</ArrowBody>
            {
                noArrowHead
                    ? false
                    : <ArrowHeadWrapper>
                        <ArrowHeadStyled $color={$color} $isActive={isActive}></ArrowHeadStyled>
                        <ArrowHeadStroke></ArrowHeadStroke>
                    </ArrowHeadWrapper>
            }
        </ProgressBarArrow>
    )
}
import styled from "styled-components";

export const Icon = styled.div<{ $srcImg?: string; $width?: number; $height?: number;}>`
    width: ${props => props.$width ? props.$width + "px" : "50px"};
    height: ${props => props.$height ? props.$height + "px" : "50px"};
    mask-image: url(${props => props.$srcImg});
    mask-position: center;
    mask-repeat: no-repeat;
    mask-size: contain;
    background-color: #E5E5E5;
`
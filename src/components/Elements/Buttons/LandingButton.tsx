import styled from "styled-components";

export const LandingButton = styled('button')`
width: 325px;
height: 60px;
border-radius: 5px;
border: 1px solid #FFF;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: normal;
text-align: center; 
color: #fff;
transition: all 0.2s ease-out;
&:hover {
    color: #2D2B2F;
    background: #FFCA62;
    border-color: #FFCA62;
}

&:active {
    color: #2D2B2F;
    background: #FFF; 
    border-color: #FFF;
}
`
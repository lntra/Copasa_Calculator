import styled from "styled-components";

export const Footer = styled.main`
    width: 100vw;
    height: 56px;
    position: fixed;
    bottom: 0;
    background-image: linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%);
    display:flex;
    justify-content:center;
    align-items:center;
    clear:both
`

export const texto = styled.main`
    color: #FFFFFF;
    font-weight: 300;
    font-size: 20px;
    line-height: 30px;
`

export const img = styled.span`
    margin-left:5px;
    width: 20px;
    height: 20px;
    filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(360deg) brightness(105%) contrast(103%);
`
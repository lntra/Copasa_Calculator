import styled from "styled-components";

export const img = styled.main`
    height:30px;
    width:30px;
    margin-left:35px;
    margin-right:6px;
    filter: invert(16%) sepia(24%) saturate(1704%) hue-rotate(175deg) brightness(95%) contrast(93%);
    cursor:pointer;
    transition: all 0.20s ease-out;

    &:hover{
        filter: invert(69%) sepia(36%) saturate(6855%) hue-rotate(184deg) brightness(102%) contrast(92%);
    }
`

export const texto = styled.main`
    align-self:center;
    font-weight:regular;
    font-size:20px;
    cursor:pointer;
`

export const flex = styled.main`
    display: flex;
    flex-direction:row;
`


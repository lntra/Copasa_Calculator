import styled from "styled-components";

export const flex = styled.main`
    padding-top: 20px;
    display:flex;
    align-items:center;
    justify-content: center;
    flex-direction:row;
    flex-wrap: wrap;
    margin-bottom: 25px;
`

export const caixa = styled.main`
    width: 377px;
    height: 56px;
    border: 1px solid #000000;
    border-radius: 24px;
`

export const break_flex = styled.main`
    flex-basis: 100%;
    height: 0;
`

export const texto = styled.main`
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    margin-bottom: 20px
`

export const img = styled.main`
    width: 28px;
    height: 28px;
    margin: auto;
`

export const center = styled.main`
    align-items: center;
    justify-content: center;
    align-content: center;
`

export const transition = styled.main`
    
    &:hover{
        filter: invert(69%) sepia(36%) saturate(6855%) hue-rotate(184deg) brightness(102%) contrast(92%);
    }
`

export const form = styled.form`
    display:flex;
    align-items:center;
    justify-content: center;
    flex-direction:row;
    flex-wrap: wrap;
`

export const input = styled.input`
    width: 377px;
    height: 56px;
    border: 1px solid #000000;
    border-radius: 24px;
    text-align: center;
    font-size: 24px;
    margin-right: 20px;
    outline: none;
`

export const inputButton = styled.button`
    width: 113px;
    height: 56px;
    border: 1px solid #000000;
    border-radius: 24px;
    text-align: center;
    background: #FFFFFF;
    cursor:pointer;
    transition: all 0.20s ease-out;
`

export const th = styled.th`
    border-bottom: 1px solid black;
    height:56px;
`

export const td = styled.td`
    text-align: center;
    height:56px;
    border-bottom: 1px solid black;
`

export const Tables = styled.table`
    border-collapse: collapse;
    width: 800px;
    height: 112px;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    align-content: center;
    gap: 10px;
    padding: 1rem;
`

export const div = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 112px;
`
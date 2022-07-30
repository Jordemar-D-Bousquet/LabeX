import styled from 'styled-components'

export const CardContainer = styled.div`
    display:grid;
    grid-gap:30px;
    grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));
    justify-content:center;
    justify-items:center;
    padding:30px;


`

export const Card = styled.div`
    border:3px solid black;
    padding:15px;


`

export const ContainerBackButton = styled.div`
        display:flex;
        flex-direction:row-reverse;
        padding: 15px;
`

export const ButtonStyled = styled.button`
    border-radius: 9px;
    background-color: #006600;
    border: none;
    color: black;
    text-align: center;
    font-size: 20px;
    padding: 10px;
    width: 180px;
    cursor: pointer;
    :hover{
        color:white;
        transform:scale(0.9);
    }
    margin: 5px;`
    
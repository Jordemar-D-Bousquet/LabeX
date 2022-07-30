import styled from "styled-components"


export const GridContainer = styled.div `
        padding:25vh;

`
export const ContainerLoginButton = styled.div`
        display:flex;
        flex-direction:row-reverse;
        padding: 15px;
`


export  const Titulo = styled.h1`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700&display=swap');
        font-family: 'Orbitron', sans-serif;
        color:black;
        font-size:270%;

`

export  const SubTitulo = styled.h4`
 @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700&display=swap');
        font-family: 'Orbitron', sans-serif;
        color:black;
        font-size:130%;



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
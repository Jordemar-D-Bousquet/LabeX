import styled from 'styled-components'

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding:20px;
    height:72vh;
    `

export const InputField = styled.input`
margin:21px;
padding:10px;
border:1px solid black;
border-radius:10px;
width: 500px;
font-family:Verdana, Geneva, Tahoma, sans-serif;
text-align:center;

`

export const SelectFiled = styled.select`
    width: 500px;
    padding:5px;
    border:1px solid black;
    border-radius:10px;
    background-color:lightgray;
    margin:15px;
    
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
    margin: 5px;

`

export const ContainerButton = styled.div`
        display:flex;
        flex-direction:row-reverse;
        padding: 15px;
        margin:7px;
`
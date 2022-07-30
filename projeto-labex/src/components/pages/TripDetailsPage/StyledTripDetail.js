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
    text-align:center;


`

export const ContainerButton = styled.div`
        display:flex;
        flex-direction:row-reverse;
        padding: 15px;
        margin:7px;
`
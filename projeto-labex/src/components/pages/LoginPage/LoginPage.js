import React, { useState } from 'react'
import useForms from "../../hooks/useForms";
import { useNavigate } from 'react-router-dom'
import { goBackHome } from '../../Routes/coordinator'
import axios from 'axios'
import { BASE_URL } from '../../constants/urls'
import Grid from '@material-ui/core/Grid';
import{LoginContainer, InputField, ButtonStyled, ContainerBackButton} from './styledLogin'
import Button from '@material-ui/core/Button';

const LoginPage = () => {


const { form, onChange, cleanFields } = useForms({
    email:'',
    password:''
})

const navigate = useNavigate()


const submitLogin = (event) => {
  event.preventDefault()

  axios.post(`${BASE_URL}/login`,form)
  .then((resp) => {
      localStorage.setItem('token', resp.data.token)
      navigate('/admin/trips/list')
      cleanFields()

  }).catch((err) =>{
      alert("Email ou Senha Invalido")
      cleanFields()

  })

}

  return (
    <div>
      <ContainerBackButton>
      <Button onClick={() => goBackHome(navigate)}><img src="https://img.icons8.com/sf-black/64/000000/left.png"/></Button>
      </ContainerBackButton>
       <Grid
        container
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        >
      
      <form onSubmit={submitLogin}>
      <LoginContainer>
        <h1>Login</h1>
        <InputField 
        name ={'email'}
        placeholder="E-mail" 
        type ="email"
        value ={form.email}
        onChange={onChange}
        required/>
        <InputField
        name ={'password'}
        placeholder="Senha"
        type ="password"
        value ={form.password}
        onChange={onChange}
        required/>
        <ButtonStyled>Entrar</ButtonStyled>
        </LoginContainer>
        </form>
        
        </Grid>
    </div>
  )
}

export default LoginPage
import React from 'react'
import { useNavigate } from 'react-router-dom'
import useForm from '../../hooks/useForms'
import { goBack , goToLogout  } from '../../Routes/coordinator'
import { BASE_URL } from '../../constants/urls'
import { planets } from '../../constants/planets'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {FormContainer, InputField, SelectFiled,ButtonStyled,ContainerButton} from './StyledCreateTrip'
import axios from 'axios'

const CreateTripPage = () => {
const { form, onChange, cleanFields } = useForm({ 
  name: "", 
  planet: "", 
  date: "", 
  description: "", 
  durationInDays: "" })

const token = localStorage.getItem('token')

const navigate = useNavigate()

const onClickCreate = (event) => {
  event.preventDefault()
  CreateTrip()
  cleanFields()

}


const CreateTrip = () => {
  axios.post(`${BASE_URL}/trips`,form,{
    headers:{
      auth:token
    }
  }).then((resp) =>{

    alert('Viagem Criada com Sucesso!!!')

  }).catch((err) => {

    alert('Erro!! Tente Novamente')
  })

}

  return (
    <div>
      <ContainerButton>
      <Button onClick={() => goBack(navigate)}><img src="https://img.icons8.com/sf-black/64/000000/left.png"/></Button>
        <Button onClick={() => goToLogout(navigate)}><img src="https://img.icons8.com/ios-filled/50/000000/logout-rounded-down.png"/></Button>
        </ContainerButton>
      <div>
        <Grid
        container
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        >
        <h3>Criar Viagem</h3>
        
        <FormContainer onSubmit = {onClickCreate}>
        
        <InputField 
        onChange ={onChange}
        value={form.name}
        name ={'name'}
        placeholder='Nome'
        required/>
        <SelectFiled
        placeholder={"Planeta"}
        name={"planet"}
        defaultValue={""}
        onChange={onChange}
        required>
          <option value={""} disabled>Escolha um Planeta</option>
          {planets.map((planet) => {
          return <option value={planet} key={planet}>{planet}</option>
          })}
        </SelectFiled>
        <InputField 
        type ='date'
        placeholder={"Data"}
        name={"date"}
        value={form.date}
        onChange={onChange}
        required/>

        <InputField 
        placeholder='Descrição'
        name={"description"}
        value={form.description}
        onChange={onChange}
        pattern={"^.{30,}$"}
        title={"O nome deve ter no mínimo 30 caracteres"}
        required/>

        <InputField 
        placeholder="Duração em dias"
        type="number"
        name={"durationInDays"}
        value={form.durationInDays}
        onChange={onChange}
        min={50}
        required />

        <ButtonStyled type='submit'>Criar</ButtonStyled>
        </FormContainer>
        </Grid>
        </div>
        
    </div>
  )
}

export default CreateTripPage
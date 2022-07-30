import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect,useState } from 'react'
import { goToTripDetails, goToLogout, goTocreateTrip } from '../../Routes/coordinator'
import { BASE_URL } from '../../constants/urls'
import Grid from '@material-ui/core/Grid';
import axios from 'axios'
import {CardContainer, Card, ContainerLogoutButton, ButtonStyled} from './StyledAdminHome'
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from '../../../Theme';
import Button from '@material-ui/core/Button';


const AdminHomePage = () => {
const [trips,setTrips] = useState('')

const navigate = useNavigate()

const token = localStorage.getItem('token')

useEffect(()=>{
  getTrips()

},[])



const getTrips = () => {
  axios.get(`${BASE_URL}/trips`,{
    headers:{
      auth:token
    }
  })
  .then((resp) =>{
    setTrips(resp.data.trips)

  })
  .catch((err) => {
    alert('Erro!! Tente Novamente')
  })

}

const DeleteTrip = (id) =>{
    axios.delete(`${BASE_URL}/trips/${id}`,{
      headers:{
        auth:token
      }
      
    }).then((resp) =>{
      alert("Viagem Deletada com Sucesso")
    })
      .catch((err) =>{
        alert('Erro!!, Tente novamente')

      })

}

const ListTrips = trips && trips.map((trip) =>{
  return <Card key={trip.id} value={trip.id}>
    <p><b>{trip.name}</b></p>
    <Button onClick ={() => goToTripDetails(navigate, trip.id)}><img src="https://img.icons8.com/material-outlined/24/000000/details-pane.png"/></Button>
    <Button onClick ={() => DeleteTrip(trip.id)}><img src="https://img.icons8.com/material-outlined/24/000000/trash--v1.png"/></Button>
     </Card>
  })

  return (
    <div>
      <ContainerLogoutButton>
      <Button onClick={() => goToLogout(navigate)}><img src="https://img.icons8.com/ios-filled/50/000000/logout-rounded-down.png"/></Button>
      </ContainerLogoutButton>
      <ThemeProvider theme={theme}>
       <Grid
        container
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        >
      
      
        
         <h2>Painel Administrativo</h2>
         <CardContainer>
          {ListTrips}
          
        </CardContainer>
        <ButtonStyled onClick={() => goTocreateTrip(navigate)}>Criar Viagem</ButtonStyled>
        </Grid>
        </ThemeProvider>
        
    </div>
  )
}

export default AdminHomePage
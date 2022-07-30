import React, { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { goBack, goToAplicationForm } from '../../Routes/coordinator'
import { BASE_URL } from '../../constants/urls'
import Button from '@material-ui/core/Button';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from '../../../Theme';
import { CardContainer,Card,ContainerBackButton,ButtonStyled } from './styledListPage';
import Grid from '@material-ui/core/Grid';
import axios from 'axios'


const ListTripsPage = () => {
  const [trips,setTrips] = useState('')

const navigate = useNavigate()

useEffect(() => {
  getTrip()

},[])


const getTrip = () =>{

  axios.get(`${BASE_URL}/trips`)
  .then((resp) => {
    setTrips(resp.data.trips)

  }).catch((err) =>{
      console.log(err)
  })

}

const ListTrips = trips && trips.map((trip) =>{
  return <Card key={trip.id} value={trip.id}>
    
    <p><b>Nome:</b>{trip.name}</p>
    <p><b>Descrição:</b>{trip.description}</p>
    <p><b>Planeta:</b>{trip.planet}</p>
    <p><b>Data:</b>{trip.date}</p>
    <p><b>Duração:</b>{trip.durationInDays}</p>
    
    </Card>
})

  return (
    <ThemeProvider theme={theme}>
       <ContainerBackButton>
        <Button onClick={() => goBack(navigate)}><img src="https://img.icons8.com/sf-black/64/000000/left.png"/></Button>
        </ContainerBackButton>

      <Grid
        container
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        >
       
        
          <h1>Lista de Viagem</h1>
          <CardContainer>
          {ListTrips}
          </CardContainer>
          <ButtonStyled onClick={() => goToAplicationForm(navigate)}>Inscerva se</ButtonStyled>
        </Grid>
    </ThemeProvider>
  )
}

export default ListTripsPage
import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles';
import { useNavigate } from 'react-router-dom'
import { goToListTrip, goToLogin } from '../../Routes/coordinator'
import Button from '@material-ui/core/Button';
import { theme } from '../../../Theme';
import Grid from '@material-ui/core/Grid';
import { GridContainer, ContainerLoginButton , Titulo , SubTitulo, ButtonStyled, Background} from './StyledHomePage';
import galaxy from '../../Img/galaxy.jpg'
import 'animate.css';




const HomePage = () => {

const navigate = useNavigate()


  return (
    <div style={{backgroundImage:`url(${galaxy})`, backgroundSize:'cover'}}>
      

    <ThemeProvider theme={theme}>
      <ContainerLoginButton>
    <Button onClick={() => goToLogin(navigate)} style ={{color:`white`}}><img src="https://img.icons8.com/ios-filled/50/FFFFFF/user-male-circle.png"/>Adm Login</Button>
      </ContainerLoginButton>
      <div class="animate__animated animate__fadeInDown">
      <GridContainer>
       <Grid
        container
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        >
        
        <Titulo variant="h1" gutterBottom>LabeX</Titulo>
        <SubTitulo variant="h4" gutterBottom>Encontre as Melhores Viagens Espaciais !</SubTitulo>
        <br/>
        <ButtonStyled onClick={() => goToListTrip(navigate)}>Ver Viagens</ButtonStyled>
        
        </Grid>
        </GridContainer>
        </div>
    </ThemeProvider>
    </div>
  )
}

export default HomePage
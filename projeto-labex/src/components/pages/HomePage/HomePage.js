import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles';
import { useNavigate } from 'react-router-dom'
import { goToListTrip, goToLogin } from '../../Routes/coordinator'
import Button from '@material-ui/core/Button';
import { theme } from '../../../Theme';
import Grid from '@material-ui/core/Grid';
import { GridContainer, ContainerLoginButton , Titulo , SubTitulo, ButtonStyled} from './StyledHomePage';



const HomePage = () => {

const navigate = useNavigate()


  return (
    <ThemeProvider theme={theme}>
      
      
      <ContainerLoginButton>
    <Button onClick={() => goToLogin(navigate)}><img src="https://img.icons8.com/ios-glyphs/60/000000/user-male-circle.png"/></Button>
      </ContainerLoginButton>
      <GridContainer>
       <Grid
        container
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        >
        
        <Titulo variant="h2" gutterBottom >LabeX</Titulo>
        <SubTitulo variant="h4" gutterBottom>Encontre as Melhores Viagens Espaciais !</SubTitulo>
        <br/>
        <ButtonStyled onClick={() => goToListTrip(navigate)}>Ver Viagens</ButtonStyled>
        </Grid>
        </GridContainer>
        
    </ThemeProvider>
  )
}

export default HomePage
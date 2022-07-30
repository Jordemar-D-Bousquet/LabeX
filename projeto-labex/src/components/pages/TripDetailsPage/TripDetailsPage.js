import { useNavigate,useParams } from 'react-router-dom'
import { useEffect,useState } from 'react'
import { goBack, goToLogout } from '../../Routes/coordinator'
import { BASE_URL } from '../../constants/urls'
import {ContainerButton, Card} from './StyledTripDetail'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import axios from 'axios'


const TripDetailsPage = () => {

const [tripDetail, setTripDetail] = useState({})
const[DecideCandidateId, setDecideCandidateId] = useState('')
const [body,setBody] = useState({})

const trip = useParams()
const navigate = useNavigate()



const token = localStorage.getItem('token')



const GetTripDetail = () =>{
  axios.get(`${BASE_URL}/trip/${trip.id}`,{
    headers:{
      auth:token
    }
  }).then((res) =>{
    setTripDetail(res.data.trip)
    
  }).catch((err) =>{

    console.log(err)
  })
}

useEffect(()=>{

  GetTripDetail()

},[])


useEffect(() =>{

  putDecideCandidate()

},[DecideCandidateId])

const getDecideCandidate = (aprove,decide) =>{
  setDecideCandidateId(aprove)
  setBody({approve:decide})

}

const putDecideCandidate = () =>{
    

    axios.put(`${BASE_URL}/trips/${trip.id}/candidates/${DecideCandidateId}/decide`,body,{
      headers:{
        auth:token
      }
    }).then((resp)=>{
        alert('Decisão acadata com Sucesso!!')
        
        
      }).catch((err)=>{

        console.log(err.response.data.message)
      })

}





const canditates = tripDetail.candidates


const ListCandidate = canditates && canditates.map((canditate) => {
  return <Card key={canditate.id}>
    <p><b>Nome: </b>{canditate.name}</p>
    <p><b>Idade: </b>{canditate.age}</p>
    <p><b>Profissão: </b>{canditate.profession}</p>
    <p><b>País: </b>{canditate.country}</p>
    <p><b>Porque devemos escolher você?: </b>{canditate.applicationText}</p>
    <Button onClick={() => getDecideCandidate(canditate.id,true)}><img src="https://img.icons8.com/ios/50/000000/checked-checkbox--v1.png"/></Button>
    <Button onClick={() => getDecideCandidate(canditate.id,false)}><img src="https://img.icons8.com/sf-black/64/000000/multiply.png"/></Button>
    
    </Card>
})

const aproved = tripDetail.approved

const ListAproved = aproved && aproved.map((aprov)=>{
    return <div key={aprov.id}> 
      <ul>
          <li>{aprov.name}</li>
        </ul>
      </div>

})


  return (
    <div>
      <ContainerButton>
      <Button onClick={() => goBack(navigate)}><img src="https://img.icons8.com/sf-black/64/000000/left.png"/></Button>
        <Button onClick={() => goToLogout(navigate)}><img src="https://img.icons8.com/ios-filled/50/000000/logout-rounded-down.png"/></Button>
        </ContainerButton>

<Grid
        container
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        >
    
        <div>
        
        <h3>{tripDetail.name}</h3>
        <p>Descrição: {tripDetail.description}</p>
        <p>Planeta: {tripDetail.planet}</p>
        <p>Duração: {tripDetail.durationInDays}</p>
        <p>Data: {tripDetail.date}</p>
        </div>
        <hr/>
        <div>
          <h3>Candidatos Pendentes</h3>
          {ListCandidate}
        </div>
        <hr/>
        <div>
        <h3>Candidatos Aporvados</h3>
        {ListAproved}
        
        
        </div>
      </Grid>
    </div>
  )
}

export default TripDetailsPage
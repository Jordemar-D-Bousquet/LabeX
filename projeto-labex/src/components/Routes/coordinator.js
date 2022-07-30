export const goToListTrip = (navigate) => {
    navigate('/trips/list')
  
  }
  
export const goToLogin = (navigate) => {
    navigate('/login')
  }


export const goToLogout = (navigate) =>{
    navigate('/login')
  }
  
export const goTocreateTrip = (navigate) =>{
    navigate('/admin/trips/create')
  }
  
export const goToTripDetails = (navigate,id) =>{
    navigate(`/admin/trips/${id}`)
  }

export const goBack = (navigate) =>{
    navigate(-1)
  }

export const goToAplicationForm = (navigate) =>{
    navigate('/trips/application')
  }
  
export const goBackHome = (navigate) =>{
    navigate('/')
  }

export const goToAdminHome = (navigate) =>{
    navigate('/admin/trips/list')
  }


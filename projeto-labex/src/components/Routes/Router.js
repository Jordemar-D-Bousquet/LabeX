import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminHomePage from '../pages/AdminHomePage/AdminHomePage'
import HomePage from '../pages/HomePage/HomePage'
import ListTripsPage from "../pages/ListTripsPage/ListTripsPage"
import ApplicationFormPage from "../pages/ApplicationFormPage/ApplicationFormPage"
import CreateTripPage from "../pages/CreateTripPage/CreateTripPage"
import LoginPage from "../pages/LoginPage/LoginPage"
import TripDetailsPage from "../pages/TripDetailsPage/TripDetailsPage"



export const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='/trips/list' element={<ListTripsPage />} />
          <Route path='/admin/trips/list' element={<AdminHomePage />} />
          <Route path='/trips/application' element={<ApplicationFormPage />} />
          <Route path='/admin/trips/create' element={<CreateTripPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/admin/trips/:id' element={<TripDetailsPage />} />
        </Routes>

      </BrowserRouter>
    </div>
  )
}

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminHome from '../../Admin/dashboard'
import { Navbar } from '../Navbar/Navbar'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/admin'  element={<AdminHome/>} />
        <Route path='/navbar' element={<Navbar/>} />
      </Routes>
    </div>
  )
}

export default AllRoutes

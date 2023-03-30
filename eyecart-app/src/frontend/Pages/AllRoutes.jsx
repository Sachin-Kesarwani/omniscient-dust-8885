import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminHome from '../../Admin/dashboard'
import { Home } from './Home/Home'


const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/admin'  element={<AdminHome/>} />
        <Route path='/home' element={<Home />} />
        
      </Routes>
    </div>
  )
}

export default AllRoutes

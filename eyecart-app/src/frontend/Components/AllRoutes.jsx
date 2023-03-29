import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminHome from '../../Admin/Home'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/admin'  element={<AdminHome/>} />
      </Routes>
    </div>
  )
}

export default AllRoutes

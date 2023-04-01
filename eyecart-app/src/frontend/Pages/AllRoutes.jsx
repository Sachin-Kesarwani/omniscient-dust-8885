import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminHome from '../../Admin/Home'
import { Navbar } from '../Navbar/Navbar'
import SingleProduct from './Products_Component/NewProduct/SingleProduct'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/admin'  element={<AdminHome/>} />
        <Route path='/navbar' element={<Navbar/>} />
        <Route path="/newproducts/:id" element={<SingleProduct />} />
      </Routes>
    </div>
  )
}

export default AllRoutes

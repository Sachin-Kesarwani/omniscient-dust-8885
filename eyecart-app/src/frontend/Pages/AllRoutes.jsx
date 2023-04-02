import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminHome from '../../Admin/dashboard'

import { Home } from './Home/Home'


import Cart from '../fw22_0314_pages/Cart'
import Payments from '../fw22_0314_pages/Payment'
import Shipping_page from '../fw22_0314_pages/Shipping_page'
import { Navbar } from '../Navbar/Navbar'
import Search from '../Navbar/search'


const AllRoutes = () => {
  return (
    <div>
      <Routes>

      <Route path='/' element={<Home />} />
        <Route path='/admin'  element={<AdminHome/>} />

     
        

        {/* <Route path='/navbar' element={<Navbar/>} /> */}
        <Route path='/cart' element={<Cart/>} />
        <Route path='/shipping' element={<Shipping_page/>} />
        <Route path='/payments' element={<Payments/>} />
        <Route path='/search' element={<Search />} />


      </Routes>
  
    </div>
  )
}

export default AllRoutes

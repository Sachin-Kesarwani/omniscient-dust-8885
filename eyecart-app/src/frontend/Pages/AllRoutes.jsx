import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminHome from '../../Admin/dashboard'

import { Home } from './Home/Home'


import Cart from '../fw22_0314_pages/Cart'
import Payments from '../fw22_0314_pages/Payment'
import Shipping_page from '../fw22_0314_pages/Shipping_page'
import { Navbar } from '../Navbar/Navbar'
import Search from '../Navbar/search'

import SingleProduct from './Products_Component/NewProduct/SingleProduct'

import PrivateRoute from './PrivateRoute'
import Account from '../../Account/Account'
import NewProduct from './Products_Component/NewProduct/ProductList'





const AllRoutes = () => {
  return (
    <div>
      <Routes>

      <Route path='/' element={<Home />} />
        <Route path='/admin'  element={<AdminHome/>} />

        <Route path='/products' element={<NewProduct />} />
        <Route path='/navbar' element={<Navbar/>} />
        <Route path="/newproducts/:id" element={<SingleProduct />}/>

        <Route path='/products'  element={<NewProduct/>} />

        <Route path='/navbar' element={<Navbar/>} />


        <Route path="/products/:id" element={<SingleProduct />} />

        <Route path="/newproducts/:id" element={<SingleProduct />}/>



        <Route path='/userinfo'  element={
          <PrivateRoute>

  <Account/>
          </PrivateRoute>
        } />

     
        

        {/* <Route path='/navbar' element={<Navbar/>} /> */}
        <Route path='/cart' element={
          <PrivateRoute>
          <Cart/>

          </PrivateRoute>
        } />
        <Route path='/shipping' element={
          <PrivateRoute>

            <Shipping_page/>
          </PrivateRoute>
        } />
        <Route path='/payments' element={
           <PrivateRoute>

        <Payments/>
           </PrivateRoute>
        } />



      </Routes>
  
    </div>
  )
}

export default AllRoutes

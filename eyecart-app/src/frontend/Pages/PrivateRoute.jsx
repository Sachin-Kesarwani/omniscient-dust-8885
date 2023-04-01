import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {

let token = localStorage.getItem("eyekartToken")
const navigate =useNavigate()
if(!token){
    return <Navigate to="/" />
}


  return (
     children
  )
}

export default PrivateRoute
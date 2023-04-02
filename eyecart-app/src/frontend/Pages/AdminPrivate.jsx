import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const AdminPrivateRoute = ({children}) => {

let token = localStorage.getItem("admintoken")
const navigate =useNavigate()
if(!token){
    return <Navigate to="/" />
}


  return (
     children
  )
}

export default AdminPrivateRoute
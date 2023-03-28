import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetAlldata } from '../Redux/AdminRedux/Action'
import { store } from '../Redux/store'

const Home = () => {

let dispatch=useDispatch()
let data=useSelector((store)=>console.log(store))
    useEffect(()=>{
dispatch(GetAlldata)
    },[])
    console.log(data)
  return (
    <div>
      
    </div>
  )
}

export default Home

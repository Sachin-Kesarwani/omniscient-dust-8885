import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Heading } from '@chakra-ui/react'
import { Loading } from '../frontend/Components/Loading'
const AllProducts = () => {
let [data,setData]=useState([])
let [loading,setLoading]=useState(false)
    function getData(){
        setLoading(true)
        axios.get("https://fakestoreapi.com/products")
        .then((res)=>{
         setData(res.data)
         setLoading(false)
        })
    }
    function closegif(){
        setLoading(false)
    }
    useEffect(()=>{
        getData()
    },[])
    console.log(data)
  return loading?<Loading message={"Loading..."} open={loading} close={closegif}/>:(
    <div>
      <Heading>All Products</Heading>
    </div>
  )
}

export default AllProducts

import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Heading, useToast } from '@chakra-ui/react'
import { Loading } from '../frontend/Components/Loading'
const AllProducts = () => {
let [data,setData]=useState([])
let [loading,setLoading]=useState(false)
const toast = useToast()
    function getData(){
        setLoading(true)
        axios.get("https://fakestoreapi.com/products")
        .then((res)=>{
         setData(res.data)
         setLoading(false)
         toast({
          title: `getting data`,
          status: 'success',
          isClosable: true,
        })
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
      {
        data?.map((e)=>{
          return <h2>{e.title}</h2>
        })
      }
    </div>
  )
}

export default AllProducts

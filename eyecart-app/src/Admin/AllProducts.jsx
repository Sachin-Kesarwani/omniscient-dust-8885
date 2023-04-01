import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Box, Heading, useToast } from '@chakra-ui/react'
import { Loading } from '../frontend/Components/Loading'
import EachProducts from './EachProducts'
import {useDispatch, useSelector} from "react-redux"
import { GetAllproducts } from '../Redux/AdminRedux/Action'
import Pagination from './Paginnation'
const AllProducts = () => {
let [data,setData]=useState([])

let dispatch=useDispatch()
const toast = useToast()
let allproducts=useSelector((store)=>store?.adminReducer?.data)
let load=useSelector((store)=>store?.adminReducer?.loading)
let active=useSelector((store)=>store?.adminReducer?.activepage)
// console.log(load,"load")
let [loading,setLoading]=useState(load)
   
    function closegif(){
        setLoading(false)
    }
    useEffect(()=>{
    

      setLoading(true)
      dispatch(GetAllproducts(active)).then((res)=>{
        setLoading(false)
      })
     
    },[active])
    // console.log(allproducts)
  return loading?<Loading message={"Loading..."} open={loading} close={closegif}/>:(
    <>
       <Heading>All Products</Heading>
     <Box
    //  w={{
    //   base:"20%",
    //   sm: '40%', // 480px
    //   md: '40%', // 768px
    //   lg: '50%', // 992px
    //   xl: '70%', // 1280px
    //   '2xl': '85%', // 1536px
    // }}
    w={{
      base:"260pxpx",
      sm: '520px', // 480px
      md: '520px', // 768px
      lg: '770px', // 992px
      xl: '1030px', // 1280px
      '2xl': '1030px', // 1536px
    }}
     ml={{
      base:"10px",
      sm: '100px', // 480px
      md: '30%', // 768px
      lg: '25%', // 992px
      xl: '22%', // 1280px
      '2xl': '22%', // 1536px
    }} display={"grid"} gridTemplateColumns={ {
      base:"repeat(1,1fr)",
      sm: "repeat(2,1fr)", // 480px
      md: "repeat(2,1fr)", // 768px
      lg: "repeat(3,1fr)", // 992px
      xl: "repeat(4,1fr)", // 1280px
      '2xl': "repeat(4,1fr)", // 1536px
    }} margin={"auto"} gap={2} >
  
      {
       allproducts?.map((e)=>{
          return <EachProducts data={e}/>
        })
      }
    </Box>
    <Pagination />
    </>
   
  )
}

export default AllProducts

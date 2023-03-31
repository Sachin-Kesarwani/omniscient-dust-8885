import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
} from '@chakra-ui/react'

import { Heading } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Loading } from '../frontend/Components/Loading'
import EachUsers from './EachUsers'

const Users = () => {
let [users,setUsers]=useState([])
let [loading,setLoading]=useState(false)
async function getAllusers(){
  setLoading(true)
let token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbklEIjoiNjQyNWJlNDllNDAxOGI5NjRiNDVjYjFhIiwibmFtZSI6IlNhY2hpbiBLZXNhcndhbmkiLCJpYXQiOjE2ODAxOTUyMDJ9.d-_wTiIKR72n0jhF0jzu6ThppTlH01x8O2f-1heDyD8"
  axios.get("https://shiny-gray-gear.cyclic.app/admin/allusers",{
    headers:{
      Authorization:token
    }
  }).then((res)=>{
   setUsers(res.data.users)
   setLoading(false)
    console.log(res.data)
  }).catch((err)=>{
    console.log(err)
  })
}

useEffect(()=>{
  getAllusers()
},[])

function closegif(){
  setLoading(false)
}


  return  loading?<Loading message={"Loading..."} open={loading} close={closegif}/>:(
    <Box w={{
      sm: '100%', // 480px
      md: '70%', // 768px
      lg: '80%', // 992px
      xl: '80%', // 1280px
      '2xl': '85%', // 1536px
    }} ml={{
      sm: '0px', // 480px
      md: '30%', // 768px
      lg: 'auto', // 992px
      xl: 'auto', // 1280px
      '2xl': 'auto', // 1536px
    }}>
    <TableContainer boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"}>
  <Table variant='striped' colorScheme='teal'>
    <TableCaption>All Users</TableCaption>
    <Thead>
      <Tr>
        <Th>First Name</Th>
        <Th>Last Name</Th>
        <Th>Email</Th>
      
        <Th>Mobile</Th>
        <Th>City</Th>
        <Th>Delete</Th>
      </Tr>
    </Thead>
    <Tbody>
      {
  users?.map((item)=>{
    return  <EachUsers getAllusers={getAllusers} data={item}/>
  })
 
      }
    
    </Tbody>
   
  </Table>
</TableContainer>
    </Box>
  )
}

export default Users

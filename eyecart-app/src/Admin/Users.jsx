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
import React from 'react'
import EachUsers from './EachUsers'

const Users = () => {


  return (
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
    <TableContainer border={"1px solid black"}>
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
     <EachUsers/>
    </Tbody>
   
  </Table>
</TableContainer>
    </Box>
  )
}

export default Users

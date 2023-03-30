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
  } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import {FiDelete} from "react-icons/fi";
import React from 'react'

const EachUsers = ({data}) => {
  return <Tr>
  <Td>
    
    {/* {data.first_name} */}
    11
    
    </Td>
  <Td>
    {/* {data.last_name} */}
    11
    </Td>
  <Td>
    {/* {data.email} */}
    111</Td>
 
  <Td>
    {/* {data.mobile} */}
    111</Td>
  <Td>
    {/* {data.city} */}
    11111</Td>
  <Td><Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={FiDelete}
          /></Td>
</Tr>
}

export default EachUsers


// first_name:{
//     type:String,
//     required:true
// },
// last_name:{
//     type:String,
//     required:true
// },
// email:{
//     type:String,
//     required:true,
//     unique: true
// },
// password:{
//     type:String,
//     required:true
// },
// mobile:{
//     type:Number,
//     required:true
// },
// city:{
//     type:String,
//     required:true
// }
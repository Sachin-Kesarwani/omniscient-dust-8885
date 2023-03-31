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
} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { FiDelete } from "react-icons/fi";
import React, { useState } from "react";
import axios from "axios";
import { Loading } from "../frontend/Components/Loading";

const EachUsers = ({ data,getAllusers }) => {
let [loading,setLoading]=useState(false)
    async function deleteusers(email){
        setLoading(true)
        console.log(email,typeof email)
        await axios({
            method:"delete",
            url:"https://shiny-gray-gear.cyclic.app/users/delete",
            data:{
                email:email
            }})
        .then((res)=>{
          console.log(res)
          getAllusers()
          setLoading(false)
        }).catch((err)=>{
          console.log(err)
        })
        }
        function closegif(){
            setLoading(false)
          }
          
          
            return  loading?<Loading message={"Deleting..."} open={loading} close={closegif}/>: (
    <Tr>
      <Td>{data.first_name}</Td>
      <Td>{data.last_name}</Td>
      <Td>{data.email}</Td>

      <Td>{data.mobile}</Td>
      <Td>{data.city}</Td>
      <Td>
        <Icon
         onClick={()=>deleteusers(data.email)}
          mr="4"
          cursor={"pointer"}
          fontSize="16"
          _groupHover={{
            color: "white",
          }}
          as={FiDelete}
        />
      </Td>
    </Tr>
  );
};

export default EachUsers;

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

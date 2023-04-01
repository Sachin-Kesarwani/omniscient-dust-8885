import { Container ,Box, Input, FormLabel, Button, useToast} from '@chakra-ui/react'
import React, { useState } from 'react'
import { FiUserPlus } from 'react-icons/fi'
import { Icon } from '@chakra-ui/react'
import axios from 'axios'
import { CheckCircleIcon, InfoOutlineIcon } from '@chakra-ui/icons'
import { Loading } from '../frontend/Components/Loading'
let inidata={
    fname:"",
    lname:"",
    email:"",
    password:""
}
const AddAdmin = () => {
    let [data,setData]=useState(inidata)
let [loading,setLoading]=useState(false)
let toast=useToast()
    function handleChange(e){
    setData({...data,[e.target.name]:e.target.value})
    }
    console.log(data)

    function handleClick(e){
e.preventDefault()
postadmin()
    }
async function postadmin(){
    setLoading(true)
await axios({
    method:"post",
    url:`${process.env.url}/admin/register`,
    data:data
}).then((res)=>{
    setLoading(false)
    toast({
        position: 'top-left',
        
        render: () => (
          <Box color='white'borderRadius={"10px"} textAlign={"center"} p={3} bg='green.500'>
        <Icon color={"white"} as={CheckCircleIcon} /> <b>Succesfully Added Admin</b>  
          </Box>
        ),
      })
}).catch((err)=>{
    setLoading(false)
    toast({
        position: 'top-left',
        
        render: () => (
          <Box color='white'borderRadius={"10px"} textAlign={"center"} p={3} bg='orange.400'>
        <Icon color={"white"} as={InfoOutlineIcon} /> <b>Something went wrong</b>  
          </Box>
        ),
      })
})
}
 function closegif(){
    setLoading(false)
}
  return loading?<Loading message={"Adding New admin..."} open={loading} close={closegif}/>: (
    <Box  w={{
        sm: '100%', // 480px
        md: '70%', // 768px
        lg: '80%', // 992px
        xl: '80%', // 1280px
        '2xl': '85%', // 1536px
      }} ml={{
        sm: '0px', // 480px
        md: '20%', // 768px
        lg: '10%', // 992px
        xl: '10%', // 1280px
        '2xl': '10%', // 1536px
      }}>
          <Container maxW='md' boxShadow={"rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;"} bg='white.600' color='black'>
          <FormLabel>First Name </FormLabel>
  <Input placeholder='Enter Admin First Name' name="fname" value={data.fname} onChange={handleChange} />
  <FormLabel>Last Name </FormLabel>
  <Input placeholder='Enter Admin Last Name' name="lname" value={data.lname} onChange={handleChange} />
  <FormLabel>Email </FormLabel>
  <Input placeholder='Enter Admin Email' name="email" value={data.email} onChange={handleChange} />
  <FormLabel>Password</FormLabel>
  <Input placeholder='Make Password For Him' name="password" value={data.password} onChange={handleChange} />

  <Button bg={"cyan.300"} _hover={{bg:"cyan.300"}}onClick={handleClick} p={2} m={3}><Icon w="20px" as={FiUserPlus}/> Add</Button>
  </Container>
      
    </Box>
  )
}

export default AddAdmin

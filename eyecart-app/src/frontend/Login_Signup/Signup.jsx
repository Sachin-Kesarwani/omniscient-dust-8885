import { CheckCircleIcon, InfoOutlineIcon } from '@chakra-ui/icons'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    FormControl,
    Input,
    Center,
    Text,
    Checkbox,
    useToast,
    Box
  } from '@chakra-ui/react'
  import { Icon } from '@chakra-ui/react'
import axios from 'axios'
import React, { useState } from 'react'
import { Loading } from '../Components/Loading'
import Login from './Login'
import logSin from "./logSin.css"
import TermsCondition from '../../Admin/TermsCondition'
let inidata={
    first_name:"",
    last_name:"",
    email:"",
    mobile:0,
    password:"",
   terms_condition:false,
    city:""

}
function Signup() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
  let [data,setdata]=useState(inidata)
let [login,setLogin]=useState(false)
let [loading,setLoading]=useState(false)
const toast = useToast()
  function handleChange(e){
    console.log(e.target.checked)
   if(e.target.name=="terms_condition"){
    setdata({...data,[e.target.name]:e.target.checked})
    }else{
      setdata({...data,[e.target.name]:e.target.value})
    }

  }
 function handleSubmit(e){
  e.preventDefault()
  registerdata()
 }

 function registerdata(){
  setLoading(true)
  axios({
    url:"https://shiny-gray-gear.cyclic.app/users/register",
    method:"post",
    data:data
  }).then((res)=>{
    console.log(res.data)
   setLoading(false)
   toast({
    position: 'top-left',
    
    render: () => (
      <Box color='white'borderRadius={"10px"} textAlign={"center"} p={3} bg='green.500'>
    <Icon color={"white"} as={CheckCircleIcon} /> <b>Succesfully Signedup</b>  
      </Box>
    ),
  })
  onClose()
  }).catch((err)=>{
    setLoading(false)
    toast({
      position: 'top-left',
      
      render: () => (
        <Box color='white'borderRadius={"10px"} textAlign={"center"} p={3} bg='orange.400'>
      <Icon color={"white"} as={InfoOutlineIcon} /> <b>User Exist , Please Login</b>  
        </Box>
      ),
    })
  })
  onClose()
 }
  function handleLog(){
setLogin(true)
  }

  
function closegif(){
  setLoading(false)
}


    return loading?<Loading message={"Processing..."}  open={loading} close={closegif}/>: (
      <>
        <Text onClick={onOpen}>Signup</Text>
        
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader style={{fontFamily:"Serif"}} color="#680ae7">Create your account</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
   
                <Input name="first_name" id="inputfield" value={data.first_name} onChange={handleChange} placeholder='First name' required />
              </FormControl>
  
              <FormControl mt={4}>
              
                <Input placeholder='Last Name' type={"text"} id="inputfield" value={data.last_name} name="last_name" onChange={handleChange} required  />
              </FormControl>
              <FormControl mt={4}>
              
              <Input placeholder='+91 Mobile'   type={"text"}maxLength="10" id="inputfield" value={data.mobile} name="mobile" onChange={handleChange} required />
            </FormControl>
            <FormControl mt={4}>
              
              <Input placeholder='Email'  type={"email"} id="inputfield" value={data.email} name="email" onChange={handleChange} required  />
            </FormControl>
            <FormControl mt={4}>
              
              <Input placeholder='City' id="inputfield"  type={"text"} value={data.city} name="city" onChange={handleChange} required />
            </FormControl>
            <FormControl mt={4}>
              
              <Input placeholder='Password'  type={"text"} id="inputfield" value={data.password} name="password" onChange={handleChange} required />
            </FormControl>
            <Checkbox m={3} onChange={handleChange} isChecked={data.terms_condition} name="terms_condition" colorScheme='green' defaultChecked>
              Accept Terms & conditions <span style={{textDecoration:"underline"}} >{<TermsCondition/>}</span>
            </Checkbox>
            <Button onClick={handleSubmit} color="#680ae7" bg={"#02bdae" }_hover={{bg:"#dfdfd9"}} marginTop="10px" borderRadius="20px"  w="100%">
            Create an Account
            </Button>
          
            </ModalBody>
           
            {/* <ModalFooter>
            <Center>
            <p>Have an account ?<a href="#" onClick={handleLog}>SignIn</a></p>
            </Center>
           
            </ModalFooter> */}
          </ModalContent>
        </Modal>
       
        {/* <a href="whatsapp://send?abid=9936752902&text=Hello%2C%20World!"> <Button>
        Ping me on WhatsApp
            </Button></a> */}
      </>
    )
  }


  export default Signup

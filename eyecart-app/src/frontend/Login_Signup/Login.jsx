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
    FormLabel,
    Image,
    Text,
    Box,
    useToast
  } from '@chakra-ui/react'
  import {useNavigate} from "react-router-dom"
import axios from 'axios'
import { Icon } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { CheckCircleIcon, InfoOutlineIcon } from '@chakra-ui/icons'
import { Loading } from '../Components/Loading'
let inidata={
    
    email:"",
  
    password:"",
   


}
function Login() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    let [data,setdata]=useState(inidata)
    let [loading,setLoading]=useState(false)
    let navigate=useNavigate()
    let toast=useToast()
    function handleChange(e){
        setdata({...data,[e.target.name]:e.target.value})
          }

 function handleClick(e){
e.preventDefault()
logindata()
 }


 async function logindata(){
  setLoading(true)
 await axios({
    url:"https://shiny-gray-gear.cyclic.app/users/login",
    method:"post",
    data:data
  }).then((res)=>{
console.log(res)
    if(res.data.token){
      console.log(res.data)
      localStorage.setItem("eyekartToken",res.data.token)
      localStorage.setItem("eyekartuser",JSON.stringify(res.data.data))
      setdata(inidata)
     setLoading(false)
     toast({
      position: 'top-left',
      
      render: () => (
        <Box color='white'borderRadius={"10px"} textAlign={"center"} p={3} bg='green.500'>
      <Icon color={"white"} as={CheckCircleIcon} /> <b>Succesfully Login</b>  
        </Box>
      ),
    })
      
  onClose()
  navigate("/")
    }else{
      setLoading(false)
      toast({
        position: 'top-left',
        
        render: () => (
          <Box color='white'borderRadius={"10px"} textAlign={"center"} p={3} bg='orange.400'>
        <Icon color={"white"} as={InfoOutlineIcon} /> <b>Wrong Credentials</b>  
          </Box>
        ),
      })
    }
  
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
 function closegif(){
  setLoading(false)
}


    return loading?<Loading message={"Processing..."}  open={loading} close={closegif}/>: (
      <>
        <Text onClick={onOpen}>SignIn</Text>
    
  
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <Image borderRadius={"10px 10px 0px 0px"} src="https://static1.lenskart.com/media/desktop/img/DesignStudioIcons/DesktopLoginImage.svg"/>
            <ModalHeader color="#680ae7" style={{fontFamily:"Serif"}}>Sign In</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
            <FormControl mt={4}>
              
              <Input placeholder='Email'  type={"text"} id="inputfield" value={data.email} name="email" onChange={handleChange} required  />
            </FormControl>
  
            <FormControl mt={4}>
              
              <Input placeholder='Password'  type={"email"} id="inputfield" value={data.password} name="password" onChange={handleChange} required />
            </FormControl>
            <Button onClick={handleClick} color="#680ae7" bg={"#02bdae" }_hover={{bg:"#dfdfd9"}} marginTop="10px" borderRadius="20px"  w="100%">
            Sign In
            </Button>
            </ModalBody>
  
            {/* <ModalFooter>
              <Button colorScheme='blue' mr={3}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter> */}
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default Login

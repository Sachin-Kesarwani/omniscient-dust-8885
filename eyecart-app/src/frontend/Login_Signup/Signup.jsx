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
    Text
  } from '@chakra-ui/react'
import React, { useState } from 'react'
import Login from './Login'
import logSin from "./logSin.css"
let inidata={
    first_name:"",
    last_name:"",
    email:"",
    mobile:"",
    password:"",
   
    city:""

}
function Signup() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
  let [data,setdata]=useState(inidata)
let [login,setLogin]=useState(false)
  function handleChange(e){
setdata({...data,[e.target.name]:e.target.value})
  }
  console.log(data)
  console.log( initialRef)

  function handleLog(){
setLogin(true)
  }
    return  (
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
              
              <Input placeholder='+91 Mobile'   type={"text"}maxlength="10" id="inputfield" value={data.mobile} name="mobile" onChange={handleChange} required />
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
            <Button color="#680ae7" bg={"#02bdae" }_hover={{bg:"#dfdfd9"}} marginTop="10px" borderRadius="20px"  w="100%">
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
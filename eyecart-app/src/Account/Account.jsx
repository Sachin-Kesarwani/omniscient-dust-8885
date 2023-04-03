
import { Box, Flex, FormControl, Heading, Input, Text, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDisclosure } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Cartfun from "./Cartfun";
import EachcardOfCart from "./EachCardofCart";
import Logoutpage from "./Logoutpage";
import Myorders from "./Myorders";
import PersonelInfo from "./PersonelInfo";
import Wishlist from "./Wishlist";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { Button,FormLabel } from "@chakra-ui/react";
import axios from "axios";
let arr = [
  {
    id: 0,
    page: "editAccount",
    title: "Pesonel Information",
    icon: "far fa-user-circle",
  },

  { id: 1, page: "cart", title: "Cart", icon: "fa fa-shopping-cart" },
  { id: 2, page: "wishlist", title: "Your Wish list", icon: "fas fa-heart" },
  {
    id: 3,
    page: "my orders",
    title: "Your Orders",
    icon: "	fas fa-cart-arrow-down",
  },
  { id: 4, page: "logout", title: "Logout", icon: "fas fa-sign-in-alt" },
];


const Account = () => {
  let [active, setactive] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure()
  let [admin,setAdmin]=useState({username:"",password:""})
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    let toast=useToast()
   async function handleAdmin(e){
      let obj={
        email:admin.username,password:admin.password
      }
      e.preventDefault()
  //  

await axios.post(`${process.env.REACT_APP_url}/admin/login`,obj).then((res)=>{
  console.log(res.data)
  localStorage.setItem("admintoken",res.data.token)
  
  toast({
    title: `Successfully logged in`,
    status: "success",
    isClosable: true,
  })
 onClose()
 window.open("https://eyekart-theta.vercel.app/admin","_blank","noreferrer")

}).catch(()=>{
    
  toast({
    title: `Something went wrong`,
    status: "warning",
    isClosable: true,
  })
 onClose()
})



    }
  return (
    <div style={{ alignContent: "center", paddingTop: "120px" }}>
      <div style={{ width: "100%", height: "auto" }}>
        <Flex w={"90%"} gap={"2%"} margin={"auto"}>
          <Box w={"20%"} h={"400px"}>
            {arr.map((e) => {
              return (
                <div
                  key={e.id}
                  onClick={() => {
                    setactive(e.id);
                  }}
                  style={{
                    border: "1px solid orange",
                    width: "100%",
                    margin: "auto",
                    padding: "10px 11px",
                    cursor: "pointer",
                    backgroundColor: active == e.id ? "#009999" : "white",
                    borderRadius: "5px",
                    margin: "1px",
                  }}
                >
                  <Text
                    fontSize="md"
                    color={active == e.id ? "white" : "black"}
                  >
                    {" "}
                    <i style={{ fontSize: "20px" }} class={e.icon}></i>{" "}
                    {e.title}{" "}
                  </Text>
                </div>
              );
            })}
            {/* <Link to="/admin" target="_blank" > */}
              <div
             onClick={onOpen}
                style={{
                  border: "1px solid red",
                  width: "100%",
                  margin: "auto",
                  padding: "10px 11px",
                  cursor: "pointer",
                  backgroundColor: "white",
                  borderRadius: "5px",
                  margin: "1px",
                }}
              >
                <Text fontSize="md" color="black">
                  {" "}
                  <i style={{ fontSize: "20px" ,color:"black"}}></i>Go To Admin{" "}
                </Text>
              </div>
            {/* </Link> */}
          </Box>
          <Box
            borderRadius={"8px"}
            boxShadow={
              "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
            }
            w={"78%"}
          >
            {active == 0 ? (
              <PersonelInfo />
            ) : active == 1 ? (
              <Cartfun />
            ) : active == 2 ? (
              <Wishlist />
            ) : active == 4 ? (
              <Logoutpage />
            ) : active == 3 ? (
              <Myorders />
            ) : (
              <Heading>jii</Heading>
            )}

            {/* <EachcardOfCart/> */}
          </Box>
        </Flex>
      </div>


  
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Login For Admin</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Username</FormLabel>
                <Input ref={initialRef} name="username" onChange={(e)=>setAdmin({...admin,[e.target.name]:e.target.value})} placeholder='Enter Your username' />
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>Password</FormLabel>
                <Input placeholder='Enter your Password ...'name="password" onChange={(e)=>setAdmin({...admin,[e.target.name]:e.target.value})} />
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
              <Button onClick={handleAdmin} colorScheme='blue' mr={3}>
               Login
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
    </div>
  );
};

export default Account;

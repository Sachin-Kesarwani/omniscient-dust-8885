import { AlertDialog,useDisclosure,Box, AlertDialogBody, AlertDialogCloseButton, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, useToast } from "@chakra-ui/react"
import axios from "axios"
import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { Loading } from "../frontend/Components/Loading"
import { GetAllproducts } from "../Redux/AdminRedux/Action"
import { Icon } from "@chakra-ui/react"
import { InfoOutlineIcon } from "@chakra-ui/icons"
export default function DeleteProduct({id}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()
   let [loading,setLoading]=useState(false)
   let dispatch=useDispatch()
   let toast=useToast()
 async  function handleDelete(){
    setLoading(true)
    onClose()
    let token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbklEIjoiNjQyNWJlNDllNDAxOGI5NjRiNDVjYjFhIiwibmFtZSI6IlNhY2hpbiBLZXNhcndhbmkiLCJpYXQiOjE2ODAxOTUyMDJ9.d-_wTiIKR72n0jhF0jzu6ThppTlH01x8O2f-1heDyD8";
  await axios({
    method:"delete",
    headers: {
        Authorization: token,
      },
    url:  `https://shiny-gray-gear.cyclic.app/products/delete/${id}`,

  }).then((res)=>{
    setLoading(false)
    dispatch(GetAllproducts())
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
  
  
    return  loading?<Loading message={"Deleting..."} open={loading} close={closegif}/>:  (
      <>
        {/* <Button onClick={onOpen}>Discard</Button> */}
        <Button onClick={onOpen} bg={"red.600"} color={"white"} _hover={{bg:"red.600" }} m={3}p={1}>Delete</Button>
        <AlertDialog
          motionPreset='slideInBottom'
          leastDestructiveRef={cancelRef}
          onClose={onClose}
          isOpen={isOpen}
          isCentered
        >
          <AlertDialogOverlay />
  
          <AlertDialogContent>
            <AlertDialogHeader>Do you want to delete?</AlertDialogHeader>
            <AlertDialogCloseButton />
            <AlertDialogBody>
              Are you sure you want to delete this product from you database? 
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                No
              </Button>
              <Button onClick={handleDelete} colorScheme='red' ml={3}>
                Yes
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </>
    )
  }
import { CheckCircleIcon, InfoOutlineIcon } from "@chakra-ui/icons";
import {
  Button,
  FormControl,
  Modal,
  FormLabel,
  Input,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useToast,
  Box,
} from "@chakra-ui/react";
import axios from "axios";

import React, { useState } from "react";
import { Icon } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllproducts } from "../Redux/AdminRedux/Action";
export default function EditProduct({ data }) {
  let inidata = data;
  let [eachdata, seteachData] = useState(inidata);
  let [loading, setLoading] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
let toast=useToast()
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  let dispatch=useDispatch()
  let activePage=useSelector((store)=>store?.adminReducer?.activepage  )
  function handleEdit(e) {
    seteachData({ ...eachdata, [e.target.name]: e.target.value });
  }

  function handleClick(e) {
    e.preventDefault();

    editinAPI(eachdata);
  }

  const editinAPI = async (eachdata) => {
    // console.log(activePage,"editpGE")
    // console.log(eachdata);
    setLoading(true);
    let token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbklEIjoiNjQyNWJlNDllNDAxOGI5NjRiNDVjYjFhIiwibmFtZSI6IlNhY2hpbiBLZXNhcndhbmkiLCJpYXQiOjE2ODAxOTUyMDJ9.d-_wTiIKR72n0jhF0jzu6ThppTlH01x8O2f-1heDyD8";
    await axios({
      method: "patch",
      headers: {
        Authorization: token,
      },
      url: `https://shiny-gray-gear.cyclic.app/products/update/${eachdata._id}`,
      data: eachdata,
    })
      .then((res) => {
        setLoading(false);
        toast({
            position: 'top-left',
            
            render: () => (
              <Box color='white'borderRadius={"10px"} textAlign={"center"} p={3} bg='green.500'>
            <Icon color={"white"} as={CheckCircleIcon} /> <b>Succesfully Editted</b>  
              </Box>
            ),
          })
       
        dispatch(GetAllproducts(activePage))
        onClose();
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        toast({
            position: 'top-left',
            
            render: () => (
              <Box color='white'borderRadius={"10px"} textAlign={"center"} p={3} bg='orange.400'>
            <Icon color={"white"} as={InfoOutlineIcon} /> <b>Something went wrong</b>  
              </Box>
            ),
          })
      });
      onClose();
  };




  return (
    <>
      <Button
        onClick={onOpen}
        bg={"green.400"}
        color={"white"}
        _hover={{ bg: "green.400" }}
        m={3}
      >
        Edit
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Product Title</FormLabel>
              <Input
                placeholder="Enter Product Title"
                type={"text"}
                name="title"
                value={eachdata.title}
                onChange={handleEdit}
              />
              <FormLabel>Product Image</FormLabel>
              <Input
                placeholder="https://reqres.in/img/faces/7-image.jpg"
                type={"text"}
                name="image"
                value={eachdata.image}
                onChange={handleEdit}
              />
              <FormLabel>Product Size</FormLabel>
              <Input
                placeholder="Enter Product Size"
                type={"text"}
                name="size"
                value={eachdata.size}
                onChange={handleEdit}
              />
              <FormLabel>Product Price</FormLabel>
              <Input
                placeholder="Enter Product Price"
                type={"number"}
                name="price"
                value={eachdata.price}
                onChange={handleEdit}
              />
              <FormLabel>Product Offer</FormLabel>
              <Input
                placeholder="Enter Product Offer"
                type={"text"}
                name="offer"
                value={eachdata.offer}
                onChange={handleEdit}
              />
              <FormLabel>Product Rating</FormLabel>
              <Input
                placeholder="Enter Product Rating"
                type={"text"}
                name="rating"
                value={eachdata.rating}
                onChange={handleEdit}
              />
              <FormLabel>Product Category</FormLabel>
              <Input
                placeholder="Enter Product Category"
                type={"text"}
                name="category"
                value={eachdata.category}
                onChange={handleEdit}
              />
              <FormLabel>Product Frame Type</FormLabel>
              <Input
                placeholder="Enter Product Frame Tyoe"
                type={"text"}
                name="frame_type"
                value={eachdata.frame_type}
                onChange={handleEdit}
              />
              <FormLabel>Product Frame Color</FormLabel>
              <Input
                placeholder="Enter Product Frame Color"
                type={"text"}
                name="frame_color"
                value={eachdata.frame_color}
                onChange={handleEdit}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              onClick={handleClick}
              bg="#3bb4a9"
              _hover={{ bg: "#3bb4a9" }}
              color={"white"}
              mr={3}
            >
             {loading?"Editting...":"Edit"}
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

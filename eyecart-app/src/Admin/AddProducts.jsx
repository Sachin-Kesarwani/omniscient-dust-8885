import { Box, Button, Container, FormLabel, Heading, Input, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Loading } from '../frontend/Components/Loading'
import {CheckCircleIcon} from  '@chakra-ui/icons'
import { Icon } from '@chakra-ui/react'
let inidata={
  image:"",
  title:"",
  size:"",
  price:"",
  offer:"",
  rating:0,
  category:"",
  frame_type:"",
  frame_color:""
}
const AddProducts = () => {

  let [data,setdata]=useState(inidata)
let [loading,setLoading]=useState(false)

const toast = useToast()
  function handleInputChange(e){
   setdata({...data,[e.target.name]:e.target.value})
  }

  function handleClick(e){
e.preventDefault()
console.log(data)
postdatainapi()
  }


  function postdatainapi(){
    setLoading(true)
    setTimeout(()=>{
        setLoading(false)
        toast({
          position: 'top-left',
          
          render: () => (
            <Box w={"200px"} color='white'borderRadius={"10px"} textAlign={"center"} p={3} bg='cyan.400'>
          <Icon color={"blue"} as={CheckCircleIcon} /> <b>Product Added</b>  
            </Box>
          ),
        })
    },2000)
  }

  function closegif(){
    setLoading(false)
}
  return loading?<Loading message={"Adding data..."} open={loading} close={closegif}/>: (
    <>
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
    }} >
      <Heading as='h3' size='lg'>Add Products</Heading>
     <Container  maxW='md' bg='white'>
     <FormLabel>Product Title</FormLabel>
      <Input type='text' value={data.title} placeholder="Enter Product Title" name="title" onChange={handleInputChange} />
    
     <FormLabel>Product Image</FormLabel>
      <Input type='text' value={data.image} placeholder="Enter Product Image" name="image" onChange={handleInputChange} />
   
     <FormLabel>Product Size</FormLabel>
      <Input type='text' value={data.size} placeholder="Enter Product Size" name="size" onChange={handleInputChange} />
     
      <FormLabel>Product Price</FormLabel>
      <Input type='text' value={data.price} placeholder="Enter Product Price" name="price" onChange={handleInputChange} />
   
     <FormLabel>Product Offer</FormLabel>
     <Input type='text' value={data.offer} placeholder="Enter Product Offer" name="offer" onChange={handleInputChange} />
 
    <FormLabel>Product Rating</FormLabel>
    <Input type='text' value={data.rating} placeholder="Enter Product Rating" name="rating" onChange={handleInputChange} />
    <FormLabel>Product Category</FormLabel>
    <Input type='text' value={data.category} placeholder="Enter Product Category" name="category" onChange={handleInputChange} />
    <FormLabel>Product Frame Type</FormLabel>
    <Input type='text' value={data.frame_type} placeholder="Enter Product Frame Type" name="frame_type" onChange={handleInputChange} />
    <FormLabel>Product Frame Type</FormLabel>
    <Input type='text' value={data.frame_color} placeholder="Enter Product Frame Color" name="frame_color" onChange={handleInputChange} />
    <Button m={3} bg={"orange.400"} onClick={handleClick}>Add Product</Button>
   </Container>

    </Box>

    </>
  )
}

export default AddProducts
// //  image:{
//   type:String,
//   required:true
// },
// title:{
//   type:String,
//   required:true
// },
// size:{
//   type:String,
//   required:true
// },
// price:{
//   type:Number,
//   required:true
// },
// offer:{
//   type:String,
//   required:true
// },
// rating:{
//   type:Number,
//   required:true
// },
// category:{
//   type:String,
//   required:true
// },
// frame_type:{
//   type:String,
//   required:true
// },
// frame_color:{
//   type:String,
//   required:true
// },
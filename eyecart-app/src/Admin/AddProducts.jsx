import { Box, Button, Container, FormLabel, Heading, Input, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Loading } from '../frontend/Components/Loading'
import {CheckCircleIcon, InfoOutlineIcon} from  '@chakra-ui/icons'
import { Icon } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
let inidata={
  image:"",
  title:"",
  size:"",
  price:"",
  offer:"",
  rating: Math.floor(Math.random() * 5) + 1,
  category:"",
  frame_type:"",
  frame_color:""
}
const AddProducts = () => {

  let [data,setdata]=useState(inidata)
let [loading,setLoading]=useState(false)
let dispatch=useDispatch()
const toast = useToast()
  function handleInputChange(e){
   setdata({...data,[e.target.name]:e.target.value})
  }

  function handleClick(e){
e.preventDefault()
   if(data.title!==""&&data.image!==""&&data.size!==""&&data.price!==""&&data.offer!==""&&data.category!=""&&data.frame_color!==""&&data.frame_type!==""){
    postdatainapi()
   }else{
    toast({
      position: 'top-left',
      
      render: () => (
        <Box w={"250px"} color='white'borderRadius={"10px"} textAlign={"center"} p={3} bg='orange.400'>
      <Icon color={"blue"} as={InfoOutlineIcon} /> <b>Some Input is empty</b>  
        </Box>
      ),
    })
   }

  }


  function postdatainapi(){

    setLoading(true)
    dispatch(postdatainapi()).then((res)=>{
      setLoading(false)
      toast({
        position: 'top-left',
        
        render: () => (
          <Box w={"200px"} color='white'borderRadius={"10px"} textAlign={"center"} p={3} bg='green.400'>
        <Icon color={"white"} as={CheckCircleIcon} /> <b>Product Added</b>  
          </Box>
        ),
      })
    })
  
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
      <Input type='text' style={{borderRadius:"20Px",border:"0.5px solid gray"}} value={data.title} placeholder="Enter Product Title" name="title" onChange={handleInputChange} />
    
     <FormLabel>Product Image</FormLabel>
      <Input type='text'  style={{borderRadius:"20Px",border:"0.5px solid gray"}} value={data.image} placeholder="Enter Product Image" name="image" onChange={handleInputChange} />
   
     <FormLabel>Product Size</FormLabel>
      <Input type='text'  style={{borderRadius:"20Px",border:"0.5px solid gray"}} value={data.size} placeholder="Enter Product Size" name="size" onChange={handleInputChange} />
     
      <FormLabel>Product Price</FormLabel>
      <Input type='text'  style={{borderRadius:"20Px",border:"0.5px solid gray"}} value={data.price} placeholder="Enter Product Price" name="price" onChange={handleInputChange} />
   
     <FormLabel>Product Offer</FormLabel>
     <Input type='text'  style={{borderRadius:"20Px",border:"0.5px solid gray"}} value={data.offer} placeholder="Enter Product Offer" name="offer" onChange={handleInputChange} />
 
    {/* <FormLabel>Product Rating</FormLabel>
    <Input type='text' value={data.rating} placeholder="Enter Product Rating" name="rating" onChange={handleInputChange} /> */}
    <FormLabel>Product Category</FormLabel>
    <Input type='text'  style={{borderRadius:"20Px",border:"0.5px solid gray"}} value={data.category} placeholder="Enter Product Category" name="category" onChange={handleInputChange} />
    <FormLabel>Product Frame Type</FormLabel>
    <Input type='text'  style={{borderRadius:"20Px",border:"0.5px solid gray"}} value={data.frame_type} placeholder="Enter Product Frame Type" name="frame_type" onChange={handleInputChange} />
    <FormLabel>Product Color Type</FormLabel>
    <Input type='text'  style={{borderRadius:"20Px",border:"0.5px solid gray"}} value={data.frame_color} placeholder="Enter Product Frame Color" name="frame_color" onChange={handleInputChange} />
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
import { StarIcon } from '@chakra-ui/icons'
import { Badge, Box, Button, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Icon } from '@chakra-ui/react'
import EditProduct from './EditProduct'
import DeleteProduct from './DeleteProduct'
// import EditProduct from './EditProduct'
const EachProducts = ({data}) => {
  return (
    <Box 
     boxShadow={"rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;"} 
      p={3} 
      bg={"white"}
       borderRadius={"10px"} 
       w={"250px"}
       _hover={{boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;"}}
       >
     
      <Image  borderRadius={"10px 10px 0px 0px"}  src={data.image}/>
      <Text textAlign={"left"} marginLeft={2}>{data.title.toUpperCase()}</Text>
      <Text fontSize='xs' textAlign={"left"} marginLeft={2}> <b>Size</b> {data.size.toUpperCase()}</Text>
      <Text fontSize='sm' textAlign={"left"} marginLeft={2}> <b>Price</b> ₹{data.price}</Text>
      <Text fontSize='sm' textAlign={"left"} marginLeft={2}> <b>Offer</b> {data.offer}</Text>
      <Text fontSize='sm' textAlign={"left"} marginLeft={2}> <b>Rating</b> <Badge bg={"cyan.300"}> {data.rating} <Icon color="orange" as={StarIcon} /></Badge></Text>
      <Text fontSize='sm' textAlign={"left"} marginLeft={2}> <b>Category</b> {data.category}</Text>
      <Text fontSize='sm' textAlign={"left"} marginLeft={2}> <b>Frame Type</b> {data.frame_type.toUpperCase()}</Text>
      <Text fontSize='sm' textAlign={"left"} marginLeft={2}> <b>Frame Color</b> {data.frame_color.toUpperCase()}</Text>
      {/* <Button bg={"red.600"} color={"white"} _hover={{bg:"red.600" }} m={3}p={1}>Delete</Button> */}
      <DeleteProduct id={data._id} />
  
      <EditProduct data={data}/>
    </Box>
  )
}

export default EachProducts

import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import '../fw22_0314_pages/cart.css'
const Cart_pro_card = () => {
  return (
    <Box>
    
<Box className="cart_card">

<Box>
    <Image width={"150px"} height={"90px"} src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/black-full-rim-wayfarer-vincent-chase-glam-slam-vc-s15040-c1-sunglasses_g_8753_01_09_2022.jpg" alt="" />
</Box>
<Box>
  <Text mb={"15px"}>
     Black Full Rim Wayfarer Sunglasses
    </Text>
    <br />
<hr style={{color:"grey",border: "2px dotted",borderStyle: "none none dotted"}} />
  <Text mt={"10px"} mb={"10px"}>
  Final Price   
   </Text>
<hr style={{color:"grey",border: "2px dotted",borderStyle: "none none dotted"}} />
  <Text mt={"20px"}>
 <a href="">
     Remove 
    </a>
     <a href="">
           |   Repeat
        </a>
    </Text>

 
<hr />

</Box>
<Box display={"flex"} flexDirection={"column"}>
<Text mb={"40px"}>₹1599

</Text>
<Text mb={"50px"}>₹1599

</Text>


</Box>


</Box>


    </Box>
  )
}

export default Cart_pro_card
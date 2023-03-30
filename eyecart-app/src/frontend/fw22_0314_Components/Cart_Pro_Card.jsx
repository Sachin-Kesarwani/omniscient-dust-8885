import { Box, Button, Image, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import '../fw22_0314_pages/cart.css'
const Cart_pro_card = ({img,title,price,id,count,handlecount}) => {
  const [countnum,setcountnum]=useState(1)
useEffect(()=>{
  
  handlecount(countnum,id)
},[countnum])

  const handleremove=()=>{
    alert("rrmove")
  }
  return (
    <Box mb={"5px"} height={"auto"}>
    
<Box className="cart_card" height={"auto"}>

<Box >
    <Image width={"150px"} height={"90px"} src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/black-full-rim-wayfarer-vincent-chase-glam-slam-vc-s15040-c1-sunglasses_g_8753_01_09_2022.jpg" alt="" />
</Box>
<Box >
  <Text mb={"10px"}>
     Black Full Rim Wayfarer Sunglasses
    </Text>
    <br />
<hr style={{color:"grey",border: "2px dotted",borderStyle: "none none dotted"}} />
  <Text mt={"5px"} mb={"5px"}>
  Final Price   
   </Text>
<hr style={{color:"grey",border: "2px dotted",borderStyle: "none none dotted"}} />
<Box height={"30px"}>
<Button height={"30px"} width={"30px"} m={"5px"} disabled={()=>count==1} onClick={()=>setcountnum(countnum-1)} bgColor={"#00bbc6"}>-</Button>
<Button height={"30px"} width={"30px"} m={"5px"} bgColor={"#00bbc6"}>{count}</Button>
<Button height={"30px"} width={"30px"} m={"5px"}  disabled={count==3} onClick={()=>setcountnum(countnum+1)} bgColor={"#00bbc6"}>+</Button>
  </Box>



  <Text mt={"10px"}>
 <Text cursor={"pointer"} style={{color:"red",fontSize:"15px"}} onClick={handleremove}>
     Remove 
    </Text>
    
    </Text>

 
<hr />

</Box>
<Box display={"flex"} flexDirection={"column"}>
<Text mb={"40px"}>₹{price}

</Text>
<Text mb={"50px"}>₹{price*count}

</Text>


</Box>


</Box>


    </Box>
  )
}

export default Cart_pro_card
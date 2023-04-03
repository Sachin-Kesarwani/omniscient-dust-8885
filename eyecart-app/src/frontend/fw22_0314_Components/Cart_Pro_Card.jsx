import { Box, Button, Image, Text, Toast, useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import '../fw22_0314_pages/cart.css'
import { useDispatch } from 'react-redux'
import { GetCartData } from '../../Account/Redux/CartRedux/action'
import axios from 'axios'
const Cart_pro_card = ({image,item,title,price,_id,count,updateQty,removeItem,qty}) => {
  const [countnum,setcountnum]=useState(count)
  const toast=useToast()


const dispatch=useDispatch()

  


// const handelcount=(val,item)=>{
//   setcountnum(countnum+val)
//   updateQty(_id,countnum,item)


// }




  return (
    <Box mb={"5px"} height={"auto"}>
    
<Box className="cart_card" height={"auto"}>

<Box >
    <Image width={"150px"} height={"90px"} src={image} alt="" />
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
<Button height={"30px"} width={"30px"} m={"5px"} isDisabled={qty==1} onClick={()=>updateQty(-1,_id,qty)} bgColor={"#00bbc6"}>-</Button>
<Button height={"30px"} width={"30px"} m={"5px"} bgColor={"#00bbc6"}>{qty}</Button>
<Button height={"30px"} width={"30px"} m={"5px"}  isDisabled={qty==3} onClick={()=>updateQty(1,_id,qty)} bgColor={"#00bbc6"}>+</Button>
  </Box>



  <Text mt={"10px"}>
 <Text cursor={"pointer"} style={{color:"red",fontSize:"15px"}} onClick={()=>removeItem(_id)}>
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
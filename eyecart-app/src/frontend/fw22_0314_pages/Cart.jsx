import { Box, Button, Image, Text } from '@chakra-ui/react'
import React from 'react'
import logo from '../assets/logo.jpg'
// import ButtonComp from '../../Cart_components/ButtonComp'
import Cart_pro_card from '../fw22_0314_Components/Cart_Pro_Card'
import './cart.css'
const Cart = () => {
  return (
    <Box style={{fontFamily: 'Poppins'}} bgColor={"#f8f8f8"} width={"100%"} height={"100vh"}>
<Box border={"1px solid red"} height={"100px"} width={"100%"} color={"black"}  bgColor={"white"}>
    <Box height={"100%"} width={"80%"} display={"flex"} justifyContent={"space-between"} margin={"auto"} border={"1px solid green"}>
    <img  className='logo'  src={logo} alt="" />
        
    <span>
    <span>
        {/* <img width={"20px"} src="https://static1.lenskart.com/media/desktop/img/DesignStudioIcons/Shield.svg" alt="" /> */}
        🛡️ 100% safe and secure
        </span>
        
    </span>
    </Box>
</Box>
   <Box className="cart_container" style={{display:"flex",width:"70%",margin:"auto",marginTop:"50px"}}>
  <Box className="first_box">
  <Text color={"black"} textAlign={"center"} mb={"10px"}>
Cart(1 items)

    </Text>
<Cart_pro_card />
  </Box>
<Box className="second_box">
<h4>
Bill Details
</h4>


<Box className="box1" padding={"10px"}>
    <Box display={"flex"} justifyContent={"space-between"} width={"100%"}>
        <Text>Total Price</Text>
        <Text>₹1599</Text>
    </Box>
    <Box display={"flex"} justifyContent={"space-between"} width={"100%"}>
        <Text>Tax</Text>
        <Text>₹1599</Text>
    </Box>
    <Box display={"flex"} justifyContent={"space-between"} width={"100%"}>
        <Text>Total Payable</Text>
        <Text>₹1599</Text>
    </Box>
</Box>
<Box className="box2" bgColor={"rgb(255, 243, 199)"} border={"1px solid #e0c67c"}>

   <Text>
     Add Gold Membership and get
    </Text>
   
    <Text mt={"10px"} mb={"10px"}>
2 Sunglases for ₹1599+(tax)

    </Text>

<hr  style={{color:"grey",border: "2px dotted",borderStyle: "none none dotted"}} />
<Box display={"flex"} justifyContent={"space-between"}>
<Text mt={"10px"}>
     Add Gold & Choose second pair
    </Text>
     <Image cursor={"pointer"} src="https://static1.lenskart.com/media/desktop/img/DesignStudioIcons/OvalButton.svg" alt="" />

</Box>
</Box>
<Box className="box3">
   

    <Box padding={"10px"} display={"flex"} justifyContent={"space-between"}>
        <Box>

    <Text cursor={"pointer"}>Apply Coupens</Text>
        </Box>

    <Text cursor={"pointer"}>Check available offers</Text>
     <Image cursor={"pointer"} src="https://static1.lenskart.com/media/desktop/img/DesignStudioIcons/OvalButton.svg" alt="" />

    </Box>
</Box>
{/* <ButtonComp /> */}
<Button border={"1px solid green"} bgColor={"#11daac"} padding={"20px"} borderRadius={"20px"} className={"checkout_butt"}>
    Proceed To Checkout
</Button>
</Box>

   </Box>
     




    </Box>
  )
}

export default Cart
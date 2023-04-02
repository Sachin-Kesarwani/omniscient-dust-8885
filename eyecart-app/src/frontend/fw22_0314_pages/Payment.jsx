import { Box, Button, Heading, Text } from '@chakra-ui/react'
import React, { useRef } from 'react'
import Form1 from '../fw22_0314_Components/Formfun2'
import Paymentsfun from '../fw22_0314_Components/Payments.comp'
import SidebarWithHeader from '../fw22_0314_Components/Payments.comp'
import Pay_btn from '../fw22_0314_Components/Pay_btn'
import './shipping.css'
let total=sessionStorage.getItem("total")
let discount=Math.floor(total/10)
let tax=Math.floor(total/15)
let ordertotal=total-discount+tax
const Payments = () => {


  return (
    <Box color={"black"} bgColor={"#ffffff"} fontSize={"14px"}>
<Box className={"shipping_cont"} margin={"auto"}  flexDirection={{base:'column',sm:"column",md:"column",xl:"row"}} display={"flex"} gap={"40px"} width={"60%"} fontSize={"14px"}>
    
<Box className={"shipping_add"} width={"70%"} height={"auto"} padding={"10px"} fontSize={"12px"} >
<Box display={'flex'} justifyContent={"space-between"} width={"90%"} margin={"auto"} mb={"10px"} fontSize={"14px"} gap={"10px"} flexWrap={"wrap"}  >
<Box fontSize={"14px"} border={"1px solid grey"} bgColor={"grey"} color={"white"} padding={"5px"} borderRadius={"20px"}>  <span style={{fontWeight:"500",marginRight:"5px"}} className='steps'>1</span>Mobile</Box>
<Box  fontSize={"14px"}border={"1px solid grey"} bgColor={"grey"}  color={"white"} padding={"5px"} borderRadius={"20px"}>  <span style={{fontWeight:"500",marginRight:"5px"}} className='steps'>2</span>Shipping Address</Box>
<Box fontSize={"14px"} border={"1px solid grey"} bgColor={"black"}  color={"white"} padding={"5px"} borderRadius={"20px"}>
    <span style={{fontWeight:"500",marginRight:"5px"}} className='steps'>3</span>
    Payment & Discounts </Box>


</Box>
    <Box fontSize={"12px"} mb={"10px"} border= {"2px dotted grey"} display={"flex"} justifyContent={"start"} padding={"15px"} bgColor={"#00bbc6"}>PROMOTIONAL DISCOUNT
         </Box>
    <Box  fontSize={"15px"} padding={"8px"} mb={"30px"} display={"flex"} justifyContent={"start"} border={"1px solid green"} width={"100%"} height={"50px"} alignItems={"center"} bgColor={"#329c92"} color={"white"}> PAYMENTS & OPTIONS</Box>
    <Box fontSize={"12px"} mb={"30px"} border={"1px solid grey"}  minW={{base:"200%",sm:"190%",md:"100%",xl:"100%"}}  height={"auto"} width={"100%"} borderRadius={"10px"} margin={"auto"} padding={"20px"} boxShadow={ 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}> 
   {/* <SidebarWithHeader /> */}
   <Paymentsfun ordertotal={ordertotal} />
  {/* <Pay_btn /> */}
    
    </Box>
    <Text minW={{base:"200%",sm:"190%",md:"100%",xl:"100%"}}  textAlign={'end'} m={'10px'}>By placing the order, I have read and agreed to lenskart.com</Text>
    <Box  minW={{base:"200%",sm:"190%",md:"100%",xl:"100%"}}  display={'flex'} justifyContent={"space-between"} m={'10px'}>
        <Text>LensCart Assurance</Text>
        <Text><a href=""> Cancelation Policy</a></Text>
    </Box>
    <Box minW={{base:"200%",sm:"190%",md:"100%",xl:"100%"}} >
        <img src="https://static1.lenskart.com/media/desktop/img/all-assurance-offering.png" alt="" />
    </Box>
</Box>
<Box className={"shipping_det"} minW={{base:"100%",sm:"90%",md:"60%",xl:"40%"}}  height={"300px"} fontSize={"15px"} width={"40%"}  color={"black"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"} padding={"10px"}>
    <Heading>Summary</Heading>
    <hr  style={{color:"grey",border: "2px dotted",borderStyle: "none none dotted"}} />
    <Box display={'flex'} justifyContent={"space-between"} mb={"8px"} mt={"5px"}>
        <Text>SUBTOTAL</Text>
        <Text>₹ {total}</Text>
    </Box>
    <hr  style={{color:"grey",border: "2px dotted",borderStyle: "none none dotted"}} />

    <Box display={'flex'} justifyContent={"space-between"} mb={"8px"} mt={"5px"}>

        <Text>EXTRAA DISCOUNT 10%</Text>
        <Text>₹ {discount}</Text>
    </Box>
    <hr  style={{color:"grey",border: "2px dotted",borderStyle: "none none dotted"}} />

    <Box display={'flex'} justifyContent={"space-between"} mb={"8px"} mt={"5px"}>

        <Text>NET AMOUNT</Text>
        <Text>₹ {total-discount}</Text>
    </Box>
    <hr  style={{color:"grey",border: "2px dotted",borderStyle: "none none dotted"}} />

    <Box display={'flex'} justifyContent={"space-between"} mb={"8px"} mt={"5px"}>
        <Text>TAX COLLECTED</Text>
        <Text>₹ {tax}</Text>

    </Box>
    <hr  style={{color:"grey",border: "2px dotted",borderStyle: "none none dotted"}} />

    <Box display={'flex'} justifyContent={"space-between"} mb={"8px"} mt={"5px"}>

        <Text fontWeight={"800"}>ORDER TOTAL</Text>
        <Text>₹ {ordertotal}</Text>
    </Box>
    <hr  style={{color:"grey",border: "2px dotted",borderStyle: "none none dotted"}} />

</Box>
</Box>

    </Box>
  )
}

export default Payments
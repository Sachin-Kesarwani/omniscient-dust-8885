import { Box, Heading, Text } from '@chakra-ui/react'
import React, { useRef } from 'react'
import Form1 from '../fw22_0314_Components/Formfun2'
import './shipping.css'
const Shipping_page = () => {
    let total=localStorage.getItem("total")
    let discount=Math.floor(total/10)
    let tax=Math.floor(total/15)
    let ordertotal=total-discount+tax
    localStorage.setItem("ordertotal",ordertotal)
  return (

    <Box color={"black"} bgColor={"#ffffff"} fontSize={"14px"} style={{paddingTop:"230px"}}>

<Box className={"shipping_cont"}   margin={"auto"} flexDirection={{base:'column',sm:"column",md:"column",xl:"row"}} display={"flex"} gap={"40px"} width={"60%"} fontSize={"14px"}>
    
<Box className={"shipping_add"} minW={{base:"135%",sm:"100%",md:"100%",xl:"80%"}} width={"70%"} height={"auto"} padding={"10px"} fontSize={"12px"} >
<Box display={'flex'} justifyContent={"space-between"} margin={"auto"} mb={"10px"} fontSize={"14px"} gap={"10px"} flexWrap={"wrap"} >
<Box fontSize={"14px"} border={"1px solid grey"} bgColor={"grey"} color={"white"} padding={"5px 15px 5px 10px"} borderRadius={"20px"}>  <span style={{fontWeight:"500",marginRight:"5px"}} className='steps'>1</span>Mobile</Box>
<Box  fontSize={"14px"}border={"1px solid grey"} bgColor={"black"}  color={"white"} padding={"5px 15px 5px 10px"} borderRadius={"20px"}>  <span style={{fontWeight:"500",marginRight:"5px"}} className='steps'>2</span>Shipping Address</Box>
<Box fontSize={"14px"} border={"1px solid grey"} bgColor={"grey"}  color={"white"} padding={"5px 15px 5px 10px"} borderRadius={"20px"}>
    <span style={{fontWeight:"500",marginRight:"5px"}} className='steps'>3</span>
    Payment & Discounts </Box>


</Box>
    <Box fontSize={"12px"} mb={"10px"} border= {"2px dotted grey"} display={"flex"} justifyContent={"start"} padding={"15px"} bgColor={"#5fb7bb"}>Login as  <span style={{fontWeight:"500",marginLeft:"5px"}}>
         uzairmd073@gmail.com
        </span>
         </Box>
    <Box  fontSize={"15px"} padding={"8px"} mb={"30px"} display={"flex"} justifyContent={"start"} border={"1px solid green"} width={"100%"} height={"50px"} alignItems={"center"} bgColor={"#329c92"} color={"white"}> Shipping Adrress</Box>
    <Box fontSize={"12px"} mb={"30px"} border={"1px solid grey"} height={"auto"} width={"100%"} borderRadius={"10px"} margin={"auto"} padding={"20px"}> 
    <Form1 />
    
    </Box>
</Box>
<Box className={"shipping_det"}  minW={{base:"100%",sm:"70%",md:"70%",xl:"40%"}} height={"300px"} fontSize={"15px"} width={"40%"}  color={"black"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"} padding={"10px"}>
    <Heading>Summary</Heading>
    <hr  style={{color:"grey",border: "2px dotted",borderStyle: "none none dotted"}} />
    <Box display={'flex'} justifyContent={"space-between"} mb={"8px"} mt={"5px"}>
        <Text>SUBTOTAL</Text>
        <Text>₹ {total}</Text>
    </Box>
    <hr  style={{color:"grey",border: "2px dotted",borderStyle: "none none dotted"}} />

    <Box display={'flex'} justifyContent={"space-between"} mb={"8px"} mt={"5px"}>

        <Text>EXTRAA DISCOUNT</Text>
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
        <Text>₹ {total>0?total-discount+tax:0}</Text>
    </Box>
    <hr  style={{color:"grey",border: "2px dotted",borderStyle: "none none dotted"}} />

</Box>
</Box>

    </Box>
  )
}

export default Shipping_page
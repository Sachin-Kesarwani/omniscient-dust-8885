import { Box, Button, Image, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.jpg'
// import ButtonComp from '../../Cart_components/ButtonComp'
import Cart_pro_card from '../fw22_0314_Components/Cart_Pro_Card'
import './cart.css'
import { useToast } from '@chakra-ui/react'
const Cart = () => {
    const [arr,setarr]=useState([])
    const [total,settotal]=useState(0)
    const [ar,setar]=useState(0)
    const navigate=useNavigate()
    let data=[
        {id:1,price:1500,count:1,title:"hello",img:"https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/black-full-rim-wayfarer-vincent-chase-glam-slam-vc-s15040-c1-sunglasses_g_8753_01_09_2022.jpg"},
        {id:2,price:1200,count:1,title:"hello",img:"https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/black-full-rim-wayfarer-vincent-chase-glam-slam-vc-s15040-c1-sunglasses_g_8753_01_09_2022.jpg"},
        {id:3,price:1900,count:1,title:"hello",img:"https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/black-full-rim-wayfarer-vincent-chase-glam-slam-vc-s15040-c1-sunglasses_g_8753_01_09_2022.jpg"},
    ]
const handlecount=(count,id)=>{
    console.log("data",count,id)
let ndata=data.map((el)=>{
if(el.id==id){
    el.count=count
}
return el
})
setarr([...ndata])
setar(ar+1)
}
      useEffect(()=>{
          setarr(data)
        let totalprice=arr.reduce((acc,el)=>{
            acc+=el.price*el.count
            return acc
        },0)  
        settotal(totalprice)
      },[ar])

const handlenavigate=()=>{
    navigate("/shipping")
}




  return (
    <Box style={{fontFamily: 'Poppins'}} bgColor={"#f8f8f8"} width={"100%"} height={"100vh"}>

   <Box className="cart_container" style={{display:"flex",width:"70%",margin:"auto",marginTop:"50px"}}>
  <Box className="first_box" maxH={"450px"} overflowY={"auto"}>
  <Text color={"black"} textAlign={"center"} mb={"10px"}>
Cart({arr.length} items)

    </Text>
    {arr.map((el)=>{

    return   <Box height={"auto"}>
    <Cart_pro_card key={el.id} id={el.id} count={el.count} img={el.img} title={el.img} price={el.price} handlecount={handlecount}  />
    </Box>
    

    })}
  </Box>
<Box className="second_box">
<h4>
Bill Details
</h4>


<Box className="box1" padding={"10px"}>
    <Box display={"flex"} justifyContent={"space-between"} width={"100%"}>
        <Text>Total Price</Text>
        <Text>₹{total}</Text>
    </Box>
    <Box display={"flex"} justifyContent={"space-between"} width={"100%"}>
        <Text>Tax</Text>
        <Text>₹{159}</Text>
    </Box>
    <Box display={"flex"} justifyContent={"space-between"} width={"100%"}>
        <Text>Total Payable</Text>
        <Text>₹{total+159}</Text>
    </Box>
</Box>
<Box className="box2" bgColor={"rgb(255, 243, 199)"}  box-shadow1={"rgb(20px 80px 40px 20px #0ff)"} border={"1px solid #e0c67c"}>

   <Text>
     Add Gold Membership and get
    </Text>
   
    <Text mt={"10px"} mb={"10px"}>
{arr.length} Sunglases for ₹{total}+(tax)

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
<Button border={"1px solid green"} bgColor={"#11daac"} padding={"20px"} borderRadius={"20px"} className={"checkout_butt"} onClick={handlenavigate}>
    Proceed To Checkout
</Button>
</Box>

   </Box>
     




    </Box>
  )
}

export default Cart
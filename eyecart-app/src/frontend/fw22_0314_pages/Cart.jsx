import { Box, Button, Image, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.jpg'
// import ButtonComp from '../../Cart_components/ButtonComp'
import Cart_pro_card from '../fw22_0314_Components/Cart_Pro_Card'
import './cart.css'
import { useToast } from '@chakra-ui/react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { GetCartData } from '../../Account/Redux/CartRedux/action'
import { Loading } from '../Components/Loading'







const Cart = () => {

    const toast=useToast()
    const [total,settotal]=useState(0)
   
    // const store = useSelector((store)=>store)
    let [loading,setLoading]=useState(false)
 
    let [refresh,setRefresh]=useState(1)
    // let {cart,isLoading,isError} = useSelector((store) => store?.CartReducer);
    const [data,setdata]=useState([])
   async function getcartdat(){
    setLoading(true)
    let token=localStorage.getItem("eyekartToken")
await axios({
    method:"get",
    url:"https://shiny-gray-gear.cyclic.app/carts",
    headers:{
        Authorization:token
    }
}).then((res)=>{
    setdata(res.data)
    // totalpricefun()
 setRefresh(refresh+1)
   console.log(res.data)
})
    }
 
        useEffect(() => {
           
          getcartdat()
      
        }, []);
        // console.log("cart",cart,isLoading,isError)
        
        
        
    const navigate=useNavigate()


// useEffect(()=>{
//     let totalprice=data.reduce((acc,el)=>{
//         acc+=el.productId.price
//         return acc
//    },0)

//    settotal(totalprice)
  
// },[])

  async function updateQty(payload,id,qty) {
   console.log(payload,"payload")
   console.log(id,"id")
  //  console.log(item)
    await axios({
      method:"patch",
      url:`https://shiny-gray-gear.cyclic.app/carts/update/${id}`, 
      headers: {
      
        Authorization: localStorage.getItem("eyekartToken")
      },
      data:{
      
        qty:payload+qty
      }
    }).then((res)=>{
      console.log("updated")
      getcartdat()
      totalpricefun()
    }).catch((er)=>{
      console.log(er)
    })

  }

  


const handlenavigate=()=>{
    navigate("/shipping")
}

async function removeItem(_id) {
    console.log(_id)
    await axios.delete(`https://shiny-gray-gear.cyclic.app/carts/delete/${_id}`, {headers: {
      Authorization: localStorage.getItem("eyekartToken")
    }}).then((res)=>{
      console.log("res",res)
      getcartdat()
     
      toast({
        title: "Product Removed", 
        position:   "top-right",
        status:"Success",
        isClosable: true
      })
  
      // setar(ar+1)
    }).catch(()=>{
      toast({
        title: "Error", 
        position: "top-right",
        status:"error",
        isClosable: true
      })
    })
    
  


}

function totalpricefun(){
  let sum=0
if (data.length>=1){
    for(let i=0;i<data.length;i++){
      sum+=data[i].qty*data[i].productId.price
        }

  }

  localStorage.setItem("total",JSON.stringify(sum))
  settotal(sum)
  setLoading(false)
}
useEffect(()=>{
  totalpricefun()
},[refresh])
console.log(total,"total")
function closegif(){
  setLoading(false)
}


  return  loading?<Loading message={"Loading..."} open={loading} close={closegif}/>:(
    <Box style={{fontFamily: 'Poppins'}} padding={"120px"} mt={"50px"} bgColor={"#f8f8f8"} width={"100%"} height={"100vh"}>

   <Box className="cart_container"  flexDirection={{base:'column',sm:"column",md:"column",xl:"row"}} gap={"50px"}  style={{display:"flex",width:"70%",margin:"auto",marginTop:"50px"}} >
  <Box className="first_box" maxH={"400px"} overflowY={"auto"} overflowX={"hidden"} minW={{base:"170%",sm:"100%",md:"70%",xl:"70%"}} >
  <Text color={"black"} textAlign={"center"} mb={"10px"}>
Cart({data?.length} items)

    </Text>
    {data?.length>0?data?.map((el,i)=>{

    return   <Box height={"auto"} key={i}>
    <Cart_pro_card key={i} qty={el.qty} item={el} _id={el._id} count={el.productId.count} image={el.productId.image} title={el.productId.title} price={el.productId.price} updateQty={updateQty} removeItem={removeItem}  />
    </Box>
    

    }):
    <div style={{margin:"auto",textAlign:"center"}}>
        <img width={"400px"} src="https://www.clickbazar.com/Images/empty-cart.gif" alt="" />
    </div>
    }
  </Box>
<Box className="second_box" width={{base:"170%",sm:"100%",md:"70%",xl:"100%"}}>
<h4>
Bill Details
</h4>


<Box className="box1" padding={"10px"} minW={"100%"}>
    <Box display={"flex"} justifyContent={"space-between"} >
        <Text>Total Price</Text>
        <Text>₹{total}</Text>
    </Box>
    <Box display={"flex"} justifyContent={"space-between"}>
        <Text>Tax</Text>
        <Text>₹{total>0?Math.floor(total/15):0}</Text>
    </Box>
    <Box display={"flex"} justifyContent={"space-between"} >
        <Text>Total Payable</Text>
        <Text>₹{total>0?total+Math.floor(total/15):total}</Text>
    </Box>
</Box>
<Box className="box2" minW={"100%"} bgColor={"rgb(255, 243, 199)"}  box-shadow1={"rgb(20px 80px 40px 20px #0ff)"} border={"1px solid #e0c67c"}>

   <Text>
     Add Gold Membership and get
    </Text>
   
    <Text mt={"10px"} mb={"10px"}>
{data?.length} Sunglases for ₹{total}+(tax)

    </Text>

<hr  style={{color:"grey",border: "2px dotted",borderStyle: "none none dotted"}} />
<Box display={"flex"} justifyContent={"space-between"} minW={"100%"}>
<Text mt={"10px"}>
     Add Gold & Choose second pair
    </Text>
     <Image cursor={"pointer"} src="https://static1.lenskart.com/media/desktop/img/DesignStudioIcons/OvalButton.svg" alt="" />

</Box>
</Box>
<Box className="box3" minW={"100%"}>
   

    <Box padding={"10px"} display={"flex"} justifyContent={"space-between"}>
        <Box>

    <Text cursor={"pointer"}>Apply Coupens</Text>
        </Box>

    <Text cursor={"pointer"}>Check available offers</Text>
     <Image cursor={"pointer"} src="https://static1.lenskart.com/media/desktop/img/DesignStudioIcons/OvalButton.svg" alt="" />

    </Box>
</Box>
{/* <ButtonComp /> */}
{
  data?.length>0&&<Button border={"1px solid green"} bgColor={"#11daac"} padding={"20px"} borderRadius={"20px"} className={"checkout_butt"} onClick={handlenavigate}>
  Proceed To Checkout
</Button>
}

</Box>

   </Box>
     




    </Box>
  )
}

export default Cart
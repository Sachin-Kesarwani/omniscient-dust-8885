import { Button } from '@chakra-ui/react'
import axios from 'axios';
import React, { useState } from 'react'
import {Navigate, useNavigate} from 'react-router-dom'

const Pay_btn = ({ordertotal}) => {
const navigate=useNavigate()
const [amt,setamt]=useState("")


  function loadScript(src) {
    return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => {
            resolve(true);
        };
        script.onerror = () => {
            resolve(false);
        };
        document.body.appendChild(script);
    });
  }
  
  
  
  
  async function displayRazorpay() {
    const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
    );
  
    if (!res) {
        alert("Razorpay SDK failed to load. Are you online?");
        return;
    }
  
    // creating a new order
    let amt=ordertotal
    let obj={
      amt
    }
<<<<<<< HEAD
    const result = await axios.post("https://shiny-gray-gear.cyclic.app/payments/orders",obj)
=======
    const result = await axios.post("https://shiny-gray-gear.cyclic.app/payments/orders",obj);
>>>>>>> 29e1fc1204f896a32e00cefcf33087e0042d6920
  
    if (!result) {
        alert("Server error. Are you online?");
        return;
    }
  
    // Getting the order details back
    const { amount, id: order_id, currency } = result.data;
  let logo ="https://static.lenskart.com/media/desktop/img/site-images/main_logo.svg"
    const options = {
        key: "rzp_test_3LDKbnCBXc067o", // Enter the Key ID generated from the Dashboard
        amount: amount.toString(),
        currency: currency,
        name: "eyekart Corp.",
        description: "eyecart payments page",
        image: {logo},
        order_id: order_id,
        handler: async function (response) {
            const data = {
                orderCreationId: order_id,
                razorpayPaymentId: response.razorpay_payment_id,
                razorpayOrderId: response.razorpay_order_id,
                razorpaySignature: response.razorpay_signature,
            };
  


            const result = await axios.post("https://shiny-gray-gear.cyclic.app/payments/success", data).then((res)=>{
              alert(res.data.msg);
               return <Navigate to="/"/>

              
            }).catch((err)=>{
              console.log("okerr")
               return <Navigate to="/" />
                alert(err.data.msg)
            })
        },
        // prefill: {
        //     name: "Uzair",
        //     email: "SoumyaDey@example.com",
        //     contact: "9999999999",
        // },
        notes: {
            address: "eyecart Corporate Office",
        },
        theme: {
            color: "#00bbc6",
        },
    };
  
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }
  return (
    <>
    
    <button style={{backgroundColor:"#00bbc6",color:"black",padding:"7px",fontSize:"18px",borderRadius:"10px"}} className="App-link" onClick={()=>displayRazorpay()}>
   Place Order
</button>
    </>
  )
}

export default Pay_btn
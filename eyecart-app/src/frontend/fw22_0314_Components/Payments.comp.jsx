import React from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Button,
  Text,
} from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'
import Pay_btn from './Pay_btn'
import { useNavigate } from 'react-router-dom'
const Paymentsfun= ({ordertotal}) => {
const navigate = useNavigate()
const toast = useToast()
const handledelivery=()=>{


  toast({
    title: `Order Successfully Placed`,
    position: 'top-right',
    status:"success",
    isClosable: true
  })
navigate("/")

}

  return (
    <Accordion allowToggle>
      <Box>
        <img src="https://static5.lenskart.com/images/cust_mailer/Mar-03/CheckoutStrip.png" alt="" />
      </Box>
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box as="span" flex='1' textAlign='left'>
           Cash on Delivery
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
      <Text mb={"10px"}>Pay on delivery</Text>
       <button style={{backgroundColor:"#00bbc6",color:"black",padding:"7px",fontSize:"18px",borderRadius:"10px"}} onClick={handledelivery}>
   Place Order
</button>
      </AccordionPanel>
    </AccordionItem>
  
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box as="span" flex='1' textAlign='left'>
            
           Pay with Razorpay
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
      <Text mb={"10px"}>You will be redirect to Payment gateway upon placing the order</Text>

      <Pay_btn ordertotal={ordertotal} />
      </AccordionPanel>
    </AccordionItem>
  </Accordion>
  )
}

export default Paymentsfun



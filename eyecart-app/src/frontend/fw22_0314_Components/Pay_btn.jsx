import { Button } from '@chakra-ui/react'
import React from 'react'

const Pay_btn = () => {
  return (
    <Button>
    Submit
   <form><script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_LXLKqICz649aST" async> </script> </form>
   </Button>
  )
}

export default Pay_btn
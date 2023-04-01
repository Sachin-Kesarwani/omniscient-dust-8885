require("dotenv").config();
const express = require("express");
const Razorpay = require("razorpay");

const paymentrouter = express.Router();

paymentrouter.post("/orders",async (req,res)=>{
let {amt}=req.body
amt=+amt
    try {
        
        const instance = new Razorpay({
            key_id:'',
            key_secret: "",
        });

     const options={
        amount:amt*100,
        currency:"INR",
        receipt: "receipt_order_74394",
     }
     const order = await instance.orders.create(options);

     if (!order) return res.status(500).send("Payment Failed");

     res.status(200).send(order)

    } catch (error) {
        res.status(500).send(error);
    }




})


paymentrouter.post("/success", async (req, res) => {
    try {
        // getting the details back from our front-end
        const {
            orderCreationId,
            razorpayPaymentId,
            razorpayOrderId,
            razorpaySignature,
        } = req.body;

        // Creating our own digest
        // The format should be like this:
        // digest = hmac_sha256(orderCreationId + "|" + razorpayPaymentId, secret);
        const shasum = crypto.createHmac("sha256", "w2lBtgmeuDUfnJVp43UpcaiT");

        shasum.update(`${orderCreationId}|${razorpayPaymentId}`);

        const digest = shasum.digest("hex");

        // comaparing our digest with the actual signature
        if (digest !== razorpaySignature)
            return res.status(400).json({ msg: "Transaction not legit!" });

        // THE PAYMENT IS LEGIT & VERIFIED
        // YOU CAN SAVE THE DETAILS IN YOUR DATABASE IF YOU WANT

        res.json({
            msg: "success",
            orderId: razorpayOrderId,
            paymentId: razorpayPaymentId,
        });
    } catch (error) {
        res.status(500).send(error);
    }
});


module.exports={
    paymentrouter
}


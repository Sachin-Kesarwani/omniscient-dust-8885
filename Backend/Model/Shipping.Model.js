
const mongoose=require("mongoose")

const shippingSchema = mongoose.Schema({
    first_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique: true
    },
    gender:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    postalcode:{
        type:Number,
        required:false
    },
    country:{
        type:String,
        required:true
    },
    state_province:{
        type:String,
        required:true
    },
    address_line_1:{
        type:String,
        required:true
    },
    address_line_2:{
        type:String,
        required:true
    },
},{
    versionKey:false,
})

const ShippingModel = mongoose.model("shipping",shippingSchema)

module.exports={ShippingModel}


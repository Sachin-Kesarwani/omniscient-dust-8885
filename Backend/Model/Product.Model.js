
const mongoose=require("mongoose")

const productSchema = mongoose.Schema({
    image:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    size:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    offer:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    frame_type:{
        type:String,
        required:true
    },
    frame_color:{
        type:String,
        required:true
    },
},{
    versionKey:false,
})

const ProductModel = mongoose.model("product",productSchema)

module.exports={ProductModel}
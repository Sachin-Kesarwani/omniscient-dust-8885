
const mongoose=require("mongoose")

const userSchema = mongoose.Schema({
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
    password:{
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
    terms_condition:{
        type:Boolean,
        required:false
    }
},{
    versionKey:false,
})

const UserModel = mongoose.model("user",userSchema)

module.exports={UserModel}

const express= require("express");
const jwt =require("jsonwebtoken");
const bcrypt= require("bcrypt");
const { UserModel } = require("../Model/User.Model");
const { userAuthenticate } = require("../Middleware/user.authentication");


require("dotenv").config()
 const userRouter=express.Router();

 userRouter.get('/user', userAuthenticate,async (req, res) => {

    const {user}=req.body;
    console.log(user);
    try {
       await UserModel.findOne({_id:user}).then(r => {
            return res.status(200).send(r)
        });
    } catch (e) {
        return res.status(400).send(e.message)
    }

})

 userRouter.post("/register",async(req,res)=>{
    const {email,password,first_name,last_name,gender,mobile,city} = req.body;
    try {
         bcrypt.hash(password,5,async(err,hash)=>{
            if(err) res.send ({"msg":"Something went wrong",error:err.message})
            else{
                const user = new UserModel({first_name,last_name,email, password:hash,gender,mobile,city})
                await user.save()
                let regdata=await UserModel.findOne({email:email})
                res.send ({"msg":"New Users has been register",data:regdata})
            }
         })
    } catch (err) {
        res.send ({"msg":"Something went wrong",error:err.message})
    }
 })

 userRouter.post("/login",async(req,res)=>{
    const {email,password} = req.body;
    try {
          const user = await UserModel.find({email})
          if(user.length>0){
            bcrypt.compare(password,user[0].password,(err,result)=>{
                if(result){
                let token = jwt.sign({userID:user[0]._id},process.env.userkey)  
                res.send({"msg":"Login Successful",token:token})  ;
                }else{
                    res.send({"msg":"Wrong Credentials"})
                }
            });
          } else{
            res.send({"msg":"Wrong Credentials"})
          }
    } catch (err) {
        res.send ({"msg":"Something went wrong",error:err.message})
    }
 })

 userRouter.patch('/forgot-password/', async (req, res) => {
    const { email, password } = req.body
    const data = await UserModel.find({ email })
    if (data.length > 0) {
      try {
        bcrypt.hash(password, 5, async (err, hash) => {
          if (err) res.send({ msg: "Something went wrong", error: err.message });
          else {
            await UserModel.findOneAndUpdate({ email }, { password:hash })
            res.status(201).send({ msg: "Password is Updated" })
           
          }
        });
      } catch (error) {
        res.send({ msg: "Email is not registered.", error: error.message });
      }
    }
    else {
      res.send({ msg: "Email is not registered." })
    }
  })

  userRouter.delete('/delete', async (req, res) => {
    const { email} = req.body
    const data = await UserModel.find({ email })
    if (data.length > 0) {
      try {
        
       await UserModel.findOneAndDelete({ email })
            res.status(201).send({ msg: "User has been deleted" })
           
      } catch (error) {
        res.send({ msg: "Email is not registered.", error: error.message });
      }
    }
    else {
      res.send({ msg: "Email is not registered." })
    }
  })
 
 module.exports={userRouter}


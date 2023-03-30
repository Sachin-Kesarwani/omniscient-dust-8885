const mongoose=require("mongoose")

require("dotenv").config()

const connection= mongoose.connect('mongodb+srv://charchit:charchit@cluster0.wkxql.mongodb.net/lenskart?retryWrites=true&w=majority')

module.exports={connection}
const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://Shoyo:7B82ds497rebae@cluster0.dvvfqra.mongodb.net/").then(() => {
    console.log("Mongodb Connected");
})
.catch(() => {
    console.log("Failed to Connect");
})

const LogInSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})


const collection = new mongoose.model("Collection1", LogInSchema)

module.exports=collection
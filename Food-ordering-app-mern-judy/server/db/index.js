const mongoose =require("mongoose");

mongoose.connect("mongodb+srv://edas:tAqY07DwxoVK707G@food-ordering1.7njhmmm.mongodb.net/food-ordering",{useNewUrlParser:true})
// mongoose
//     .connect('mongodb://localhost:27017/food-ordering', { useNewUrlParser: true })
.catch(error=>{
    console.log("connection error",error.message)
})

const db=mongoose.connection

module.exports=db
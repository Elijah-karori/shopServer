const mongoose =require("mongoose"); //import the ODM library to connect to the MONGO DATABASE

const dbConnect =async ()=>{
    console.log(process.env.MONGO_URI)
    const db=await mongoose.connect("mongodb://127.0.0.1:27017/shop")
    console.log(db.connection.db.databaseName)
}
module.exports= dbConnect;
    

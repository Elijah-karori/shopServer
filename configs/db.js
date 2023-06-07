const mongoose =require("mongoose"); //import the ODM library to connect to the MONGO DATABASE

const dbConnect =async ()=>{
    console.log(process.env.MONGO_URI)
    const db=await mongoose.connect(process.env.MONGO_URI)
    console.log(db.connection.db.databaseName)
}
module.exports= dbConnect;
    

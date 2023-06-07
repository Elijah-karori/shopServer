const  mongoose  = require("mongoose");
const{ Schema }= mongoose
const DeletedProductSchema = new Schema({
description: String,
  image: String,
    name: String,
    price: Number,
   added: { type: Date, default: Date.now },
  });

  const DeletedProduct =mongoose.model('DeletedProduct', DeletedProductSchema);
  

  module.exports=DeletedProduct
const express = require("express");


const {
  getAllitems,
  createitem,
  getitem,
  updateitem,
  deleteitem,
  getForm,
  getUseritem
} = require("../controllers/items/itemsServices");// functions from the itemsServices.js 
 
const router = express.Router();// accept route request
 
router.route("/").get(getAllitems);//routes for items
router.route("/item").get(getitem);//routes for items
router.route("/items").get(getUseritem)//routes for items
router.route("/create").get(getForm).post(createitem);//routes for items
router.route("/update").get(getForm).post(updateitem);
router.route("/delete").get(getForm).post(deleteitem);
module.exports = router;
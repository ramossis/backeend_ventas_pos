const express=require('express')
const route=express.Router()
const CategoiresController=require("../controllers/categories.controller")

route.get("/",CategoiresController.getAllCategories)
route.post("/jk",,,)
module.exports=route
const express=require('express')

const app=express.Router()

const productsController=require("../controllers/products.controller")

app.get("/",productsController.getAllProduct)

module.exports=app
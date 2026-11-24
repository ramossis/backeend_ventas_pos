const express=require('express')
const route=express.Router()
const ProductsController=require("../controllers/products.controller")

route.get("/",ProductsController.getAllProducts)
route.post("/",ProductsController.createProducts)
route.put("/:id",ProductsController.updateProducts)
route.delete("/:id",ProductsController.deleteProducts)

module.exports=route

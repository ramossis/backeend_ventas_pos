const express=require('express')
const route=express.Router()
const SalesController=require("../controllers/sales.controller")

route.get("/",SalesController.getAllSales)
route.post("/",SalesController.createSales)
route.put("/:id",SalesController.updateSales)
route.delete("/:id",SalesController.deleteSales)

module.exports=route

const express=require('express')
const route=express.Router()
const SaleItemsController=require("../controllers/saleItems.controller")

route.get("/",SaleItemsController.getAllSaleItems)
route.post("/",SaleItemsController.createSaleItems)
route.put("/:id",SaleItemsController.updateSaleItems)
route.delete("/:id",SaleItemsController.deleteSaleItems)

module.exports=route

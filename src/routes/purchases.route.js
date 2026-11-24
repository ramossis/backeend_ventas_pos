const express=require('express')
const route=express.Router()
const PurchasesController=require("../controllers/purchases.controller")

route.get("/",PurchasesController.getAllPurchases)
route.post("/",PurchasesController.createPurchases)
route.put("/:id",PurchasesController.updatePurchases)
route.delete("/:id",PurchasesController.deletePurchases)

module.exports=route

const express=require('express')
const route=express.Router()
const DiscountsController=require("../controllers/discounts.controller")

route.get("/",DiscountsController.getAllDiscounts)
route.post("/",DiscountsController.createDiscounts)
route.put("/:id",DiscountsController.updateDiscounts)
route.delete("/:id",DiscountsController.deleteDiscounts)

module.exports=route

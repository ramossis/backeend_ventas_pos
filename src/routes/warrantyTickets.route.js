const express=require('express')
const route=express.Router()
const WarrantyTicketsController=require("../controllers/warrantyTickets.controller")

route.get("/",WarrantyTicketsController.getAllWarrantyTickets)
route.post("/",WarrantyTicketsController.createWarrantyTickets)
route.put("/:id",WarrantyTicketsController.updateWarrantyTickets)
route.delete("/:id",WarrantyTicketsController.deleteWarrantyTickets)

module.exports=route

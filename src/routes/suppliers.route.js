const express=require('express')
const route=express.Router()
const SuppliersController=require("../controllers/suppliers.controller")

route.get("/",SuppliersController.getAllSuppliers)
route.post("/",SuppliersController.createSuppliers)
route.put("/:id",SuppliersController.updateSuppliers)
route.delete("/:id",SuppliersController.deleteSuppliers)

module.exports=route

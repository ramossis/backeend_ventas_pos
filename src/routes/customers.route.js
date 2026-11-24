const express=require('express')
const route=express.Router()
const CustomersController=require("../controllers/customers.controller")

route.get("/",CustomersController.getAllCustomers)
route.post("/",CustomersController.createCustomers)
route.put("/:id",CustomersController.updateCustomers)
route.delete("/:id",CustomersController.deleteCustomers)

module.exports=route

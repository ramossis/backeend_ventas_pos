const express=require('express')
const route=express.Router()
const UsersController=require("../controllers/users.controller")

route.get("/",UsersController.getAllUsers)
route.post("/",UsersController.createUsers)
route.put("/:id",UsersController.updateUsers)
route.delete("/:id",UsersController.deleteUsers)

module.exports=route

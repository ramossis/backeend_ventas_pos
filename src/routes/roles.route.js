const express=require('express')
const route=express.Router()
const RolesController=require("../controllers/roles.controller")

route.get("/",RolesController.getAllRoles)
route.post("/",RolesController.createRoles)
route.put("/:id",RolesController.updateRoles)
route.delete("/:id",RolesController.deleteRoles)

module.exports=route

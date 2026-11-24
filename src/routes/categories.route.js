const express=require('express')
const route=express.Router()
const CategoiresController=require("../controllers/categories.controller")

route.get("/",CategoiresController.getAllCategories)
route.post("/",CategoiresController.createCategories)
route.put("/:id",CategoiresController.updateCategories)
route.delete("/:id",CategoiresController.deleteCategories)

module.exports=route
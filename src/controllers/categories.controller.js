const Categories=require('../models/Categories')

const CategoriesController={}

CategoriesController.getAllCategories=async(req,res)=>{
    try {
      const categories= await Categories.getAll()
      return res.status(200).json(categories)  
    } catch (error) {
        console.error(error)
        return res.status(500).json({error})
    }
}

CategoriesController.createCategories=async(req,res)=>{
    try {
        const data=req.body
        const category = await Categories.createCategory(data)
        return res.status(201).json({message:"Categoria Registrada"})
    } catch (error) {
        console.error(error)
        return res.status(500).json({error:"Error Interno del Servidor"})
    }
}

CategoriesController.updateCategories=async(req,res)=>{
    try {
        const {id}=req.params
        const data=req.body
        const category = await Categories.updateCategory(id,data)
        return res.status(200).json({message:"Categoria Actualizada"})
    } catch (error) {
        console.error(error)
        return res.status(500).json({error:"Error Interno del Servidor"})
    }
}

CategoriesController.deleteCategories=async(req,res)=>{
    try {
        const {id}=req.params
        const category = await Categories.deleteCategory(id)
        return res.status(200).json({message:"Categoria Eliminada"})
    } catch (error) {
        console.error(error)
        return res.status(500).json({error:"Error Interno del Servidor"})
    }
}
module.exports=CategoriesController
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
module.exports=CategoriesController
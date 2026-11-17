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
module.exports=CategoriesController
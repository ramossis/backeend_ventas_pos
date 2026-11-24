const Products=require('../models/Products')

const ProductsController={}

ProductsController.getAllProducts=async(req,res)=>{
    try {
        const products= await Products.getAll()
        return res.status(200).json(products)
    } catch (error) {
        console.error(error)
        return res.status(500).json({error})
    }
}

ProductsController.createProducts=async(req,res)=>{
    try {
        const data=req.body
        const product = await Products.createProduct(data)
        return res.status(201).json({message:"Producto Registrado"})
    } catch (error) {
        console.error(error)
        return res.status(500).json({error:"Error Interno del Servidor"})
    }
}

ProductsController.updateProducts=async(req,res)=>{
    try {
        const {id}=req.params
        const data=req.body
        const product = await Products.updateProduct(id,data)
        return res.status(200).json({message:"Producto Actualizado"})
    } catch (error) {
        console.error(error)
        return res.status(500).json({error:"Error Interno del Servidor"})
    }
}

ProductsController.deleteProducts=async(req,res)=>{
    try {
        const {id}=req.params
        const product = await Products.deleteProduct(id)
        return res.status(200).json({message:"Producto Eliminado"})
    } catch (error) {
        console.error(error)
        return res.status(500).json({error:"Error Interno del Servidor"})
    }
}
module.exports=ProductsController

const Discounts=require('../models/Discounts')

const DiscountsController={}

DiscountsController.getAllDiscounts=async(req,res)=>{
    try {
        const discounts= await Discounts.getAll()
        return res.status(200).json(discounts)
    } catch (error) {
        console.error(error)
        return res.status(500).json({error})
    }
}

DiscountsController.createDiscounts=async(req,res)=>{
    try {
        const data=req.body
        const discount = await Discounts.createDiscount(data)
        return res.status(201).json({message:"Descuento Registrado"})
    } catch (error) {
        console.error(error)
        return res.status(500).json({error:"Error Interno del Servidor"})
    }
}

DiscountsController.updateDiscounts=async(req,res)=>{
    try {
        const {id}=req.params
        const data=req.body
        const discount = await Discounts.updateDiscount(id,data)
        return res.status(200).json({message:"Descuento Actualizado"})
    } catch (error) {
        console.error(error)
        return res.status(500).json({error:"Error Interno del Servidor"})
    }
}

DiscountsController.deleteDiscounts=async(req,res)=>{
    try {
        const {id}=req.params
        const discount = await Discounts.deleteDiscount(id)
        return res.status(200).json({message:"Descuento Eliminado"})
    } catch (error) {
        console.error(error)
        return res.status(500).json({error:"Error Interno del Servidor"})
    }
}
module.exports=DiscountsController

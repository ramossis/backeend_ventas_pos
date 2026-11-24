const SaleItems=require('../models/SaleItems')

const SaleItemsController={}

SaleItemsController.getAllSaleItems=async(req,res)=>{
    try {
        const saleItems= await SaleItems.getAll()
        return res.status(200).json(saleItems)
    } catch (error) {
        console.error(error)
        return res.status(500).json({error})
    }
}

SaleItemsController.createSaleItems=async(req,res)=>{
    try {
        const data=req.body
        const saleItem = await SaleItems.createSaleItem(data)
        return res.status(201).json({message:"Detalle de Venta Registrado"})
    } catch (error) {
        console.error(error)
        return res.status(500).json({error:"Error Interno del Servidor"})
    }
}

SaleItemsController.updateSaleItems=async(req,res)=>{
    try {
        const {id}=req.params
        const data=req.body
        const saleItem = await SaleItems.updateSaleItem(id,data)
        return res.status(200).json({message:"Detalle de Venta Actualizado"})
    } catch (error) {
        console.error(error)
        return res.status(500).json({error:"Error Interno del Servidor"})
    }
}

SaleItemsController.deleteSaleItems=async(req,res)=>{
    try {
        const {id}=req.params
        const saleItem = await SaleItems.deleteSaleItem(id)
        return res.status(200).json({message:"Detalle de Venta Eliminado"})
    } catch (error) {
        console.error(error)
        return res.status(500).json({error:"Error Interno del Servidor"})
    }
}
module.exports=SaleItemsController

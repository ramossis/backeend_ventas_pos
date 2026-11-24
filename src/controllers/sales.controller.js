const Sales=require('../models/Sales')

const SalesController={}

SalesController.getAllSales=async(req,res)=>{
    try {
        const sales= await Sales.getAll()
        return res.status(200).json(sales)
    } catch (error) {
        console.error(error)
        return res.status(500).json({error})
    }
}

SalesController.createSales=async(req,res)=>{
    try {
        const data=req.body
        const sale = await Sales.createSale(data)
        return res.status(201).json({message:"Venta Registrada"})
    } catch (error) {
        console.error(error)
        return res.status(500).json({error:"Error Interno del Servidor"})
    }
}

SalesController.updateSales=async(req,res)=>{
    try {
        const {id}=req.params
        const data=req.body
        const sale = await Sales.updateSale(id,data)
        return res.status(200).json({message:"Venta Actualizada"})
    } catch (error) {
        console.error(error)
        return res.status(500).json({error:"Error Interno del Servidor"})
    }
}

SalesController.deleteSales=async(req,res)=>{
    try {
        const {id}=req.params
        const sale = await Sales.deleteSale(id)
        return res.status(200).json({message:"Venta Eliminada"})
    } catch (error) {
        console.error(error)
        return res.status(500).json({error:"Error Interno del Servidor"})
    }
}
module.exports=SalesController

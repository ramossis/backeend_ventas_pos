const Purchases=require('../models/Purchases')

const PurchasesController={}

PurchasesController.getAllPurchases=async(req,res)=>{
    try {
        const purchases= await Purchases.getAll()
        return res.status(200).json(purchases)
    } catch (error) {
        console.error(error)
        return res.status(500).json({error})
    }
}

PurchasesController.createPurchases=async(req,res)=>{
    try {
        const data=req.body
        const purchase = await Purchases.createPurchase(data)
        return res.status(201).json({message:"Compra Registrada"})
    } catch (error) {
        console.error(error)
        return res.status(500).json({error:"Error Interno del Servidor"})
    }
}

PurchasesController.updatePurchases=async(req,res)=>{
    try {
        const {id}=req.params
        const data=req.body
        const purchase = await Purchases.updatePurchase(id,data)
        return res.status(200).json({message:"Compra Actualizada"})
    } catch (error) {
        console.error(error)
        return res.status(500).json({error:"Error Interno del Servidor"})
    }
}

PurchasesController.deletePurchases=async(req,res)=>{
    try {
        const {id}=req.params
        const purchase = await Purchases.deletePurchase(id)
        return res.status(200).json({message:"Compra Eliminada"})
    } catch (error) {
        console.error(error)
        return res.status(500).json({error:"Error Interno del Servidor"})
    }
}
module.exports=PurchasesController

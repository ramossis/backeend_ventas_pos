const Suppliers=require('../models/Suppliers')

const SuppliersController={}

SuppliersController.getAllSuppliers=async(req,res)=>{
    try {
        const suppliers= await Suppliers.getAll()
        return res.status(200).json(suppliers)
    } catch (error) {
        console.error(error)
        return res.status(500).json({error})
    }
}

SuppliersController.createSuppliers=async(req,res)=>{
    try {
        const data=req.body
        const supplier = await Suppliers.createSupplier(data)
        return res.status(201).json({message:"Proveedor Registrado"})
    } catch (error) {
        console.error(error)
        return res.status(500).json({error:"Error Interno del Servidor"})
    }
}

SuppliersController.updateSuppliers=async(req,res)=>{
    try {
        const {id}=req.params
        const data=req.body
        const supplier = await Suppliers.updateSupplier(id,data)
        return res.status(200).json({message:"Proveedor Actualizado"})
    } catch (error) {
        console.error(error)
        return res.status(500).json({error:"Error Interno del Servidor"})
    }
}

SuppliersController.deleteSuppliers=async(req,res)=>{
    try {
        const {id}=req.params
        const supplier = await Suppliers.deleteSupplier(id)
        return res.status(200).json({message:"Proveedor Eliminado"})
    } catch (error) {
        console.error(error)
        return res.status(500).json({error:"Error Interno del Servidor"})
    }
}
module.exports=SuppliersController

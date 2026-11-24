const WarrantyTickets=require('../models/WarrantyTickets')

const WarrantyTicketsController={}

WarrantyTicketsController.getAllWarrantyTickets=async(req,res)=>{
    try {
        const warrantyTickets= await WarrantyTickets.getAll()
        return res.status(200).json(warrantyTickets)
    } catch (error) {
        console.error(error)
        return res.status(500).json({error})
    }
}

WarrantyTicketsController.createWarrantyTickets=async(req,res)=>{
    try {
        const data=req.body
        const warrantyTicket = await WarrantyTickets.createWarrantyTicket(data)
        return res.status(201).json({message:"Ticket Registrado"})
    } catch (error) {
        console.error(error)
        return res.status(500).json({error:"Error Interno del Servidor"})
    }
}

WarrantyTicketsController.updateWarrantyTickets=async(req,res)=>{
    try {
        const {id}=req.params
        const data=req.body
        const warrantyTicket = await WarrantyTickets.updateWarrantyTicket(id,data)
        return res.status(200).json({message:"Ticket Actualizado"})
    } catch (error) {
        console.error(error)
        return res.status(500).json({error:"Error Interno del Servidor"})
    }
}

WarrantyTicketsController.deleteWarrantyTickets=async(req,res)=>{
    try {
        const {id}=req.params
        const warrantyTicket = await WarrantyTickets.deleteWarrantyTicket(id)
        return res.status(200).json({message:"Ticket Eliminado"})
    } catch (error) {
        console.error(error)
        return res.status(500).json({error:"Error Interno del Servidor"})
    }
}
module.exports=WarrantyTicketsController

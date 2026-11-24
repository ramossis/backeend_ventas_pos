const Customers=require('../models/Customers')

const CustomersController={}

CustomersController.getAllCustomers=async(req,res)=>{
    try {
        const customers= await Customers.getAll()
        return res.status(200).json(customers)
    } catch (error) {
        console.error(error)
        return res.status(500).json({error})
    }
}

CustomersController.createCustomers=async(req,res)=>{
    try {
        const data=req.body
        const customer = await Customers.createCustomer(data)
        return res.status(201).json({message:"Cliente Registrado"})
    } catch (error) {
        console.error(error)
        return res.status(500).json({error:"Error Interno del Servidor"})
    }
}

CustomersController.updateCustomers=async(req,res)=>{
    try {
        const {id}=req.params
        const data=req.body
        const customer = await Customers.updateCustomer(id,data)
        return res.status(200).json({message:"Cliente Actualizado"})
    } catch (error) {
        console.error(error)
        return res.status(500).json({error:"Error Interno del Servidor"})
    }
}

CustomersController.deleteCustomers=async(req,res)=>{
    try {
        const {id}=req.params
        const customer = await Customers.deleteCustomer(id)
        return res.status(200).json({message:"Cliente Eliminado"})
    } catch (error) {
        console.error(error)
        return res.status(500).json({error:"Error Interno del Servidor"})
    }
}
module.exports=CustomersController

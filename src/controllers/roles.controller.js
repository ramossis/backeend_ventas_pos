const Roles=require('../models/Roles')

const RolesController={}

RolesController.getAllRoles=async(req,res)=>{
    try {
        const roles= await Roles.getAll()
        return res.status(200).json(roles)
    } catch (error) {
        console.error(error)
        return res.status(500).json({error})
    }
}

RolesController.createRoles=async(req,res)=>{
    try {
        const data=req.body
        const role = await Roles.createRole(data)
        return res.status(201).json({message:"Rol Registrado"})
    } catch (error) {
        console.error(error)
        return res.status(500).json({error:"Error Interno del Servidor"})
    }
}

RolesController.updateRoles=async(req,res)=>{
    try {
        const {id}=req.params
        const data=req.body
        const role = await Roles.updateRole(id,data)
        return res.status(200).json({message:"Rol Actualizado"})
    } catch (error) {
        console.error(error)
        return res.status(500).json({error:"Error Interno del Servidor"})
    }
}

RolesController.deleteRoles=async(req,res)=>{
    try {
        const {id}=req.params
        const role = await Roles.deleteRole(id)
        return res.status(200).json({message:"Rol Eliminado"})
    } catch (error) {
        console.error(error)
        return res.status(500).json({error:"Error Interno del Servidor"})
    }
}
module.exports=RolesController

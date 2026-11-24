const Users=require('../models/Users')

const UsersController={}

UsersController.getAllUsers=async(req,res)=>{
    try {
        const users= await Users.getAll()
        return res.status(200).json(users)
    } catch (error) {
        console.error(error)
        return res.status(500).json({error})
    }
}

UsersController.createUsers=async(req,res)=>{
    try {
        const data=req.body
        const user = await Users.createUser(data)
        return res.status(201).json({message:"Usuario Registrado"})
    } catch (error) {
        console.error(error)
        return res.status(500).json({error:"Error Interno del Servidor"})
    }
}

UsersController.updateUsers=async(req,res)=>{
    try {
        const {id}=req.params
        const data=req.body
        const user = await Users.updateUser(id,data)
        return res.status(200).json({message:"Usuario Actualizado"})
    } catch (error) {
        console.error(error)
        return res.status(500).json({error:"Error Interno del Servidor"})
    }
}

UsersController.deleteUsers=async(req,res)=>{
    try {
        const {id}=req.params
        const user = await Users.deleteUser(id)
        return res.status(200).json({message:"Usuario Eliminado"})
    } catch (error) {
        console.error(error)
        return res.status(500).json({error:"Error Interno del Servidor"})
    }
}
module.exports=UsersController

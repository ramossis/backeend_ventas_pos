const db = require("../config/db")

const Roles={}

Roles.getAll=async()=>{
    try {
        const [rows]= await db.query("SELECT * FROM roles")
        return rows
    } catch (error) {
        throw error
    }
}
Roles.createRole=async(data)=>{
    try {
        const {role_name,description=null}=data
        const [rows]= await db.query("INSERT INTO roles (role_name,description) VALUES (?,?)",[role_name,description])
        return rows
    } catch (error) {
        throw error
    }
}
Roles.updateRole=async(id,data)=>{
    try {
        const {role_name,description=null}=data
        const [rows]= await db.query("UPDATE roles SET role_name=?,description=? WHERE role_id=?",[role_name,description,id])
        return rows
    } catch (error) {
        throw error
    }
}
Roles.deleteRole=async(id)=>{
    try {
        const [rows]= await db.query("DELETE FROM roles WHERE role_id=?",[id])
        return rows
    } catch (error) {
        throw error
    }
}
module.exports=Roles

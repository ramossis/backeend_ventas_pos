const db = require("../config/db")

const Users={}

Users.getAll=async()=>{
    try {
        const [rows]= await db.query("SELECT users_id, role_id, username, email, full_name, is_active, created_at FROM users")
        return rows
    } catch (error) {
        throw error
    }
}
Users.createUser=async(data)=>{
    try {
        const {role_id,username,email,password,full_name,is_active=1}=data
        const [rows]= await db.query("INSERT INTO users (role_id,username,email,password,full_name,is_active) VALUES (?,?,?,?,?,?)",[role_id,username,email,password,full_name,is_active])
        return rows
    } catch (error) {
        throw error
    }
}
Users.updateUser=async(id,data)=>{
    try {
        const {role_id,username,email,password,full_name,is_active=1}=data
        const [rows]= await db.query("UPDATE users SET role_id=?,username=?,email=?,password=?,full_name=?,is_active=? WHERE users_id=?",[role_id,username,email,password,full_name,is_active,id])
        return rows
    } catch (error) {
        throw error
    }
}
Users.deleteUser=async(id)=>{
    try {
        const [rows]= await db.query("DELETE FROM users WHERE users_id=?",[id])
        return rows
    } catch (error) {
        throw error
    }
}
module.exports=Users

const db = require("../config/db")

const Discounts={}

Discounts.getAll=async()=>{
    try {
        const [rows]= await db.query("SELECT * FROM discounts")
        return rows
    } catch (error) {
        throw error
    }
}
Discounts.createDiscount=async(data)=>{
    try {
        const {code,discount_type,value,expires_at,is_active=1}=data
        const [rows]= await db.query("INSERT INTO discounts (code,discount_type,value,expires_at,is_active) VALUES (?,?,?,?,?)",[code,discount_type,value,expires_at,is_active])
        return rows
    } catch (error) {
        throw error
    }
}
Discounts.updateDiscount=async(id,data)=>{
    try {
        const {code,discount_type,value,expires_at,is_active=1}=data
        const [rows]= await db.query("UPDATE discounts SET code=?,discount_type=?,value=?,expires_at=?,is_active=? WHERE discount_id=?",[code,discount_type,value,expires_at,is_active,id])
        return rows
    } catch (error) {
        throw error
    }
}
Discounts.deleteDiscount=async(id)=>{
    try {
        const [rows]= await db.query("DELETE FROM discounts WHERE discount_id=?",[id])
        return rows
    } catch (error) {
        throw error
    }
}
module.exports=Discounts

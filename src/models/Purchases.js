const db = require("../config/db")

const Purchases={}

Purchases.getAll=async()=>{
    try {
        const [rows]= await db.query("SELECT * FROM purchases")
        return rows
    } catch (error) {
        throw error
    }
}
Purchases.createPurchase=async(data)=>{
    try {
        const {supplier_id,users_id,total_cost}=data
        const [rows]= await db.query("INSERT INTO purchases (supplier_id,users_id,total_cost) VALUES (?,?,?)",[supplier_id,users_id,total_cost])
        return rows
    } catch (error) {
        throw error
    }
}
Purchases.updatePurchase=async(id,data)=>{
    try {
        const {supplier_id,users_id,total_cost}=data
        const [rows]= await db.query("UPDATE purchases SET supplier_id=?,users_id=?,total_cost=? WHERE purchase_id=?",[supplier_id,users_id,total_cost,id])
        return rows
    } catch (error) {
        throw error
    }
}
Purchases.deletePurchase=async(id)=>{
    try {
        const [rows]= await db.query("DELETE FROM purchases WHERE purchase_id=?",[id])
        return rows
    } catch (error) {
        throw error
    }
}
module.exports=Purchases
